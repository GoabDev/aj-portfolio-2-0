"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import {
  Gemini,
  Replit,
  MagicUI,
  VSCodium,
  MediaWiki,
  GooglePaLM,
} from "@/components/logos";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Projects = [
  {
    id: "cosmic-forge-v1",
    title: "Cosmic Forge HealthNet",
    description:
      "A comprehensive healthcare management platform designed for healthcare providers. This appears to be your flagship enterprise-level project, showcasing your ability to build production-ready applications for the healthcare industry. The platform likely includes patient management, appointment scheduling, and provider tools.",
    image: "/images/CosmicForgePage.webp",
    technologies: ["Next Js", "TypeScript", "Node.js"],
    liveUrl: "https://www.cosmicforge-healthnet.com/",
    githubUrl: "https://github.com/username/cosmic-forge-v1",
    features: [
      "Basic appointment scheduling",
      "Patient record management",
      "Provider dashboard",
      "Simple reporting",
    ],
  },
  {
    id: "academi-ai",
    title: "AcademiAi",
    description:
      "An intelligent academic recommendation system that provides 'personalized program recommendations powered by AI.' The platform helps students ' make informed decisions about your academic future with tailored guidance that matches your interests, goals, and career ambitions.",
    image: "/images/AcademiaiPage.webp",
    technologies: ["Next js", ".NET Framework", "Cloudinary"],
    liveUrl: "https://academiai.vercel.app/",
    githubUrl: "https://github.com/username/cosmic-forge-v1",
    features: [
      "Basic appointment scheduling",
      "Patient record management",
      "Provider dashboard",
      "Simple reporting",
    ],
  },
  {
    id: "cloud-clip",
    title: "Cloud Clip",
    description:
      "A modern short-form video platform designed for content creators and viewers. CloudClip provides an intuitive interface for users to upload, share, and discover engaging video content. The platform focuses on delivering a seamless social media experience similar to popular video-sharing applications",
    image: "/images/ClipCloudPage.webp",
    technologies: ["Next js", "Typescript", ".NET Framework", "Cloudinary"],
    liveUrl: "https://clipcloud-gamma.vercel.app/",
    githubUrl: "https://github.com/username/cosmic-forge-v1",
    features: [
      "Basic appointment scheduling",
      "Patient record management",
      "Provider dashboard",
      "Simple reporting",
    ],
  },
  {
    id: "panzle",
    title: "Panzle",
    description:
      "Panzle is an AI-driven custom software development and automation agency, helping businesses scale by building web and mobile platforms, integrating machine learning/NLP, and designing intuitive user interfaces.",
    image: "/images/panzleHeroImage.webp",
    technologies: ["Next.js", "TypeScript"],
    liveUrl: "https://panzle.com/",
    githubUrl: "https://github.com/username/cosmic-forge-v1",
    features: [
      "Custom software development (web and mobile) tailored to solve specific business problems",
      "AI integration & automation including ML models, natural language processing and predictive analytics",
      "Chatbot & virtual assistant development for support, sales and internal operations",
      "UI/UX design that focuses on engaging user interfaces and seamless experiences",
      "Data engineering & API design: system integrations, scalable back-ends and secure data flow",
    ],
  },
  {
    id: "720-scores",
    title: "720 Scores",
    description:
      "720Scores is a sports hub that delivers instant access to live match information, up-to-date news and insights, and interactive features like a squad builder. Users can filter by date, stay informed with predictions and lineups, and customize their experience through settings—all aimed at keeping fans connected to their favorite teams and competitions.",
    image: "/images/720Scores.webp",
    technologies: ["HTML", "CSS", "Java Script", "Django"],
    liveUrl: "https://www.720scores.com/",
    githubUrl: "https://github.com/username/cosmic-forge-v1",
    features: [
      "Basic appointment scheduling",
      "Patient record management",
      "Provider dashboard",
      "Simple reporting",
    ],
  },
];

export default function IntegrationsSection() {
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

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {Projects.map((project) => (
              <>
                <ProjectCard project={project} />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => {
  const router = useRouter();
  return (
    <div className="bg-transparent rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ">
      {/* Project Image */}
      <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-56 border">
        <img
          alt={project.title}
          src={project.image}
          width="100"
          height="100"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {project.title.split(" ")[0]}
          </span>
        </div>
      </div> */}
      </div>

      {/* Project Info */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <Button
          className="cursor-pointer"
          onClick={() => router.push(project.liveUrl)}
        >
          Visit Site
        </Button>
        {/* <button className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
          <ExternalLink size={16} />
        </button> */}
      </div>
    </div>
  );
};

const IntegrationCard = ({
  title,
  description,
  children,
  link = "https://github.com/meschacirung/cnblocks",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  link?: string;
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="*:size-10">{children}</div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6">
          <Button
            asChild
            project="secondary"
            size="sm"
            className="gap-1 pr-2 shadow-none"
          >
            <Link href={link}>
              Learn More
              <ChevronRight className="ml-0 !size-3.5 opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
