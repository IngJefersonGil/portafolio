"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const siblings = Array.from(
            el.parentElement?.children || []
          );
          const index = siblings.indexOf(el);
          const delay = index * 80;

          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("visible");
              el.classList.remove("peeled");
            }, delay);
          } else {
            const rect = el.getBoundingClientRect();
            if (rect.bottom < 0) {
              setTimeout(() => {
                el.classList.add("peeled");
                el.classList.remove("visible");
              }, delay);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
