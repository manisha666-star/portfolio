const projects = [
  {
    number: "01",
    title: "ParkWise",
    category: "Full-Stack Parking Platform",
    image: "/projects/parkwise.png",
  },
  {
    number: "02",
    title: "Portfolio Website",
    category: "Next.js Personal Brand",
    image: "/projects/portfolio.png",
  },
];

export default function Work() {
  return (
    <section id="projects" className="bg-white px-6 py-32 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <p className="font-serif text-[28px] text-[#111]">Our Work</p>

          <h2 className="mx-auto mt-10 max-w-3xl text-[48px] font-medium leading-[1.12] tracking-[-0.05em] text-[#111] sm:text-[64px]">
            Crafted with structure,
            <br />
            clarity, and purpose.
          </h2>
        </div>

        <div className="mt-24 h-px w-full bg-black/15" />

        {/* Projects */}
        <div className="space-y-28 pt-24">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]"
            >
              {/* Image */}
              <div className="overflow-hidden bg-[#f3f1ee]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="pt-4">
                <p className="text-[22px] text-black/50">{project.number}</p>

                <h3 className="mt-14 text-[52px] font-medium leading-[1.05] tracking-[-0.05em] text-black sm:text-[68px]">
                  {project.title}
                </h3>

                <p className="mt-6 text-[18px] text-black/55">
                  {project.category}
                </p>

                <button className="mt-10 rounded-full border border-black/20 px-8 py-4 text-[16px] font-medium transition hover:bg-black hover:text-white">
                  View Project
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}