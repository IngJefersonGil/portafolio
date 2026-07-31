"use client";

import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const elements = document.querySelectorAll<HTMLElement>("[data-parallax]");
    if (!elements.length) return;

    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      elements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.3");
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const offset = (centerY - vh / 2) * speed;

        el.style.transform = `translateY(${offset}px)`;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
