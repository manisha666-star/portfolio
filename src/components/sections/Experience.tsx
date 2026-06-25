const experiences = [
  {
    year: "2024 — Present",
    role: "MSc Software Engineering",
    company: "EPITA, France",
    description:
      "Studying software architecture, cloud technologies, full-stack development, and modern engineering practices while building real-world software projects.",
  },
  {
    year: "2023 — 2024",
    role: "Graphic Designer",
    company: "GEMS School",
    description:
      "Designed yearbooks, prospectuses, event branding, social media campaigns, certificates, banners, and print materials for school-wide communication and marketing.",
  },
  {
    year: "2020 — 2021",
    role: "Web Developer",
    company: "RepoCorp Pvt. Ltd.",
    description:
      "Developed responsive websites and web applications, collaborated with clients, managed databases, and delivered projects using modern web technologies.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="overflow-hidden bg-white text-[#111]"
      style={{
        paddingInline: "clamp(48px, 14vw, 286px)",
        paddingBlock: "190px 220px",
      }}
    >
      <div className="mx-auto w-full max-w-[1510px]">
        {/* Header */}
        <div className="mx-auto max-w-[980px] text-center">
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.5em] text-[#858585]">
            EXPERIENCE
          </p>

          <h2 className="editorial-font text-[clamp(42px,3.25vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#191919]">
            A journey through design,
            <br />
            development, and engineering.
          </h2>

          <p
            className="mx-auto max-w-[900px] text-[clamp(18px,1.25vw,25px)] leading-[1.6] tracking-[-0.02em] text-[#747474]"
            style={{ marginTop: "25px" }}
          >
            Building products, solving problems, and growing through
            professional experience, education, and real-world projects.
          </p>
        </div>

        {/* Experience List */}
        <div className="border-t border-neutral-200" style={{ marginTop: "96px" }}>
          {experiences.map((item) => (
            <div
              key={item.role}
              className="grid gap-10 border-b border-neutral-200 py-16 md:grid-cols-[minmax(180px,0.35fr)_minmax(0,1fr)] lg:py-20"
            >
              {/* Year */}
              <div>
                <p className="text-[14px] font-semibold tracking-[0.18em] text-[#8b1e2d] uppercase">
                  {item.year}
                </p>
              </div>

              {/* Content */}
              <div className="max-w-[860px]">
                <h3 className="editorial-font text-[clamp(28px,1.8vw,36px)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#161616]">
                  {item.role}
                </h3>

                <p className="mt-5 text-[16px] font-medium text-neutral-500">
                  {item.company}
                </p>

                <p className="mt-8 text-[clamp(17px,1vw,20px)] leading-[1.8] tracking-[-0.02em] text-[#747474]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
