"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Projects } from "@/lib/projects";
import ProjectModal from "@/components/project-modal";

export default function IntegrationsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof Projects)[0] | null>(null);

  return (
    <section id="projects">
      <div className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Featured Projects
            </h2>
            {/* <p className="text-muted-foreground mt-6">Connect seamlessly with popular platforms and services to enhance your workflow.</p> */}
          </div>

          <motion.div 
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {Projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

const ProjectCard = ({ 
  project, 
  onClick 
}: { 
  project: (typeof Projects)[0];
  onClick: () => void;
}) => {
  return (
    <motion.div
      layoutId={`project-card-${project.id}`}
      onClick={onClick}
      className="bg-white dark:bg-zinc-900/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer group relative overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
      }}
    >
      {/* Project Image */}
      <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-56 border">
        <motion.div layoutId={`project-image-${project.id}`} className="w-full h-full">
            <img
            alt={project.title}
            src={project.image}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-card-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-secondary text-gray-700 dark:text-secondary-foreground rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
             <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-medium">
                +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 mt-auto">
        <Button
          className="w-full"
          variant="secondary"
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
};
