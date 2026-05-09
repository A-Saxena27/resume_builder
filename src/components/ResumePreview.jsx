import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useResume } from "../context/ResumeContext";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import { Download, Save, Loader2, Check } from "lucide-react";

import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import ProfessionalTemplate from "./templates/ProfessionalTemplate";
import ElegantTemplate from "./templates/ElegantTemplate";

const templates = {
  classic: { name: "Classic", component: ClassicTemplate },
  modern: { name: "Modern", component: ModernTemplate },
  creative: { name: "Creative", component: CreativeTemplate },
  minimal: { name: "Minimal", component: MinimalTemplate },
  professional: { name: "Professional", component: ProfessionalTemplate },
  elegant: { name: "Elegant", component: ElegantTemplate },
};

export default function ResumePreview({ resumeId }) {
  const { resumeData, selectedTemplate, setSelectedTemplate } = useResume();
  const { user } = useAuth();
  const navigate = useNavigate();
  const printRef = useRef();
  
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `${resumeData.personalInfo.fullName}_Resume`,
  });

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    setSaved(false);

    try {
      const payload = {
        user_id: user.id,
        title: `${resumeData.personalInfo.fullName}'s Resume`,
        data: resumeData,
        template: selectedTemplate,
        updated_at: new Date().toISOString(),
      };

      let newId = resumeId;

      if (resumeId) {
        // Update existing
        const { error } = await supabase
          .from("resumes")
          .update(payload)
          .eq("id", resumeId)
          .eq("user_id", user.id);
        if (error) throw error;
      } else {
        // Insert new
        const { data, error } = await supabase
          .from("resumes")
          .insert([payload])
          .select("id")
          .single();
        
        if (error) throw error;
        newId = data.id;
      }

      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      
      if (!resumeId && newId) {
        navigate(`/build/${newId}`, { replace: true });
      }
    } catch (error) {
      console.error("Error saving resume:", error.message);
      alert("Failed to save resume.");
    } finally {
      setSaving(false);
    }
  };

  const CurrentTemplate = templates[selectedTemplate]?.component || ClassicTemplate;

  return (
    <div className="flex flex-col h-full space-y-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-card border border-border rounded-xl shadow-sm">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-sm font-medium text-muted-foreground whitespace-nowrap">Template:</label>
          <select
            className="p-2 border border-input bg-background rounded-md text-sm outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
          >
            {Object.entries(templates).map(([key, temp]) => (
              <option key={key} value={key}>{temp.name}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={handleSave}
            disabled={saving || !user}
            title={!user ? "Login to save" : "Save to Dashboard"}
            className={`flex items-center gap-2 px-4 py-2 font-medium rounded-md transition-colors shadow-sm disabled:opacity-70 ${
              saved ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            {saving ? "Saving..." : saved ? "Saved!" : "Save"}
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" /> PDF
          </button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 overflow-auto bg-muted/30 rounded-xl border border-border p-4 md:p-8 flex justify-center items-start">
        {/* The aspect ratio of A4 is roughly 1:1.414 */}
        <div className="bg-white shadow-2xl overflow-hidden print-exact shrink-0" style={{ width: "210mm", minHeight: "297mm", transformOrigin: "top center" }}>
          {/* We attach the ref here for printing */}
          <div ref={printRef} className="w-full h-full bg-white print:m-0 print:p-0">
            <CurrentTemplate data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
}
