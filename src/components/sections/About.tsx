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
    <section id="about" className="bg-white py-32 text-[#111]">
      <div className="relative left-1/2 w-[min(1180px,calc(100vw-160px))] -translate-x-1/2">
        <div className="flex items-center gap-7">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.5em] text-[#858585] sm:mb-12">
            ABOUT ME
          </p>
        </div>

        <div aria-hidden="true" style={{ height: "40px" }} />

        <h2 className="max-w-[900px] text-[60px] font-semibold leading-[1.05] tracking-[-0.06em] text-black">
          A software engineer
          <br />
          <span className="block italic font-semibold text-neutral-500">
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

        <div className="grid items-start gap-24 lg:grid-cols-[560px_420px]">
          <div>
            <div className="flex gap-18">
              <div className="mt-2 h-[120px] w-[8px] shrink-0 bg-[#8b1e2d]" />

              <p className="text-[26px] font-medium leading-[1.6] tracking-[-0.02em] text-black">
                I build modern digital products that combine clean interfaces,
                intuitive user experiences, and scalable engineering solutions.
              </p>
            </div>

            <div className="mt-40 space-y-24 text-[17px] leading-[1.95] text-neutral-600">
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
                My design background helps me care about layout, spacing, color,
                hierarchy, and how users actually experience a product.
              </p>
            </div>
          </div>

          <aside className="w-full">
            <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-[#f8f7f4] shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
              <Image
                src="/floral/flower-pink.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-contain p-10"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
