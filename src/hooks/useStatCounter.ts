"use client";

import { useEffect } from "react";

function animateCounter(element: HTMLElement, target: number, duration = 1200) {
  const startTime = performance.now();
  const suffix = element.textContent?.replace(/[0-9]/g, "") || "";

  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(target * eased);
    element.textContent = current + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.classList.add("counting");
      setTimeout(() => element.classList.remove("counting"), 300);
    }
  }
  requestAnimationFrame(update);
}

export function useStatCounter() {
  useEffect(() => {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nums = entry.target.querySelectorAll(".stat-number");
            nums.forEach((num, i) => {
              const text = num.textContent || "";
              const value = parseInt(text);
              if (!isNaN(value)) {
                num.textContent = "0" + text.replace(/[0-9]/g, "");
                setTimeout(
                  () => animateCounter(num as HTMLElement, value, 1000),
                  i * 150
                );
              }
            });
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll(".about-bento")
      .forEach((el) => statObserver.observe(el));

    return () => statObserver.disconnect();
  }, []);
}
