const experiences = [
  {
    id: "gems",
    role: "Creative Graphic Designer",
    company: "Gems School",
    type: "Full-time",
    period: "Aug 2023 - Sep 2024 · 1 yr 2 mos",
    location: "Lalitpur District, Nepal · On-site",
    organization: "GEMS Group (GEMS School)",
    description:
      "Creative Graphic Designer & Digital Media Coordinator at GEMS School, contributing to branding, print design, event visuals, social media content, and school communications.",
    skills: "Graphic Design, Adobe Illustrator and +12 skills",
  },
  {
    id: "elance",
    role: "Graphic Designer",
    company: "eLance: Nepal's 1st Digital Marketplace",
    type: "Full-time",
    period: "Jan 2022 - Apr 2023 · 1 yr 4 mos",
    location: "Chabahil, Chuchepati Kathmandu - 7, Nepal",
    bullets: [
      "Designed social media creatives including Facebook posts, stories, banners, and promotional campaigns",
      "Created branding and print materials for clients across education, healthcare, beauty, travel, and corporate sectors",
    ],
    skills: "Adobe Illustrator, After Effects and +5 skills",
  },
  {
    id: "repocorp",
    role: "Graphic Designer",
    company: "Repocorp",
    type: "Full-time",
    period: "Aug 2020 - Dec 2021 · 1 yr 5 mos",
    location: "Itahari, Sunsari Nepal · On-site",
    skills: "Adobe Illustrator, Adobe Photoshop and +1 skill",
  },
  {
    id: "inepal",
    role: "Website Designer and Development",
    company: "iNepal - Web Solution Company",
    type: "Internship",
    period: "Jun 2019 - Aug 2019 · 3 mos",
    location: "Kathmandu, Bagmati, Nepal",
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
              key={item.id}
              className="grid gap-10 border-b border-neutral-200 py-14 md:grid-cols-[minmax(160px,0.25fr)_minmax(0,1fr)] lg:py-16"
            >
              <div>
                <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#8b1e2d]">
                  {item.period.split(" · ")[0]}
                </p>
              </div>

              <div className="max-w-[980px]">
                <h3 className="editorial-font text-[clamp(28px,1.7vw,34px)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#161616]">
                  {item.role}
                </h3>

                <p className="mt-4 text-[clamp(18px,1vw,22px)] font-medium leading-[1.45] tracking-[-0.02em] text-[#252525]">
                  {item.company} · {item.type}
                </p>

                <p className="mt-2 text-[clamp(17px,0.95vw,20px)] leading-[1.55] tracking-[-0.02em] text-[#6b6b6b]">
                  {item.period}
                </p>

                <p className="mt-2 text-[clamp(17px,0.95vw,20px)] leading-[1.55] tracking-[-0.02em] text-[#6b6b6b]">
                  {item.location}
                </p>

                {"organization" in item ? (
                  <p className="mt-8 text-[clamp(17px,1vw,20px)] leading-[1.65] tracking-[-0.02em] text-[#252525]">
                    {item.organization}
                  </p>
                ) : null}

                {"description" in item ? (
                  <p className="mt-2 text-[clamp(17px,1vw,20px)] leading-[1.65] tracking-[-0.02em] text-[#252525]">
                    {item.description}
                  </p>
                ) : null}

                {"bullets" in item ? (
                  <ul className="mt-8 space-y-2 text-[clamp(17px,1vw,20px)] leading-[1.65] tracking-[-0.02em] text-[#252525]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>· {bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {"skills" in item ? (
                  <p className="mt-8 text-[clamp(17px,1vw,20px)] font-semibold leading-[1.55] tracking-[-0.02em] text-[#252525]">
                    {item.skills}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
