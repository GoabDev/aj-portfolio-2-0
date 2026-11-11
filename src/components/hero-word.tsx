"use client";

import { useEffect, useState } from "react";

const words = ["experiences.", "products.", "designs.", "websites."];

export default function HeroWord() {
  const [text, setText] = useState(words[0]);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;
    let stopped = false;

    const start = () => {
      clearTimeout(timer);
      stopped = preference.matches;
      setText(words[0]);
      setGlitch(false);
      if (stopped) return;

      let index = 0;
      let length = words[0].length;
      const type = () => {
        if (stopped) return;
        length++;
        setText(words[index].slice(0, length));
        if (length < words[index].length) timer = setTimeout(type, 105);
        else timer = setTimeout(erase, 2500);
      };
      const erase = () => {
        if (stopped) return;
        if (length === words[index].length) setGlitch(true);
        length--;
        setText(words[index].slice(0, length));
        if (length < words[index].length - 3) setGlitch(false);
        if (length > 0) timer = setTimeout(erase, 45);
        else {
          index = (index + 1) % words.length;
          timer = setTimeout(type, 180);
        }
      };
      timer = setTimeout(erase, 2500);
    };

    start();
    preference.addEventListener("change", start);
    return () => {
      stopped = true;
      clearTimeout(timer);
      preference.removeEventListener("change", start);
    };
  }, []);

  return (
    <span className={`hero-word${glitch ? " is-glitching" : ""}`} aria-hidden="true">
      <span className="hero-word-sizer">experiences.</span>
      <span className="hero-word-text" data-text={text}>{text}<span className="typing-caret" /></span>
    </span>
  );
}
