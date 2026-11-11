"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { Projects } from "@/lib/projects";

type Project = (typeof Projects)[number];
const covers: Record<string, { name: string; label: string; color: string; mark: string }> = {
  hooteyes: { name: "hooteyes", label: "CLOCK-IN & ATTENDANCE", color: "lime", mark: "h." },
  "proxy-socks": { name: "ProxySock", label: "PROXIES · VPN · HOSTING", color: "blue", mark: "↗" },
  baydspa: { name: "Beauty @\nYour Door", label: "BEAUTY, BROUGHT TO YOU", color: "rose", mark: "b." },
  "ag-insurance": { name: "Alliance & General", label: "INSURANCE PLC", color: "red", mark: "AG" },
  simcrossing: { name: "Simcrossing", label: "eSIM MARKETPLACE", color: "mint", mark: "s/" },
  pitchline: { name: "Pitchline", label: "LIVE MATCH ANALYTICS", color: "violet", mark: "p." },
  "ea-tutorial": { name: "EA Tutorial", label: "ONLINE LEARNING", color: "sand", mark: "ea" },
  "cosmic-forge-v1": { name: "Cosmic Forge", label: "CONNECTED HEALTHCARE", color: "mint", mark: "+" },
  panzle: { name: "Panzle", label: "SOFTWARE & AUTOMATION", color: "lime", mark: "p." },
};

function Cover({ project }: { project: Project }) {
  const cover = covers[project.id] ?? { name: project.title, label: "SELECTED PROJECT", color: "blue", mark: "+" };
  return <div className={`brand-cover cover-${cover.color}`}>
    <span className="cover-label">{cover.label}</span>
    <span className="cover-mark" aria-hidden="true">{cover.mark}</span>
    <span className="cover-name">{cover.name}</span>
    <span className="cover-caption">{project.id === "proxy-socks" ? "Website redesign" : "Selected project"}<ArrowUpRight size={16}/></span>
  </div>;
}

export function ProjectPreview({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const [active, setActive] = useState(false);
  const position = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--lens-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--lens-y", `${event.clientY - bounds.top}px`);
    setActive(true);
  };
  return <div className="project-preview" data-revealing={active} onPointerEnter={position} onPointerMove={position} onPointerLeave={() => setActive(false)}>
    <button className="project-cover-button" onClick={() => { setActive(false); onOpen(); }} aria-label={`View ${project.title} project details`}><Cover project={project}/></button>
    <div className="project-reveal" aria-hidden="true" inert>
      {project.image && <Image src={project.image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" className="lens-screenshot"/>}
    </div>
    <span className="preview-action" aria-hidden="true">View project <ArrowUpRight size={18}/></span>
  </div>;
}

export function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement as HTMLElement;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => { dialog?.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  return <dialog ref={ref} className="project-dialog project-workspace" aria-labelledby="project-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="workspace-header">
      <div className="workspace-identity"><span className="workspace-dot"/><h2 id="project-title">{project.title}</h2></div>
      <div className="workspace-actions">
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="workspace-open">Open website <ArrowUpRight size={16}/></a>}
        <button autoFocus className="workspace-close" onClick={onClose} aria-label="Close project details"><X size={20}/></button>
      </div>
    </div>
    <div className="workspace-body">
      <div className="website-pane">
        <div className="website-viewport screenshot-viewport">
          {project.image ? <Image src={project.image} alt={`${project.title} interface screenshot`} width={1906} height={1000} sizes="(max-width: 900px) 100vw, 75vw" className="full-project-screenshot" priority/> : <Cover project={project}/>}
        </div>
      </div>
      <aside className="project-details" aria-label="Project information">
        <span className="detail-label">ABOUT THE PROJECT</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.role && <section><h4>My role</h4><p>{project.role}</p></section>}
        {project.technologies.length > 0 && <section><h4>Built with</h4><div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></section>}
        {project.workDone.length > 0 && <section><h4>My contribution</h4><ul>{project.workDone.map(work => <li key={work}>{work}</li>)}</ul></section>}
        {project.features.length > 0 && <section><h4>Inside the project</h4><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>}
        {project.challenges.length > 0 && <section><h4>Challenges</h4><ul>{project.challenges.map(challenge => <li key={challenge}>{challenge}</li>)}</ul></section>}
      </aside>
    </div>
  </dialog>;
}
