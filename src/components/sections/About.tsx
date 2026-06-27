import Image from "next/image";

const disciplines = [
  "Frontend Engineering",
  "React · Next.js",
  "TypeScript",
  "Node.js",
  "UI/UX Design",
  "Cloud Basics",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-32 text-[#111]"
      style={{
        paddingInline: "clamp(48px, 14vw, 286px)",
      }}
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex items-center gap-7">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.5em] text-[#858585] sm:mb-12">
            ABOUT ME
          </p>
        </div>

        <div aria-hidden="true" style={{ height: "40px" }} />

        <h2 className="max-w-[900px] text-[60px] font-semibold leading-[1.1] tracking-[-0.06em] text-black">
          A software engineer
          <br />
          <span className="block font-medium text-neutral-500">
            who builds thoughtful products
          </span>
        </h2>

        <div
          className="mt-14 max-w-6xl overflow-hidden border-y border-neutral-200"
          style={{
            marginTop: "3.5rem",
            paddingTop: "12px",
            paddingBottom: "12px",
          }}
        >
          <div className="about-marquee flex w-max items-center gap-24 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
            {[0, 1].map((set) => (
              <div
                key={set}
                className="flex shrink-0 items-center gap-20"
              >
                <span className="text-[#8b1e2d]">
                  → Disciplines
                </span>

                {disciplines.map((item) => (
                  <span
                    key={`${set}-${item}`}
                    className="whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        

        <div aria-hidden="true" style={{ height: "60px" }} />

        <div className="grid gap-16 lg:grid-cols-[560px_420px] lg:items-stretch">
          <div>
            <div className="flex gap-6">
              <div className="mt-2 h-[104px] w-[8px] shrink-0 bg-[#8b1e2d]" />

              <p className="text-[22px] font-medium leading-[1.6] tracking-[-0.02em] text-black">
                I combine engineering and design to create digital products that are thoughtful, practical, and built with attention to every detail.
              </p>
            </div>

            <div className="mt-40 space-y-24 text-[18px] leading-[1.95] text-neutral-600" style={{ marginTop: "1.5rem" }}>
              <p>

                I&apos;m Manisha Rai, currently pursuing a Master&apos;s in Software Engineering at EPITA, France. Before transitioning into software engineering, I spent over three years working as a professional graphic designer, where I developed a strong foundation in visual communication, user experience, and problem-solving.
              </p>
              <br/>
              <p>
                Today, I focus on building modern web applications with React, Next.js, TypeScript, and Node.js while continuously expanding my backend and cloud development skills. My design background influences every project I build, helping me create products that balance clean engineering with thoughtful user experiences.
              </p>

            </div>
          </div>

          <aside className="w-full max-w-[500px] lg:h-full lg:justify-self-start">
            <div className="relative aspect-[0.78] overflow-hidden rounded-[30px] bg-[#f8f7f4] shadow-[0_24px_70px_rgba(0,0,0,0.08)] lg:aspect-auto lg:h-full">
              <Image
                src="/About 1.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
