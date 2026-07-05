"use client";

import { useEffect, useRef, useState } from "react";

export default function Lightbox() {
  const lightboxRef = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const lightbox = lightboxRef.current;
    if (!lightbox) return;

    const handlers: Array<{ el: Element; handler: () => void }> = [];

    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach((img) => {
      const handler = () => {
        setImgSrc((img as HTMLImageElement).src);
        lightbox.classList.add("active");
      };
      img.addEventListener("click", handler);
      handlers.push({ el: img, handler });
    });

    const closeLightbox = () => lightbox.classList.remove("active");
    lightbox.addEventListener("click", closeLightbox);

    return () => {
      handlers.forEach(({ el, handler }) =>
        el.removeEventListener("click", handler)
      );
      lightbox.removeEventListener("click", closeLightbox);
    };
  }, []);

  return (
    <div className="lightbox" ref={lightboxRef}>
      {imgSrc && <img src={imgSrc} alt="" />}
    </div>
  );
}
