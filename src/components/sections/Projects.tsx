import { projects } from "@/data/projects";

function ProjectPreview({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="flex h-full items-center justify-center p-[15%]">
        <div className="w-full max-w-[330px]">
          <div className="mb-7 flex items-center gap-5">
            <div className="h-16 w-16 rounded-2xl bg-[#ed4d4b] shadow-[0_14px_30px_rgba(237,77,75,0.22)]" />
            <div className="rounded-xl border border-[#e5e5e1] px-4 py-3 text-[20px] text-[#999]">
              #CC5C3A
            </div>
          </div>

          {[
            ["#fde1dc", "#ffb7ae", "#ff8780", "#f45755", "#cf3a39", "#9f2c2d", "#6b2828"],
            ["#ffe8d7", "#f8c89f", "#eba366", "#d4772d", "#ad590c", "#834209", "#5a331c"],
            ["#fde2ef", "#f4bbd4", "#df91b7", "#cc6c98", "#a95279", "#864160", "#603047"],
          ].map((row) => (
            <div key={row.join("")} className="mt-3 flex h-8 overflow-hidden rounded-xl">
              {row.map((color) => (
                <span key={color} className="flex-1" style={{ backgroundColor: color }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="flex h-full items-center justify-center p-[12%]">
        <div className="w-full rounded-2xl bg-[#181d20] p-7 shadow-[0_14px_28px_rgba(0,0,0,0.16)]">
          {[
            "--color-primary-50: oklch(0.9749 0.0117 239.9027);",
            "--color-border-neutral: var(--color-neutral-50);",
            "--space-sm: var(--dimension-100);",
            "--shape-radius-badge: var(--dimension-75);",
            "--color-background-primary: var(--color-cyan-700);",
            "--font-body-md-size: var(--font-size-200);",
          ].map((line, lineIndex) => (
            <div
              key={line}
              className="display-font text-[clamp(10px,0.82vw,14px)] leading-[1.75] text-[#4bb2bd]"
            >
              <span className="mr-5 text-[#596166]">{lineIndex + 1}</span>
              {line}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center p-[13%]">
      <div className="w-full rounded-2xl border border-[#e6e6e2] bg-[#fbfbfa] shadow-[0_8px_18px_rgba(0,0,0,0.035)]">
        <div className="flex h-8 items-center gap-2 border-b border-[#ececea] px-4">
          <span className="h-3 w-3 rounded-full bg-[#ff7d73]" />
          <span className="h-3 w-3 rounded-full bg-[#f1c75b]" />
          <span className="h-3 w-3 rounded-full bg-[#71c286]" />
          <span className="ml-3 h-4 flex-1 rounded-full border border-[#ececea] bg-white" />
        </div>
        <div className="grid min-h-[210px] grid-cols-[24%_1fr]">
          <div className="border-r border-[#eeeeeb] bg-[#f4f4f2] px-6 py-14">
            <div className="mb-5 h-3 rounded-full bg-[#e3e3e0]" />
            <div className="mb-5 h-3 rounded-full bg-[#e3e3e0]" />
            <div className="h-3 rounded-full bg-[#c8d8cd]" />
          </div>
          <div className="px-10 py-14">
            <div className="mb-4 h-12 rounded-xl bg-[#f0f0ee]" />
            <div className="mb-4 h-8 rounded-xl bg-[#f0f0ee]" />
            <div className="mb-6 h-8 rounded-xl bg-[#f0f0ee]" />
            <div className="flex justify-end gap-3">
              <div className="h-8 w-16 rounded-full border border-[#e6e6e2]" />
              <div className="h-8 w-20 rounded-full bg-[#2f8550]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="overflow-hidden bg-[#f7f7f5] text-[#111]"
      style={{
        paddingInline: "clamp(48px, 14vw, 286px)",
        paddingBlock: "190px 220px",
      }}
    >
      <div className="mx-auto w-full max-w-[1510px]">
        {/* Header */}
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="editorial-font text-[clamp(42px,3.25vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#191919]">
            Projects built with
            <br />
            code, design, and purpose
          </h2>

          <p className="mx-auto mt-9 max-w-[900px] text-[clamp(18px,1.25vw,25px)] leading-[1.6] tracking-[-0.02em] text-[#747474]" style={{ marginTop: "25px" }}>
            A selection of projects where I combine frontend engineering,
            product thinking, and visual design to build clean digital
            experiences.
          </p>
        </div>

        {/* Cards */}
        <div
          className="grid gap-y-28 max-md:grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-[60px]"
          style={{ marginTop: "60px" }}
        >
          {projects.slice(0, 3).map((project, index) => (
            <article key={project.title} className="flex flex-col">
              {/* Image */}
              <div className="relative aspect-[1.33] overflow-hidden rounded-[30px] bg-white shadow-[0_1px_0_rgba(255,255,255,0.9)]">
                <ProjectPreview index={index} />
              </div>

              {/* Text */}
              <div style={{ marginTop: "56px" }}>
                <p className="display-font text-[18px] leading-none text-[#b3b3b3]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3
                  className="editorial-font text-[clamp(25px,1.4vw,28px)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#161616]"
                  style={{ marginTop: "30px" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-[clamp(18px,1.08vw,22px)] leading-[1.7] tracking-[-0.025em] text-[#777]"
                  style={{ marginTop: "30px" }}
                >
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
