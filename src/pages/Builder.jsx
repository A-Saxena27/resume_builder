import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useResume } from "../context/ResumeContext";
import { supabase } from "../lib/supabase";
import { Menu, X } from "lucide-react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";

export default function Builder() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { setResumeData, setSelectedTemplate } = useResume();
  const [loading, setLoading] = useState(!!id);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true); // Open by default initially

  useEffect(() => {
    if (id && user) {
      fetchResume();
    }
  }, [id, user]);

  const fetchResume = async () => {
    try {
      const { data, error } = await supabase
        .from("resumes")
        .select("*")
        .eq("id", id)
        .eq("user_id", user.id)
        .single();

      if (error) throw error;
      
      if (data) {
        setResumeData(data.data);
        setSelectedTemplate(data.template || "classic");
      }
    } catch (error) {
      console.error("Error fetching resume:", error.message);
      navigate("/build", { replace: true });
    } finally {
      setLoading(false);
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
    <div className="flex-1 relative w-full h-[calc(100vh-4rem)] bg-muted/10 overflow-hidden flex">
      
      {/* Floating Toggle Button (visible when drawer is closed) */}
      <AnimatePresence>
        {!isDrawerOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -50 }}
            onClick={() => setIsDrawerOpen(true)}
            className="absolute top-6 left-6 z-40 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:bg-primary/90 transition-all flex items-center gap-2 group"
          >
            <Menu className="w-6 h-6" />
            <span className="font-semibold hidden group-hover:inline-block pr-2">Edit Details</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide-out Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            />
            
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute lg:relative z-50 w-[90%] max-w-md lg:w-1/3 h-full bg-card shadow-[10px_0_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[10px_0_40px_-10px_rgba(0,0,0,0.5)] border-r border-border/50 flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
                <h2 className="font-bold text-lg">Edit Details</h2>
                <button 
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <ResumeForm />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Preview Area */}
      <div className={`flex-1 transition-all duration-300 h-full p-4 sm:p-6 lg:p-8 overflow-hidden`}>
        <div className="h-full max-w-5xl mx-auto">
          <ResumePreview resumeId={id} />
        </div>
      </div>

    </div>
  );
}
