"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = Array.from(
              entry.target.parentElement?.children || []
            );
            const index = siblings.indexOf(entry.target);
            setTimeout(() => {
              (entry.target as HTMLElement).classList.add("visible");
            }, index * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
