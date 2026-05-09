import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";
import { FileText, Plus, Calendar, Trash2, Edit } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { user } = useAuth();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const { data, error } = await supabase
        .from("resumes")
        .select("id, title, template, updated_at")
        .order("updated_at", { ascending: false });

      if (error) throw error;
      setResumes(data || []);
    } catch (error) {
      console.error("Error fetching resumes:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteResume = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resume?")) return;
    
    try {
      const { error } = await supabase.from("resumes").delete().eq("id", id);
      if (error) throw error;
      setResumes((prev) => prev.filter((r) => r.id !== id));
    } catch (error) {
      console.error("Error deleting resume:", error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Resumes</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage and edit your saved professional resumes.</p>
        </div>
        <Link 
          to="/build" 
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition shadow-sm"
        >
          <Plus className="w-5 h-5" /> Create New
        </Link>
      </div>

      {resumes.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 bg-card rounded-2xl border border-dashed border-border flex flex-col items-center"
        >
          <div className="bg-muted p-4 rounded-full mb-4">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No resumes yet</h3>
          <p className="text-muted-foreground max-w-sm mb-6 text-sm">You haven't created any resumes. Start building your first professional resume today.</p>
          <Link 
            to="/build" 
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-secondary/80 transition"
          >
            Get Started
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume, idx) => (
            <motion.div 
              key={resume.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all flex flex-col h-48"
            >
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-foreground line-clamp-1">{resume.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full capitalize">
                    {resume.template}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-auto">
                  <Calendar className="w-3.5 h-3.5" />
                  Last updated: {new Date(resume.updated_at).toLocaleDateString()}
                </div>
              </div>
              <div className="bg-muted/50 px-5 py-3 border-t border-border flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Link 
                  to={`/build/${resume.id}`}
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition"
                >
                  <Edit className="w-4 h-4" /> Edit Resume
                </Link>
                <button 
                  onClick={() => deleteResume(resume.id)}
                  className="flex items-center gap-1.5 text-sm font-medium text-destructive hover:text-destructive/80 transition"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
