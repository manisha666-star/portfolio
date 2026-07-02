const experiences = [
  {
    id: "gems",
    logo: "G",
    role: "Creative Graphic Designer",
    company: "GEMS Group (GEMS School)",
    type: "Full-time",
    period: "Aug 2023 - Sep 2024 (1 yr 2 mos)",
    location: "Lalitpur District, Nepal · On-site",
    description:
      "Creative Graphic Designer & Digital Media Coordinator at GEMS School, contributing to branding, print design, event visuals, social media content, and school communications.",
    skills: "Graphic Design, Adobe Illustrator and +12 skills",
  },
  {
    id: "elance",
    logo: "e",
    role: "Graphic Designer",
    company: "eLance: Nepal's 1st Digital Marketplace",
    type: "Full-time",
    period: "Jan 2022 - Apr 2023 (1 yr 4 mos)",
    location: "Chabahil, Chuchepati Kathmandu - 7, Nepal",
    bullets: [
      "Designed social media creatives including Facebook posts, stories, banners, and promotional campaigns",
      "Created branding and print materials for clients across education, healthcare, beauty, travel, and corporate sectors",
    ],
    skills: "Adobe Illustrator, After Effects and +5 skills",
  },
  {
    id: "repocorp",
    logo: "R",
    role: "Graphic Designer",
    company: "Repocorp",
    type: "Full-time",
    period: "Aug 2020 - Dec 2021 (1 yr 5 mos)",
    location: "Itahari, Sunsari Nepal · On-site",
    skills: "Adobe Illustrator, Adobe Photoshop and +1 skill",
  },
  {
    id: "inepal",
    logo: "iN",
    role: "Website Designer and Development",
    company: "iNepal - Web Solution Company",
    type: "Internship",
    period: "Jun 2019 - Aug 2019 (3 mos)",
    location: "Kathmandu, Bagmati, Nepal",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="overflow-hidden bg-[#f7f7f5] text-[#111]"
      style={{
        paddingInline: "clamp(48px, 14vw, 286px)",
        paddingBlock: "190px 220px",
      }}
    >
      <div className="mx-auto w-full max-w-[1510px]">
        {/* Header */}
        <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.5em] text-[#858585]">
            EXPERIENCE
          </p>

          <h2 className="editorial-font text-center text-[clamp(42px,3.25vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em] text-[#191919]">
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
        <div style={{ marginTop: "112px" }}>
          {experiences.map((item, index) => (
            <div key={item.id}>
              {index > 0 ? <div style={{ height: "50px" }} /> : null}
              <div className="h-px bg-neutral-200" />

              <div
                className="grid gap-8 md:grid-cols-[80px_minmax(0,1fr)] md:gap-10"
                style={{ paddingTop: "36px" }}
              >
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[#dedbd5] bg-[#ebe8e3] text-[22px] font-semibold tracking-[-0.04em] text-[#8b1e2d] shadow-[0_1px_0_rgba(255,255,255,0.9)]">
                    {item.logo}
                  </div>
                </div>

                <div className="max-w-[980px]">
                  <h3 className="editorial-font text-[clamp(26px,1.9vw,38px)] font-semibold leading-[1.2] tracking-[-0.03em] text-[#161616]">
                    {item.role}
                  </h3>

                  <p className="mt-6 text-[clamp(18px,1vw,22px)] font-medium leading-[1.75] tracking-[-0.02em] text-[#252525]">
                    {item.company}  ·  {item.type}
                  </p>

                  <p className="mt-4 whitespace-nowrap text-[clamp(16px,0.95vw,20px)] leading-[1.85] tracking-[-0.02em] text-[#6b6b6b]">
                    {item.period} · {item.location}
                  </p>

                  {"description" in item ? (
                    <p className="mt-5 max-w-[900px] text-[clamp(17px,1vw,20px)] leading-[2.05] tracking-[-0.02em] text-[#252525]">
                      {item.description}
                    </p>
                  ) : null}

                  {item.bullets?.length ? (
                    <ul className="mt-12 max-w-[940px] space-y-6 text-[clamp(17px,1vw,20px)] leading-[2.05] tracking-[-0.02em] text-[#252525]">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>· {bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {"skills" in item ? (
                    <p className="mt-12 text-[clamp(17px,1vw,20px)] font-semibold leading-[1.9] tracking-[-0.02em] text-[#252525]">
                      {item.skills}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
