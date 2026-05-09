import { useResume } from "../context/ResumeContext";
import { Plus, Trash2 } from "lucide-react";

export default function ResumeForm() {
  const {
    resumeData,
    updatePersonalInfo,
    updateObjective,
    updateArrayItem,
    addArrayItem,
    removeArrayItem,
    updateSkills,
    updateAchievements,
  } = useResume();

  const handleSkillChange = (e) => {
    const value = e.target.value;
    updateSkills(value.split(",").map((s) => s.trim()).filter((s) => s));
  };

  const handleAchievementChange = (e) => {
    const value = e.target.value;
    updateAchievements(value.split("\n").filter((s) => s.trim()));
  };

  return (
    <div className="space-y-8 pb-10">
      
      {/* Personal Info */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold border-b border-border pb-2">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Full Name</label>
            <input 
              className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition"
              value={resumeData.personalInfo.fullName}
              onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input 
              className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition"
              value={resumeData.personalInfo.email}
              onChange={(e) => updatePersonalInfo("email", e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Phone</label>
            <input 
              className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition"
              value={resumeData.personalInfo.phone}
              onChange={(e) => updatePersonalInfo("phone", e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Location</label>
            <input 
              className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition"
              value={resumeData.personalInfo.location}
              onChange={(e) => updatePersonalInfo("location", e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">LinkedIn (Optional)</label>
            <input 
              className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition"
              value={resumeData.personalInfo.linkedin || ""}
              onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Portfolio (Optional)</label>
            <input 
              className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition"
              value={resumeData.personalInfo.portfolio || ""}
              onChange={(e) => updatePersonalInfo("portfolio", e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Objective */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold border-b border-border pb-2">Career Objective</h2>
        <textarea 
          rows="4"
          className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition resize-none"
          value={resumeData.objective}
          onChange={(e) => updateObjective(e.target.value)}
        />
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <div className="flex justify-between items-center border-b border-border pb-2">
          <h2 className="text-xl font-bold">Experience</h2>
          <button 
            onClick={() => addArrayItem("experience", { id: Date.now().toString(), company: "", position: "", startDate: "", endDate: "", description: "" })}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
          >
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
        {resumeData.experience.map((exp, index) => (
          <div key={exp.id} className="p-4 bg-muted/50 rounded-lg space-y-4 relative group border border-border/50">
            <button 
              onClick={() => removeArrayItem("experience", index)}
              className="absolute top-2 right-2 p-2 text-destructive opacity-0 group-hover:opacity-100 transition-opacity rounded-md hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <input placeholder="Job Title" className="w-full p-2 rounded border border-input bg-background" value={exp.position} onChange={(e) => updateArrayItem("experience", index, "position", e.target.value)} />
              <input placeholder="Company" className="w-full p-2 rounded border border-input bg-background" value={exp.company} onChange={(e) => updateArrayItem("experience", index, "company", e.target.value)} />
              <input placeholder="Start Date (e.g., Jan 2020)" className="w-full p-2 rounded border border-input bg-background" value={exp.startDate} onChange={(e) => updateArrayItem("experience", index, "startDate", e.target.value)} />
              <input placeholder="End Date (e.g., Present)" className="w-full p-2 rounded border border-input bg-background" value={exp.endDate} onChange={(e) => updateArrayItem("experience", index, "endDate", e.target.value)} />
            </div>
            <textarea placeholder="Description of your responsibilities..." rows="3" className="w-full p-2 rounded border border-input bg-background resize-none" value={exp.description} onChange={(e) => updateArrayItem("experience", index, "description", e.target.value)} />
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="space-y-4">
        <div className="flex justify-between items-center border-b border-border pb-2">
          <h2 className="text-xl font-bold">Education</h2>
          <button 
            onClick={() => addArrayItem("education", { id: Date.now().toString(), institution: "", degree: "", startDate: "", endDate: "", description: "" })}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
          >
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
        {resumeData.education.map((edu, index) => (
          <div key={edu.id} className="p-4 bg-muted/50 rounded-lg space-y-4 relative group border border-border/50">
            <button 
              onClick={() => removeArrayItem("education", index)}
              className="absolute top-2 right-2 p-2 text-destructive opacity-0 group-hover:opacity-100 transition-opacity rounded-md hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <input placeholder="Degree" className="w-full p-2 rounded border border-input bg-background" value={edu.degree} onChange={(e) => updateArrayItem("education", index, "degree", e.target.value)} />
              <input placeholder="Institution" className="w-full p-2 rounded border border-input bg-background" value={edu.institution} onChange={(e) => updateArrayItem("education", index, "institution", e.target.value)} />
              <input placeholder="Start Date" className="w-full p-2 rounded border border-input bg-background" value={edu.startDate} onChange={(e) => updateArrayItem("education", index, "startDate", e.target.value)} />
              <input placeholder="End Date" className="w-full p-2 rounded border border-input bg-background" value={edu.endDate} onChange={(e) => updateArrayItem("education", index, "endDate", e.target.value)} />
            </div>
            <textarea placeholder="Description / Coursework" rows="2" className="w-full p-2 rounded border border-input bg-background resize-none" value={edu.description} onChange={(e) => updateArrayItem("education", index, "description", e.target.value)} />
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="space-y-4">
        <div className="flex justify-between items-center border-b border-border pb-2">
          <h2 className="text-xl font-bold">Projects</h2>
          <button 
            onClick={() => addArrayItem("projects", { id: Date.now().toString(), title: "", link: "", description: "" })}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
          >
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
        {resumeData.projects && resumeData.projects.map((proj, index) => (
          <div key={proj.id} className="p-4 bg-muted/50 rounded-lg space-y-4 relative group border border-border/50">
            <button 
              onClick={() => removeArrayItem("projects", index)}
              className="absolute top-2 right-2 p-2 text-destructive opacity-0 group-hover:opacity-100 transition-opacity rounded-md hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <input placeholder="Project Title" className="w-full p-2 rounded border border-input bg-background" value={proj.title} onChange={(e) => updateArrayItem("projects", index, "title", e.target.value)} />
              <input placeholder="Project Link" className="w-full p-2 rounded border border-input bg-background" value={proj.link} onChange={(e) => updateArrayItem("projects", index, "link", e.target.value)} />
            </div>
            <textarea placeholder="Project Description" rows="2" className="w-full p-2 rounded border border-input bg-background resize-none" value={proj.description} onChange={(e) => updateArrayItem("projects", index, "description", e.target.value)} />
          </div>
        ))}
      </section>

      {/* Skills & Achievements */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold border-b border-border pb-2">Skills</h2>
          <p className="text-xs text-muted-foreground">Separate skills with commas.</p>
          <input 
            className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition"
            value={resumeData.skills.join(", ")}
            onChange={handleSkillChange}
            placeholder="e.g. React, JavaScript, Node.js"
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold border-b border-border pb-2">Additional Achievements</h2>
          <p className="text-xs text-muted-foreground">One achievement per line.</p>
          <textarea 
            rows="4"
            className="w-full p-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition resize-none"
            value={(resumeData.achievements || []).join("\n")}
            onChange={handleAchievementChange}
            placeholder="e.g. 1st Place in Hackathon&#10;Certified Cloud Architect"
          />
        </div>
      </section>

    </div>
  );
}
