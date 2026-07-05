"use client";

import { useEffect } from "react";

export function useCardTilt(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    // Create light overlay element
    const light = document.createElement("div");
    light.className = "card-light";
    card.appendChild(light);

    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      card.style.setProperty("--mx", `${percentX}%`);
      card.style.setProperty("--my", `${percentY}%`);
    };

    const onMouseLeave = () => {
      card.style.transform = "";
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
      light.remove();
    };
  }, [ref]);
}
