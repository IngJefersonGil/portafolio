"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    function animateGlow() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.left = glowX + "px";
        glowRef.current.style.top = glowY + "px";
      }
      raf = requestAnimationFrame(animateGlow);
    }

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    raf = requestAnimationFrame(animateGlow);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="cursor-glow" ref={glowRef} />;
}
