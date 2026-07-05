"use client";

import { useEffect } from "react";

function scrambleText(
  element: HTMLElement | CharacterData,
  finalText: string,
  duration: number,
  isTextNode: boolean
) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?";
  const frames = Math.floor(duration / 30);
  let frame = 0;

  const interval = setInterval(() => {
    let result = "";
    for (let i = 0; i < finalText.length; i++) {
      if (finalText[i] === " " || finalText[i] === "\n") {
        result += finalText[i];
      } else if (i < (frame / frames) * finalText.length) {
        result += finalText[i];
      } else {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    if (isTextNode) {
      (element as CharacterData).data = result;
    } else {
      (element as HTMLElement).textContent = result;
    }
    frame++;
    if (frame > frames) {
      clearInterval(interval);
      if (isTextNode) {
        (element as CharacterData).data = finalText;
      } else {
        (element as HTMLElement).textContent = finalText;
      }
    }
  }, 30);
}

export function useScrambleText() {
  useEffect(() => {
    const h1 = document.querySelector(".hero h1");
    if (!h1) return;

    const line2Span = h1.querySelector(".line2");

    // Scramble plain text nodes
    h1.childNodes.forEach((node) => {
      if (node.nodeType === 3 && node.textContent?.trim()) {
        scrambleText(node as CharacterData, node.textContent, 1200, true);
      }
    });

    // Scramble gradient span with delay
    if (line2Span) {
      const originalText = line2Span.textContent || "";
      setTimeout(() => {
        scrambleText(line2Span as HTMLElement, originalText, 1400, false);
      }, 300);
    }
  }, []);
}
