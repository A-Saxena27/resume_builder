import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Layout, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/10 to-transparent -z-10" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-50 dark:opacity-20 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-50 dark:opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          className="flex-1 text-center lg:text-left space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Create your professional resume in minutes</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground">
            Stand out with a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Premium Resume
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            Choose from professionally designed templates, customize your content, and download as a high-quality PDF. No sign-up required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link 
              to="/build" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-primary text-primary-foreground rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-lg hover:shadow-primary/25"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="pt-10 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Layout className="w-5 h-5" /> <span>6+ Templates</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5" /> <span>PDF Export</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 relative w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-2xl shadow-2xl border border-border bg-card overflow-hidden">
            <div className="h-8 border-b border-border bg-muted/50 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <motion.div className="h-8 w-3/4 bg-primary/20 rounded" 
                  animate={{ background: ["rgba(var(--primary), 0.2)", "rgba(var(--primary), 0.4)", "rgba(var(--primary), 0.2)"] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <div className="h-4 w-1/2 bg-muted rounded" />
              </div>
              <div className="space-y-3 pt-4">
                <div className="h-4 w-full bg-muted rounded" />
                <div className="h-4 w-5/6 bg-muted rounded" />
                <div className="h-4 w-4/6 bg-muted rounded" />
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-3">
                  <div className="h-5 w-1/2 bg-primary/20 rounded" />
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-3/4 bg-muted rounded" />
                </div>
                <div className="space-y-3">
                  <div className="h-5 w-1/2 bg-primary/20 rounded" />
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-3/4 bg-muted rounded" />
                </div>
              </div>
            </div>
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/20 dark:to-white/5 pointer-events-none" />
          </div>
          
          {/* Floating badge */}
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-xl border border-border flex items-center gap-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-2 rounded-full">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold">100% Free</p>
              <p className="text-xs text-muted-foreground">No watermark</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
