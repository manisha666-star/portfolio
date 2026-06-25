const links = [
  {
    label: "Email",
    value: "manisharai20022@gmail.com",
    href: "mailto:manisharai20022@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/manisha-rai-360418202/",
  },
  {
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/manisha666-star?tab=repositories",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#241316] text-white"
    >
      <div aria-hidden="true" className="h-2 w-full bg-[#8b1e2d]" />

      <div
        className="mx-auto flex min-h-[400px] w-full max-w-[1510px] flex-col justify-between"
        style={{
          paddingInline: "clamp(48px, 8vw, 96px)",
          paddingBlock: "96px 72px",
        }}
      >
        <div className="grid gap-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <a href="#home" className="inline-flex items-center gap-4">
              <span aria-hidden="true" className="flex h-8 w-10 items-end gap-1">
                <span className="h-8 w-[17px] rounded-t-full bg-[#8b1e2d]" />
                <span className="h-8 w-[17px] rounded-t-full bg-[#8b1e2d]" />
              </span>
              <span className="display-font text-[29px] font-light leading-none tracking-[-0.04em] text-white">
                Manisha
              </span>
            </a>

            <p className="display-font mt-10 max-w-[430px] text-[clamp(15px,0.95vw,19px)] font-thin leading-[1.7] text-white/58">
              Frontend-focused software engineer with a designer&apos;s eye,
              building clean interfaces and meaningful digital products.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:pt-20">
            <div>
              <p className="display-font text-[clamp(18px,1vw,21px)] font-light leading-none tracking-[-0.02em] text-white/88">
                Contact
              </p>
              <a
                href={links[0].href}
                className="display-font mt-6 block break-words text-[clamp(16px,0.95vw,20px)] font-thin leading-[1.6] text-white/55 transition hover:text-[#f3d7dc]"
              >
                {links[0].value}
              </a>
            </div>

            <div>
              <p className="display-font text-[clamp(18px,1vw,21px)] font-light leading-none tracking-[-0.02em] text-white/88">
                Location
              </p>
              <p className="display-font mt-6 text-[clamp(16px,0.95vw,20px)] font-thin leading-[1.6] text-white/55">
                Paris, France
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="display-font text-[clamp(18px,1vw,21px)] font-light leading-none tracking-[-0.02em] text-white/88">
                Elsewhere
              </p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {links.slice(1).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="display-font text-[clamp(16px,0.95vw,20px)] font-thin leading-[1.6] text-white/55 transition hover:text-[#f3d7dc]"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="display-font flex flex-col gap-8 pt-24 text-[clamp(14px,0.82vw,17px)] font-thin leading-[1.6] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 Manisha Rai. All rights reserved.</p>

          <div className="flex flex-wrap gap-8">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#design" className="transition hover:text-white">
              Design
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
