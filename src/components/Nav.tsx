"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Nav() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const navLinksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      const scrollY = window.scrollY;

      let current = "";
      sections.forEach((section) => {
        if (scrollY >= (section as HTMLElement).offsetTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      setActive(current);

      setScrolled(scrollY > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    const cleanups: Array<() => void> = [];

    links.forEach((a) => {
      const handler = (e: Event) => {
        e.preventDefault();
        const href = (a as HTMLAnchorElement).getAttribute("href");
        const target = document.querySelector(href || "");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          navLinksRef.current?.classList.remove("active");
        }
      };
      a.addEventListener("click", handler);
      cleanups.push(() => a.removeEventListener("click", handler));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="logo">
        Jeferson<span>.</span>Gil
      </div>
      <button
        className="menu-toggle"
        onClick={() => navLinksRef.current?.classList.toggle("active")}
      >
        &#9776;
      </button>
      <ul className="nav-links" ref={navLinksRef}>
        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
          >
            {t.nav.about}
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
          >
            {t.nav.projects}
          </a>
        </li>
        <li>
          <a
            href="#architecture"
            className={active === "architecture" ? "active" : ""}
          >
            {t.nav.architecture}
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
          >
            {t.nav.skills}
          </a>
        </li>
        <li>
          <a
            href="#ai-tools"
            className={active === "ai-tools" ? "active" : ""}
          >
            {t.nav.ai}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
          >
            {t.nav.contact}
          </a>
        </li>
      </ul>
      <LanguageToggle />
    </nav>
  );
}
