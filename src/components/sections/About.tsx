const disciplines = [
  "Frontend Engineering",
  "React · Next.js",
  "TypeScript",
  "Node.js",
  "UI/UX Design",
  "Cloud Basics",
];

const stats = [
  { value: "10+", label: "Projects" },
  { value: "3+", label: "Design" },
  { value: "7+", label: "Tech" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-28 text-[#111] sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <span className="text-[13px] font-semibold tracking-[0.3em] text-neutral-500">
            01
          </span>

          <span className="h-px w-20 bg-neutral-300 sm:w-28" />

          <p className="text-[12px] font-semibold uppercase tracking-[0.38em] text-neutral-500">
            Background
          </p>
        </div>

        <h2 className="mt-12 max-w-[1180px] text-[clamp(3.25rem,8vw,3.4rem)] font-bold leading-[1.2] text-black" style={{ marginTop: "1.5rem" }}>
          A software engineer
          <br />
          <span className="font-semibold italic text-neutral-500">
            who builds thoughtful
            products
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

        <div className="mt-28 grid items-start gap-16 sm:mt-32 lg:mt-40 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.72fr)] lg:gap-20 xl:gap-24" style={{ marginTop: "4rem" }}>
          <div className="max-w-[840px]">
            <div className="flex gap-8">
              <div className="h-[120px] w-[20px] bg-[#8b1e2d]"></div>

              <p className="text-[28px] leading-[1.7] text-black">
                I build modern digital products that combine clean interfaces,
                intuitive user experiences, and scalable engineering solutions.
              </p>
            </div>

            <div className="mt-14 space-y-8 text-[17px] leading-[1.95] text-neutral-600 sm:text-[18px]">
              <p>
                I&apos;m Manisha Rai, a Master&apos;s student in Software
                Engineering at EPITA, France, with a background in graphic
                design and web development.
              </p>

              <p>
                I&apos;m focused on React, Next.js, TypeScript, Node.js,
                software architecture, cloud technologies, and building
                real-world projects for internship opportunities.
              </p>

              <p>
                My design background helps me care about details developers
                sometimes skip: layout, spacing, color, hierarchy, and how users
                actually experience a product.
              </p>
            </div>

            <div className="mt-16 border-t border-neutral-200 pt-7">
              <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                / Manisha Rai · Software Engineer
              </p>
            </div>
          </div>

          <aside className="w-full lg:pt-2">
            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-[#f8f7f4] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:p-5">
              <div className="overflow-x-auto rounded-lg bg-[#111317] p-5 font-mono text-[13px] leading-8 text-[#d8c7b4] sm:p-7 sm:text-[14px]">
                <p>
                  <span className="text-[#c6a889]">const</span> developer = {"{"}
                </p>
                <p className="pl-5">name: &quot;Manisha Rai&quot;,</p>
                <p className="pl-5">role: &quot;Software Engineer&quot;,</p>
                <p className="pl-5">focus: &quot;Full-stack products&quot;,</p>
                <p className="pl-5">mindset: &quot;Design + systems&quot;,</p>
                <p>{"};"}</p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-neutral-200 bg-white p-4"
                  >
                    <p className="text-[34px] font-bold leading-none text-[#8b1e2d]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
