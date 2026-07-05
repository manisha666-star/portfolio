const educationItems = [
  {
    id: "epita",
    logo: "E",
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
    logo: "IIC",
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

        <div style={{ marginTop: "60px" }}>
          {educationItems.map((item, index) => (
            <div key={item.id}>
              {index > 0 ? <div style={{ height: "50px" }} /> : null}
              <div className="h-px bg-neutral-200" />

              <div
                className="grid gap-8 md:grid-cols-[80px_minmax(0,1fr)] md:gap-10"
                style={{ paddingTop: "32-m px" }}
              >
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#dedbd5] bg-[#ebe8e3] text-[20px] font-semibold tracking-[-0.04em] text-[#8b1e2d] shadow-[0_1px_0_rgba(255,255,255,0.9)]">
                    {item.logo}
                  </div>
                </div>

                <div className="max-w-[980px]">
                  <h3 className="editorial-font text-[clamp(26px,1.9vw,38px)] font-semibold leading-[1.2] tracking-[-0.03em] text-[#161616]">
                    {item.degree}
                  </h3>

                  <p className="mt-6 text-[clamp(18px,1vw,22px)] font-medium leading-[1.75] tracking-[-0.02em] text-[#252525]">
                    {item.school}
                  </p>

                  <p className="mt-4 text-[clamp(16px,0.95vw,20px)] leading-[1.85] tracking-[-0.02em] text-[#6b6b6b]">
                    {item.period}
                    {item.location ? ` · ${item.location}` : null}
                  </p>

                  <ul className="mt-12 max-w-[940px] space-y-6 text-[clamp(17px,1vw,20px)] leading-[2.05] tracking-[-0.02em] text-[#252525]">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>· {highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-[50px] h-px bg-neutral-200" />
        </div>
      </div>
    </section>
  );
}
