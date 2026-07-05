"use client";

import { useEffect } from "react";
import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Lightbox from "@/components/Lightbox";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useStatCounter } from "@/hooks/useStatCounter";

export default function HomeClient() {
  useScrollReveal();
  useStatCounter();

  return (
    <>
      <CursorGlow />
      <div className="mesh-gradient" />
      <Lightbox />
      <Nav />
      <Hero />
    </>
  );
}
