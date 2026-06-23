"use client";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    icon: "🎨",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Java", "Spring Boot", "NestJS", "REST APIs"],
    icon: "⚙️",
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
    icon: "🗄️",
  },
  {
    title: "Design & Tools",
    skills: ["Git", "GitHub", "Docker", "AWS", "Figma", "Adobe Creative Suite"],
    icon: "🚀",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-5">
            Skills & Technologies
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Technologies and tools I use to transform ideas into digital
            products.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{category.icon}</span>

                <h3 className="text-2xl font-semibold text-black">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium transition-all duration-300 group-hover:bg-black group-hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}