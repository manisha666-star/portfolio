import Image from "next/image";

const designWorks = [
  {
    title: "Brand Identity",
    category: "Branding / Visual Systems",
    image: "/logo.png",
  },
  {
    title: "Event Branding",
    category: "Events / Campaign Systems",
    image: "/Thunderbolts.png",
  },
  {
    title: "Editorial",
    category: "Publication / Layout Design",
    image: "/gems.png",
  },
  {
    title: "Marketing",
    category: "Social Media / Digital Design",
    image: "/gems.png",
  },
  {
    title: "UI/UX",
    category: "Research / Interface Design",
    image: "/parkwise.png",
  },
];

export default function Design() {
  return (
    <section
      id="design"
      className="overflow-hidden bg-white text-[#111]"
      style={{
        paddingInline: "clamp(48px, 14vw, 286px)",
        paddingBlock: "190px 220px",
      }}
    >
      <div className="mx-auto w-full max-w-[1510px]">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.5em] text-[#858585]">
            Design Work
          </p>

          <h2 className="editorial-font text-[clamp(42px,3.25vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#191919]" style={{ marginTop: "12px" }}>
            Visual stories shaped
            <br />
            with clarity and detail.
          </h2>

          <p
            className="mx-auto max-w-[900px] text-[clamp(18px,1.25vw,25px)] leading-[1.6] tracking-[-0.02em] text-[#747474]"
            style={{ marginTop: "25px" }}
          >
            Selected work from my professional graphic design experience,
            including branding, print design, event visuals, and social media
            campaigns.
          </p>
        </div>

        <div
          className="grid gap-y-28 max-md:grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-[60px]"
          style={{ marginTop: "60px" }}
        >
          {designWorks.map((work) => (
            <article key={work.title} className="group">
              <div className="relative aspect-[1.33] overflow-hidden rounded-[30px] bg-[#f7f7f5] shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-start justify-between gap-6" style={{ marginTop: "42px" }}>
                <div>
                  <h3 className="editorial-font text-[clamp(25px,1.4vw,28px)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#161616]">
                    {work.title}
                  </h3>

                  <p
                    className="text-[13px] font-semibold uppercase tracking-[0.22em] text-neutral-500"
                    style={{ marginTop: "18px" }}
                  >
                    {work.category}
                  </p>
                </div>

                <span className="text-[20px] transition group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
