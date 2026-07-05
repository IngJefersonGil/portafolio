"use client";

import { useRef } from "react";
import { useMagneticButton } from "@/hooks/useMagneticButton";

export default function MagneticButton({
  children,
  className = "",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null);
  useMagneticButton(ref);

  return (
    <a ref={ref} className={className} {...props}>
      {children}
    </a>
  );
}
