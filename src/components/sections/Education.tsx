const educationItems = [
  {
    id: "epita",
    school: "EPITA",
    degree: "MSc Software Engineering",
    period: "2025 - Present",
    location: "Paris, France",
    highlights: [
      "Full-stack development",
      "Software architecture",
      "Cloud and distributed systems",
      "Currently seeking a software engineering internship",
    ],
  },
  {
    id: "iic",
    school: "Itahari International College",
    degree: "BSc (Hons) Computing",
    period: "Completed",
    location: "",
    highlights: [
      "First Class Honours (70.89%)",
      "Final-year project: Mobile food pre-order system (Flutter + Laravel)",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="overflow-hidden bg-white text-[#111]"
      style={{
        paddingInline: "clamp(48px, 14vw, 286px)",
        paddingBlock: "190px 220px",
      }}
    >
      <div className="mx-auto w-full max-w-[1510px]">
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.5em] text-[#858585]">
            EDUCATION
          </p>

          <h2 className="editorial-font text-center text-[clamp(42px,3.25vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#191919]">
            Academic foundation
            <br />
            for thoughtful engineering.
          </h2>
        </div>

        <div className="border-t border-neutral-200" style={{ marginTop: "96px" }}>
          {educationItems.map((item) => (
            <div
              key={item.id}
              className="grid gap-10 border-b border-neutral-200 py-14 md:grid-cols-[minmax(160px,0.25fr)_minmax(0,1fr)] lg:py-16"
            >
              <div>
                <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#8b1e2d]">
                  {item.period}
                </p>
              </div>

              <div className="max-w-[980px]">
                <h3 className="editorial-font text-[clamp(28px,1.7vw,34px)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#161616]">
                  {item.school}
                </h3>

                <p className="mt-4 text-[clamp(18px,1vw,22px)] font-medium leading-[1.45] tracking-[-0.02em] text-[#252525]">
                  {item.degree} ({item.period})
                </p>

                {item.location ? (
                  <p className="mt-2 text-[clamp(17px,0.95vw,20px)] leading-[1.55] tracking-[-0.02em] text-[#6b6b6b]">
                    {item.location}
                  </p>
                ) : null}

                <ul className="mt-8 space-y-2 text-[clamp(17px,1vw,20px)] leading-[1.65] tracking-[-0.02em] text-[#252525]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>· {highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
