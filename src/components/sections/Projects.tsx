import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-32 text-[#111]">
      <div className="relative left-1/2 w-[min(1180px,calc(100vw-160px))] -translate-x-1/2 max-md:w-[calc(100vw-48px)]">
        {/* Header */}
        <div className="text-center">
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-[0.5em] text-[#858585] sm:mb-12">
            PROJECTS
          </p>

          <h2
            className="
              mx-auto
              max-w-[720px]
              display-font
              font-semibold
              leading-[1.3]
              tracking-[-0.05em]
              text-neutral-500
              sm:text-[52px]
              md:text-[52px]
              lg:text-[50px]
            "
          >
            <span>
              Crafted with <span className="text-black">structure,</span>
            </span>
            <span>
              <br />
              <span className="text-black">clarity,</span> and{" "}
              <span className="text-black">purpose.</span>
            </span>
          </h2>
        </div>

        <div aria-hidden="true" style={{ height: "120px" }} />

        <div className="border-t border-neutral-200" />

        {/* Projects */}
        <div>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid items-center gap-14 border-b border-neutral-200 py-32 lg:grid-cols-12 lg:gap-20 xl:gap-24"
            >
              {/* Image */}
              <div
                className={`relative min-h-[360px] overflow-hidden bg-[#f8f7f4] sm:min-h-[460px] lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={project.image ?? "/floral/flower-pink.png"}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-contain p-14"
                />
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="text-[18px] leading-none text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-14 max-w-[520px] text-[48px] font-medium leading-[1.02] tracking-[-0.05em] text-black sm:text-[60px]">
                  {project.title}
                </h3>

                <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {project.type}
                </p>

                <p className="mt-16 max-w-[430px] text-[18px] leading-[1.5] text-black">
                  {project.description}
                </p>

                <a
                  href={project.link ?? "#"}
                  className="mt-16 inline-flex text-[16px] font-medium text-black transition hover:text-[#8b1e2d]"
                >
                  View Project ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
