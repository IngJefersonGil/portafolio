"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Lightbox from "@/components/Lightbox";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useStatCounter } from "@/hooks/useStatCounter";
import { useParallax } from "@/hooks/useParallax";

export default function HomeClient() {
  useScrollReveal();
  useStatCounter();
  useParallax();

  return (
    <>
      <div className="mesh-gradient" />
      <Lightbox />
      <Nav />
      <Hero />
    </>
  );
}
