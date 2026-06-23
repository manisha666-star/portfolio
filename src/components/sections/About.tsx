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
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid w-full items-center gap-12 xl:grid-cols-[minmax(360px,0.92fr)_minmax(0,1fr)] xl:gap-20">
          {/* LEFT CODE CARD */}
          <div className="mx-auto w-full max-w-[560px] xl:mx-0">
            <div className="overflow-hidden rounded-[24px] border border-[#eee8e1] bg-white shadow-[0_22px_56px_rgba(55,43,38,0.1)]">
              <div className="flex items-center justify-between border-b border-[#eee8e1] bg-[#faf8f5] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>

                <span className="rounded-full border border-[#e6ddd4] bg-white px-3 py-1 font-mono text-[11px] text-[#8b837d]">
                  about.ts
                </span>
              </div>

              <div className="grid min-h-[300px] grid-cols-[44px_1fr] bg-white sm:min-h-[340px] lg:min-h-[360px]">
                <div className="select-none border-r border-[#eee8e1] bg-[#fbfaf8] px-3 py-5 text-right font-mono text-[13px] leading-7 text-[#b7aea6]">
                  {Array.from({ length: 8 }, (_, index) => (
                    <div key={index}>{index + 1}</div>
                  ))}
                </div>

                <pre className="overflow-hidden whitespace-pre-wrap px-5 py-5 font-mono text-[13px] leading-7 text-[#4f4a46] sm:px-6 sm:text-[14px]">
                  <code>{typedCode}</code>
                  <span className="ml-1 inline-block h-5 w-[7px] translate-y-1 animate-pulse bg-[#8b1e2d]" />
                </pre>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-[#eee8e1] bg-[#faf8f5] px-5 py-3 text-[12px] text-[#756f69]">
                <span className="rounded-full bg-white px-3 py-1 shadow-[0_6px_18px_rgba(45,34,28,0.05)]">
                  React
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-[0_6px_18px_rgba(45,34,28,0.05)]">
                  Next.js
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-[0_6px_18px_rgba(45,34,28,0.05)]">
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="mx-auto w-full max-w-[690px] px-1 text-center xl:mx-0 xl:text-left">
            <p className="text-[12px] font-semibold uppercase tracking-[0.45em] text-[#8b1e2d]">
              About Me
            </p>

            <h2 className="mt-5 text-[clamp(2.05rem,9vw,3.25rem)] font-semibold leading-[1.14] text-[#111] sm:text-[44px] lg:text-[52px]">
              Software Engineer &
              <br />
              Full-Stack Developer
            </h2>

            <div className="mx-auto mt-7 max-w-[640px] space-y-5 text-[16px] leading-[1.85] text-[#66615d] sm:text-[17px] xl:mx-0">
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
      </div>
    </section>
  );
}
