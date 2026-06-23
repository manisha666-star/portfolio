"use client";

import { useEffect, useRef, useState } from "react";

const codeSnippet = `const developer = {
  name: "Manisha Rai",
  role: "Software Engineer",
  location: "France",
  university: "EPITA",
  skills: ["React", "Next.js", "TypeScript", "Node.js"],
  focus: "Building modern digital products"
};`;

const stats = [
  { value: "10+", label: "Projects" },
  { value: "3+", label: "Design Experience" },
  { value: "7+", label: "Technologies" },
];

const focusAreas = [
  "Full-stack development",
  "Software architecture",
  "Cloud technologies",
  "UI/UX design",
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasTyped, setHasTyped] = useState(false);
  const [typedCode, setTypedCode] = useState("");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTyped(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasTyped) return;

    let index = 0;

    const interval = window.setInterval(() => {
      index += 1;
      setTypedCode(codeSnippet.slice(0, index));

      if (index >= codeSnippet.length) {
        window.clearInterval(interval);
      }
    }, 14);

    return () => window.clearInterval(interval);
  }, [hasTyped]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-white px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20 xl:gap-24">
          {/* LEFT CODE CARD */}
          <div className="mx-auto w-full max-w-xl">
            <div className="overflow-hidden rounded-[28px] border border-white/70 bg-[#111317] shadow-[0_24px_70px_rgba(55,43,38,0.16)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-[#181b21] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-white/50">
                  about.ts
                </span>
              </div>

              <div className="grid min-h-[320px] grid-cols-[44px_1fr] bg-[#111317] sm:min-h-[360px]">
                <div className="select-none border-r border-white/10 bg-black/10 px-3 py-5 text-right font-mono text-[13px] leading-7 text-white/25">
                  {Array.from({ length: 8 }, (_, index) => (
                    <div key={index}>{index + 1}</div>
                  ))}
                </div>

                <pre className="overflow-hidden whitespace-pre-wrap px-5 py-5 font-mono text-[13px] leading-7 text-[#d7dce5] sm:px-6 sm:text-[14px]">
                  <code>{typedCode}</code>
                  <span className="ml-1 inline-block h-5 w-[7px] translate-y-1 animate-pulse bg-[#8b1e2d]" />
                </pre>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-white/10 bg-[#181b21] px-5 py-3 text-[12px] text-white/50">
                <span className="rounded-full bg-white/[0.06] px-3 py-1">
                  React
                </span>
                <span className="rounded-full bg-white/[0.06] px-3 py-1">
                  Next.js
                </span>
                <span className="rounded-full bg-white/[0.06] px-3 py-1">
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="mx-auto w-full max-w-2xl text-center lg:text-left">
            <p className="text-[12px] font-semibold uppercase tracking-[0.45em] text-[#8b1e2d]">
              About Me
            </p>

            <h2 className="mt-6 text-[36px] font-semibold leading-[1.12] text-[#111] sm:text-[44px] lg:text-[52px]">
              Software Engineer &
              <br />
              Full-Stack Developer
            </h2>

            <div className="mt-8 space-y-6 text-[16px] leading-[1.95] text-[#66615d] sm:text-[17px]">
              <p>
                I&apos;m Manisha Rai, a Master&apos;s student in Software
                Engineering at EPITA, France, with a background in graphic design
                and web development.
              </p>

              <p>
                I enjoy building modern digital products that combine clean
                design, intuitive user experiences, and scalable engineering
                solutions.
              </p>

              <p>
                Currently, I&apos;m focused on React, Next.js, TypeScript,
                Node.js, software architecture, cloud technologies, and building
                real-world projects for internship opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 lg:justify-between">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#e5dcd4] bg-white/70 px-5 py-2.5 text-[15px] font-semibold text-[#5b5652] shadow-[0_10px_30px_rgba(45,34,28,0.04)]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3 xl:gap-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-h-[240px] rounded-[24px] border border-white/80 bg-white/80 p-8 text-left shadow-[0_18px_50px_rgba(45,34,28,0.07)]"
              >
                <p className="text-[54px] font-bold leading-none text-[#8b1e2d] sm:text-[64px]">
                  {stat.value}
                </p>

                <p className="mt-8 text-[14px] font-semibold uppercase leading-7 tracking-[0.22em] text-[#8b837d]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
