"use client";

import { useEffect, useState, type ReactNode } from "react";

type ScrollFadeProps = {
  children: ReactNode;
  className?: string;
  exitX?: number;
};

export default function ScrollFade({
  children,
  className = "",
  exitX = 0,
}: ScrollFadeProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance = Math.max(window.innerHeight * 0.34, 1);
        setProgress(Math.min(window.scrollY / distance, 1));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        opacity: Math.max(1 - progress * 1.2, 0),
        transform: `translate(${progress * exitX}px, ${progress * 86}px) scale(${
          1 - progress * 0.04
        })`,
      }}
    >
      {children}
    </div>
  );
}
