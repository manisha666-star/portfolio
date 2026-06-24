import Navbar from "@/components/layout/Navbar";
import FloralCluster from "@/components/sections/FloralCluster";
import ScrollFade from "@/components/sections/ScrollFade";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Design from "@/components/sections/Design";

const skillTokens = [
  {
    label: "full-stack-dev",
    className: "left-[-54px] bottom-[27%] -rotate-1",
    dot: "bg-[var(--brand-maroon)]",
  },
  {
    label: "react-nextjs",
    className: "left-[8%] bottom-[14%] rotate-1",
    dot: "border border-[#d8d8d8] bg-white",
  },
  {
    label: "ui-ux-design",
    className: "left-[-1%] bottom-[5%] rotate-[10deg]",
    dot: "border border-[#d8d8d8] bg-white",
  },
  {
    label: "creative-code",
    className: "right-[2%] bottom-[38%] rotate-1",
    dot: "bg-[var(--brand-maroon-muted)]",
  },
  {
    label: "problem-solving",
    className: "right-[12%] bottom-[25%] -rotate-[3deg]",
    dot: "bg-[#ef4444]",
  },
  {
    label: "graphic-design",
    className: "right-[6%] bottom-[10%] -rotate-[8deg]",
    prefix: "Aa",
  },
];

function SkillToken({
  label,
  className,
  dot,
  prefix,
}: {
  label: string;
  className: string;
  dot?: string;
  prefix?: string;
}) {
  return (
    <div
      className={`token-float absolute z-30 hidden items-center gap-3 rounded-full border border-black/5 bg-white/92 px-4 py-2 font-mono text-[13px] text-[#4e4e4e] shadow-[0_8px_24px_rgba(0,0,0,0.1)] backdrop-blur-sm xl:flex ${className}`}
    >
      {prefix ? (
        <span className="font-sans text-[13px] font-bold text-[#171717]">
          {prefix}
        </span>
      ) : (
        <span className={`h-4 w-4 rounded-full ${dot}`} />
      )}
      <span>--{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-x-clip overflow-y-visible bg-white px-6 pb-28 pt-32 sm:px-10 lg:px-16"
      >
        <ScrollFade
          exitX={-96}
          className="floral-drift absolute bottom-[-178px] left-[-126px] z-10 scale-[0.44] transition-opacity duration-300 min-[480px]:bottom-[-166px] min-[480px]:left-[-124px] min-[480px]:scale-[0.5] sm:bottom-[-150px] sm:left-[-126px] sm:scale-[0.56] md:bottom-[-124px] md:left-[-138px] md:scale-[0.62] lg:bottom-[-72px] lg:left-[-176px] lg:scale-[0.68] xl:bottom-[-8px] xl:left-[-140px] xl:scale-[0.74] 2xl:left-[-112px] 2xl:scale-[0.78]"
        >
          <FloralCluster side="left" />
        </ScrollFade>

        <ScrollFade
          exitX={96}
          className="floral-drift-reverse absolute bottom-[-178px] right-[-126px] z-10 scale-[0.44] transition-opacity duration-300 min-[480px]:bottom-[-166px] min-[480px]:right-[-124px] min-[480px]:scale-[0.5] sm:bottom-[-150px] sm:right-[-126px] sm:scale-[0.56] md:bottom-[-124px] md:right-[-138px] md:scale-[0.62] lg:bottom-[-72px] lg:right-[-176px] lg:scale-[0.68] xl:bottom-[-8px] xl:right-[-140px] xl:scale-[0.74] 2xl:right-[-112px] 2xl:scale-[0.78]"
        >
          <FloralCluster side="right" />
        </ScrollFade>

        <ScrollFade className="pointer-events-none absolute inset-0 z-30">
          {skillTokens.map((token) => (
            <SkillToken key={token.label} {...token} />
          ))}
        </ScrollFade>

        {/* HERO */}
        <div className="relative z-20 mx-auto max-w-225 translate-y-6 text-center">

          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.5em] text-[#858585] sm:mb-12">
            PORTFOLIO 2026
          </p>

          <h1
            className="
              display-font
              text-[38px]
              font-[680]
              leading-[1.3]
              tracking-[-0.05em]
              text-[#080808]
              sm:text-[52px]
              md:text-[62px]
              lg:text-[70px]
            "
          >
            Build polished interfaces
            <br />
            <span className="font-[560] tracking-[-0.048em]">
              with code and design
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-11
              max-w-[720px]
              text-[16px]
              font-normal
              leading-[2]
              text-[#747474]
              sm:text-[18px]
            "
            style={{ marginTop: "1rem" }}
          >
            Frontend-focused software engineer with backend fundamentals and a
            graphic designer&apos;s eye for layout, color, and detail.
          </p>

          <div
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ marginTop: "1.9rem" }}
          >
            <a
              href="#projects"
              className="
                hero-button
                hero-button-primary
                flex
                h-[58px]
                min-w-[172px]
                items-center
                justify-center
                rounded-full
                px-7
                text-[15px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              <span className="button-surface button-surface-primary" />
              <span>View Projects</span>
            </a>

            <a
              href="#contact"
              className="
                hero-button
                hero-button-secondary
                flex
                h-[58px]
                min-w-[148px]
                items-center
                justify-center
                rounded-full
                px-7
                text-[15px]
                font-semibold
                text-[#222]
                transition-all
                hover:-translate-y-0.5
              "
            >
              <span className="button-surface button-surface-secondary" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </section>

      <About />

      <div aria-hidden="true" className="h-24 sm:h-32 lg:h-40" />
  
      <Projects />
      <Design />
    </main>
  );
}
