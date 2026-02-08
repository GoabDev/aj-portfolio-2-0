"use client";

import { motion } from "motion/react";
import { X, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";

// Define the Project type based on usage. 
// Ideally this should be imported from a types file if available, but for now we define it here to match projects.ts
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  features?: string[];
  role?: string;
  workDone?: string[];
  challenges?: string[];
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ zIndex: 9999 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div
        layoutId={`project-card-${project.id}`}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 dark:bg-white/10 hover:bg-black/70 dark:hover:bg-white/20 text-white rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full h-auto max-h-[50vh] relative bg-gray-100 dark:bg-zinc-800">
           <motion.div layoutId={`project-image-${project.id}`} className="w-full h-full">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain bg-gray-900" 
            />
           </motion.div>
        </div>

        {/* Content Section */}
        <div className="w-full p-6 md:p-8 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {tech}
                    </span>
                ))}
            </div>
            
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
            
            {project.role && (
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                    {project.role}
                </p>
            )}
            
            <div className="prose dark:prose-invert max-w-none text-sm text-gray-600 dark:text-gray-300 mb-6 space-y-4">
                <p>{project.description}</p>
                
                {project.features && project.features.length > 0 && (
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Show functionality/work done if available for more depth */}
                 {project.workDone && project.workDone.length > 0 && (
                    <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">My Contribution</h4>
                         <ul className="list-disc pl-5 space-y-1">
                            {project.workDone.map((work, i) => (
                                <li key={i}>{work}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="mt-auto pt-6 flex flex-wrap gap-4 border-t border-gray-100 dark:border-zinc-800">
                {project.liveUrl ? (
                    <Button onClick={() => window.open(project.liveUrl!, '_blank')} className="gap-2">
                        <ExternalLink size={16} />
                        Visit Live Site
                    </Button>
                ) : (
                    <Button disabled variant="secondary" className="gap-2 opacity-70 cursor-not-allowed">
                        <ExternalLink size={16} />
                        Internal / Private Project
                    </Button>
                )}
                
                {project.githubUrl && (
                     <Button variant="outline" onClick={() => window.open(project.githubUrl!, '_blank')} className="gap-2">
                        <Github size={16} />
                        View Code
                    </Button>
                )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
