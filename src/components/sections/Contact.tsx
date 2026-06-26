import Image from "next/image";

const links = [
  {
    label: "Email",
    value: "manisharai20022@gmail.com",
    href: "mailto:manisharai20022@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
  },
  {
    label: "GitHub",
    value: "View my code",
    href: "#",
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
              <Image
                src="/logo.png"
                alt="Manisha Rai logo"
                width={650}
                height={347}
                className="h-10 w-auto brightness-0 invert"
              />
            </a>

            <p className="mt-14 max-w-[430px] text-[clamp(12px,1.35vw,27px)] font-thin leading-[1.5] tracking-[-0.035em] text-white/90">
              Frontend-focused software engineer with a designer&apos;s eye,
              building clean interfaces and meaningful digital products.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:pt-20">
            <div>
              <p className="text-[clamp(12px,1.1vw,22px)] font-thin text-white/45">
                Contact
              </p>
              <a
                href={links[0].href}
                className="mt-2 block break-words text-[clamp(16px,1.3vw,26px)] font-thin tracking-[-0.03em] text-white transition hover:text-[#f3d7dc]"
              >
                {links[0].value}
              </a>
            </div>

            <div>
              <p className="text-[clamp(12px,1.1vw,22px)] font-thin text-white/45">
                Location
              </p>
              <p className="mt-2 text-[clamp(16px,1.3vw,26px)] font-thin tracking-[-0.03em] text-white">
                Paris, France
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="text-[clamp(12px,1.1vw,22px)] font-thin text-white/45">
                Elsewhere
              </p>
              <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
                {links.slice(1).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[clamp(16px,1.3vw,26px)] font-thin tracking-[-0.03em] text-white transition hover:text-[#f3d7dc]"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 pt-24 text-[12px] font-semibold text-white/80 md:flex-row md:items-center md:justify-between">
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
