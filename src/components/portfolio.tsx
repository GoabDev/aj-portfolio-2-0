"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, ArrowUp, Menu, X, Plus, Minus, Download, Code2, Layers, MousePointer2 } from "lucide-react";
import RibbonArt from "@/components/ribbon-art";
import { ProjectPreview, ProjectDialog } from "@/components/project-preview";
import HeroWord from "@/components/hero-word";
import { Projects } from "@/lib/projects";

type Project = (typeof Projects)[number];
const order = ['hooteyes', 'proxy-socks', 'baydspa', 'ag-insurance', 'simcrossing', 'pitchline', 'ea-tutorial'];
const projects = [...Projects].sort((a,b) => (order.includes(a.id) ? order.indexOf(a.id) : 99) - (order.includes(b.id) ? order.indexOf(b.id) : 99));
const category = (p: Project) => ['baydspa','ag-insurance','panzle'].includes(p.id) ? 'Websites' : 'Web apps';
export default function Portfolio() {
  const [filter,setFilter]=useState('All work');
  const [menu,setMenu]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 8);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  const [selected,setSelected]=useState<Project|null>(null);
  const [service,setService]=useState<number|null>(0);
  const visible=projects.filter(p=>filter==='All work'||category(p)===filter);
  useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenu(false);};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close);},[]);
  return <div className="portfolio" id="top"><a href="#main" className="skip-link">Skip to content</a>
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}><a href="#top" className="wordmark" aria-label="Ajogu Joseph Issac home">aj<span>.</span></a><nav aria-label="Main navigation" id="main-nav" className={menu?'navigation is-open':'navigation'}>{[['Work','#projects'],['About','#about'],['Services','#services']].map(([name,href])=><a key={href} href={href} onClick={()=>setMenu(false)}>{name}</a>)}<a className="nav-contact" href="#contact" onClick={()=>setMenu(false)}>Let’s talk <ArrowUpRight size={16}/></a></nav><button className="menu-toggle" aria-controls="main-nav" aria-expanded={menu} aria-label={menu?'Close menu':'Open menu'} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
    <main id="main"><section className="hero hero-editorial">
      <RibbonArt />
      <div className="hero-content shell">

        <div className="hero-composition"><h1 aria-label="Crafting digital experiences, products, designs, and websites."><span aria-hidden="true">Crafting digital</span><br/><HeroWord /></h1><div className="hero-intro"><span className="hero-intro-mark" aria-hidden="true">↗</span><p>Thoughtfully designed.<br/>Purposefully built.<br/>Made for real people.</p></div></div>
        <div className="hero-bottom"><div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowDown size={18}/></a><a className="text-link" href="/docs/Ajogu-Joseph.pdf" target="_blank" rel="noopener noreferrer">Résumé <Download size={16}/></a></div><span className="hero-index">FRONTEND / FULL-STACK / CREATIVE DEVELOPMENT</span></div>
      </div>
    </section>
    <section className="work-section shell" id="projects"><div className="section-heading"><div><h2>A few things<br/>I’ve brought to life<span>.</span></h2></div><p>Websites, products, and tools.<br/>Built to look good. Made to work well.</p></div><div className="filter-bar"><div className="filters" aria-label="Filter projects">{['All work','Web apps','Websites'].map(f=><button key={f} aria-pressed={filter===f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}{f==='All work' && <span>{projects.length}</span>}</button>)}</div><span className="project-count" aria-live="polite">{visible.length} projects</span></div><div className="project-grid">{visible.map((p)=><article className="project-card" key={p.id}><ProjectPreview project={p} onOpen={()=>setSelected(p)}/><div className="project-meta"><div><span className="project-category">{category(p)}{p.id==='proxy-socks'?' / Redesigned':''}</span><h3><button onClick={()=>setSelected(p)}>{p.title}</button></h3></div>{p.liveUrl ? <a className="project-external" href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.title} website (opens in new tab)`}><ArrowUpRight/></a> : <span className="internal-label">Internal</span>}</div></article>)}</div></section>
    <section className="about-section" id="about"><div className="shell about-grid"><div><h2>Curiosity started it.<br/>Craft keeps it going.</h2><div className="portrait-wrap"><Image src="/images/Image.webp" alt="Ajogu Joseph Issac" width={420} height={420} sizes="(max-width: 700px) 80vw, 340px"/><span>AJOGU JOSEPH ISSAC <ArrowUpRight size={18}/></span></div></div><div className="about-copy"><p className="lead">I’m Ajogu Joseph Issac, a developer who cares as much about how a product feels as how it functions.</p><p>What started with a curiosity about computers became a passion for building useful software. Today, I work across frontend and full-stack development, connecting thoughtful interfaces with the systems that power them.</p><p>My work spans customer-facing websites, healthcare experiences, and internal business tools. I enjoy making complex workflows feel simple, and bringing the same care to the details people see and the ones they don’t.</p><div className="toolbox"><span className="eyebrow">TOOLS I WORK WITH</span><div className="tags">{['React','Next.js','TypeScript','Node.js','React Native','Tailwind CSS','Supabase','Playwright'].map(t=><span key={t}>{t}</span>)}</div></div><a className="text-link" href="https://github.com/GoabDev" target="_blank" rel="noopener noreferrer">Find me on GitHub <ArrowUpRight size={18}/></a></div></div></section>
    <section className="services-section shell" id="services"><div><h2>From an idea<br/>to something real.</h2><p>Starting fresh or improving what’s already there,<br/>I can help move your product forward.</p></div><div className="service-list">{[{title:'Frontend development',icon:MousePointer2,text:'Responsive, accessible interfaces built with React and Next.js. Clear navigation, considered interactions, and a consistent experience across screens.'},{title:'Full-stack applications',icon:Layers,text:'Connected product experiences, from user-facing workflows to APIs and data. Built around your business needs with maintainability in mind.'},{title:'Redesigns & internal tools',icon:Code2,text:'A fresh experience for an existing website, or a focused tool that makes everyday work easier. I help simplify workflows and bring consistency to your product.'}].map((s,i)=><div className="service" key={s.title}><h3><button aria-expanded={service===i} aria-controls={`service-${i}`} onClick={()=>setService(service===i?null:i)}><s.icon size={21}/><span>{s.title}</span>{service===i?<Minus size={18}/>:<Plus size={18}/>}</button></h3><div id={`service-${i}`} hidden={service!==i}><p>{s.text}</p></div></div>)}</div></section>
    <section className="contact-section" id="contact"><div className="shell"><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let’s make<br/>something <em>great.</em><ArrowUpRight aria-hidden="true"/></h2><div className="contact-bottom"><a className="button light" href="mailto:ajogujoseph0317@gmail.com">Start a conversation <ArrowUpRight size={18}/></a><a className="contact-email" href="mailto:ajogujoseph0317@gmail.com">ajogujoseph0317@gmail.com</a></div></div></section></main>
    <footer className="shell footer"><a className="wordmark" href="#top">aj<span>.</span></a><span>© {new Date().getFullYear()} Ajogu Joseph Issac</span><div><a href="https://github.com/GoabDev" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14}/></a><a href="https://x.com/AJ__ITACHI" target="_blank" rel="noopener noreferrer">X / Twitter <ArrowUpRight size={14}/></a><a href="https://wa.me/2348146821934" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14}/></a></div><a href="#top" aria-label="Back to top" className="back-top"><ArrowUp size={18}/></a></footer>{selected&&<ProjectDialog project={selected} onClose={()=>setSelected(null)}/>}</div>;
}
