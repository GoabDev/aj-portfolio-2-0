"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

const TAU = Math.PI * 2;

/** One continuous oval surface: no overlapping mesh strips or self-intersections. */
function drawRibbon(context: CanvasRenderingContext2D, width: number, height: number, phase: number) {
  context.clearRect(0, 0, width, height);
  const radiusX = width * .41;
  const radiusY = height * (.33 + .008 * Math.sin(phase));
  const rimX = Math.min(52, Math.max(20, width * .036));
  const rimY = height * .15;
  const centerY = height * .47 + 4 * Math.sin(phase);

  context.save();
  context.translate(width / 2, height * .86);
  context.scale(radiusX, height * .05);
  const shadow = context.createRadialGradient(0, 0, .05, 0, 0, 1);
  shadow.addColorStop(0, "rgba(8,24,105,.18)");
  shadow.addColorStop(1, "rgba(8,24,105,0)");
  context.fillStyle = shadow;
  context.fillRect(-1, -1, 2, 2);
  context.restore();

  context.save();
  context.translate(width / 2, centerY);
  context.rotate(.012 * Math.sin(phase));
  const surface = new Path2D();
  surface.ellipse(0, 0, radiusX, radiusY, 0, 0, TAU);
  surface.moveTo(radiusX - rimX, 0);
  surface.ellipse(0, 0, radiusX - rimX, radiusY - rimY, 0, 0, TAU);

  const material = context.createLinearGradient(0, -radiusY, 0, radiusY);
  material.addColorStop(0, "#F0FFA2");
  material.addColorStop(.18, "#DFFF62");
  material.addColorStop(.43, "#B9DC32");
  material.addColorStop(.58, "#C6EE38");
  material.addColorStop(.81, "#D7FF3F");
  material.addColorStop(1, "#E7FF86");
  context.fillStyle = material;
  context.fill(surface, "evenodd");
  context.clip(surface, "evenodd");

  // Broad lighting travels across a single clipped surface, without segment seams.
  const lightX = radiusX * .63 * Math.cos(phase);
  const lightY = -radiusY * .5 * Math.sin(phase);
  const glow = context.createRadialGradient(lightX, lightY, 0, lightX, lightY, radiusX * .8);
  glow.addColorStop(0, "rgba(253,255,202,.48)");
  glow.addColorStop(.5, "rgba(245,255,172,.15)");
  glow.addColorStop(1, "rgba(245,255,172,0)");
  context.fillStyle = glow;
  context.fillRect(-radiusX, -radiusY, radiusX * 2, radiusY * 2);

  context.beginPath();
  context.ellipse(0, 0, radiusX - rimX, radiusY - rimY, 0, Math.PI, TAU);
  context.strokeStyle = "rgba(105,145,20,.2)";
  context.lineWidth = 2;
  context.stroke();
  context.beginPath();
  context.ellipse(0, 0, radiusX, radiusY, 0, Math.PI, TAU);
  context.strokeStyle = "rgba(253,255,211,.75)";
  context.lineWidth = 1.4;
  context.stroke();
  context.restore();
}

export default function RibbonArt() {
  const ref = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const elapsed = useRef(0);
  const visible = useInView(ref, { amount: .1 });
  const reduced = useReducedMotion();
  const [pageVisible, setPageVisible] = useState(true);
  const moving = visible && !reduced && pageVisible;

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    update();document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);

  useEffect(() => {
    const element = canvas.current;
    const container = ref.current;
    const context = element?.getContext('2d');
    if (!element || !container || !context) return;
    let frame = 0;
    let previous = 0;
    let width = 0;
    let height = 0;
    const render = () => drawRibbon(context, width, height, reduced ? Math.PI * .7 : elapsed.current / 14000 * TAU);
    const resize = () => {
      width = container.clientWidth;height = container.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      element.width = Math.round(width * dpr);element.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);render();
    };
    const tick = (now: number) => {
      if (!previous) previous = now;
      const delta = now - previous;
      if (delta >= 1000 / 30) {
        elapsed.current = (elapsed.current + Math.min(delta, 80)) % 14000;
        previous = now;render();
      }
      frame = requestAnimationFrame(tick);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);resize();
    if (moving) frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame);observer.disconnect(); };
  }, [moving, reduced]);

  return <div ref={ref} className="ribbon-art" data-moving={moving}>
    <canvas ref={canvas} className="ribbon-canvas" aria-hidden="true" />
  </div>;
}
