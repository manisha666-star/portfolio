import Image from "next/image";
import { notFound } from "next/navigation";

import BackToProjectsLink from "@/components/navigation/BackToProjectsLink";
import {
  getProjectCaseStudy,
  projectCaseStudies,
} from "@/data/projectCaseStudies";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Manisha Rai`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project) {
    notFound();
  }

  const projectNumber = String(
    projectCaseStudies.findIndex((item) => item.slug === project.slug) + 1,
  ).padStart(2, "0");

  return <ProjectShowcaseCaseStudy project={project} projectNumber={projectNumber} />;
}

function ProjectShowcaseCaseStudy({
  project,
  projectNumber,
}: {
  project: NonNullable<ReturnType<typeof getProjectCaseStudy>>;
  projectNumber: string;
}) {
  const details = getShowcaseDetails(project.slug);

  return (
    <main className={`parkwise-case-page ${details.themeClass}`}>
      <section className="parkwise-hero">
        <div className="parkwise-hero-copy">
          <BackToProjectsLink />

          <div className="parkwise-title-row">
            <h1>{project.title}</h1>
            <span className="parkwise-status-dot" />
            <span className="parkwise-status-text">Project</span>
          </div>

          <div className="parkwise-meta">
            <ProjectFact
              label="Case Study"
              value={projectNumber}
              noWrap
              variant="parkwise"
            />
            <span>/</span>
            <ProjectFact
              label="Year"
              value={project.year}
              noWrap
              variant="parkwise"
            />
            <span>/</span>
            <ProjectFact
              label="Category"
              value={project.category}
              variant="parkwise"
            />
          </div>

          <p className="parkwise-summary">{project.summary}</p>
        </div>

        <div
          className="parkwise-hero-visual"
          aria-label={`${project.title} project preview`}
        >
          <span className="parkwise-green-disc" />
          <span className="parkwise-dot-pattern" />
          {project.slug === "parkwise" ? (
            <div className="parkwise-laptop-shot" />
          ) : (
            <div className="project-hero-image-card">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                priority
                sizes="(max-width: 980px) 88vw, 540px"
                className={project.slug === "gems-school" ? "object-contain" : "object-cover"}
              />
            </div>
          )}
          <p>{project.title} project preview</p>
        </div>
      </section>

      <section className="parkwise-content-grid parkwise-about-band">
        <article className="parkwise-text-block">
          <SectionTitle>About the Project</SectionTitle>
          <p>{project.overview}</p>
          <p>{project.problem}</p>
        </article>

        <article className="parkwise-decision-card">
          <div className="parkwise-card-icon">{details.cardIcon}</div>
          <div>
            <h2>{details.roleTitle}</h2>
            <p>{project.role}</p>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="parkwise-section">
        <SectionTitle>Tech and Tools</SectionTitle>
        <div className="parkwise-tool-grid">
          {project.tools.map((tool, index) => (
            <div className="parkwise-tool-card" key={tool}>
              <span className={`parkwise-tool-icon ${details.toolTones[index % details.toolTones.length]}`}>
                {getToolMark(tool)}
              </span>
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="parkwise-section parkwise-process-section">
        <SectionTitle>Process and Implementation</SectionTitle>
        <ol className="parkwise-process">
          {project.process.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="parkwise-visual-grid">
        <figure className="parkwise-image-panel parkwise-main-panel">
          <figcaption>{details.visualOneTitle}</figcaption>
          {project.slug === "parkwise" ? (
            <div className="parkwise-reference-crop parkwise-reference-main" />
          ) : (
            <ProjectPanelImage project={project} position={details.visualOnePosition} />
          )}
        </figure>
        <figure className="parkwise-image-panel parkwise-flow-panel">
          <figcaption>{details.visualTwoTitle}</figcaption>
          {project.slug === "parkwise" ? (
            <div className="parkwise-reference-crop parkwise-reference-flow" />
          ) : (
            <ProjectPanelImage project={project} position={details.visualTwoPosition} />
          )}
        </figure>
      </section>

      <section className="parkwise-insight-grid">
        <article>
          <span className="parkwise-insight-icon parkwise-flag">⚑</span>
          <div>
            <h2>Challenges</h2>
            <p>{project.challenges}</p>
          </div>
        </article>
        <article>
          <span className="parkwise-insight-icon parkwise-bulb">●</span>
          <div>
            <h2>What I Learned</h2>
            <p>{project.learning}</p>
          </div>
        </article>
      </section>
    </main>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="parkwise-section-title">{children}</h2>;
}

function ProjectPanelImage({
  project,
  position,
}: {
  project: NonNullable<ReturnType<typeof getProjectCaseStudy>>;
  position: string;
}) {
  return (
    <div className="project-panel-image">
      <Image
        src={project.image}
        alt={`${project.title} ${position} preview`}
        fill
        sizes="(max-width: 980px) 88vw, 560px"
        className={`${project.slug === "gems-school" ? "object-contain" : "object-cover"} ${position}`}
      />
    </div>
  );
}

function getShowcaseDetails(slug: string) {
  if (slug === "gems-school") {
    return {
      cardIcon: "✦",
      roleTitle: "Designed for Clearer Communication",
      themeClass: "project-theme-gems",
      toolTones: [
        "project-tool-rose",
        "project-tool-gold",
        "project-tool-blue",
        "project-tool-violet",
        "project-tool-green",
      ],
      visualOnePosition: "object-top",
      visualOneTitle: "Website interface",
      visualTwoPosition: "object-center",
      visualTwoTitle: "Content system",
    };
  }

  if (slug === "thunderbolts-cup") {
    return {
      cardIcon: "⚡",
      roleTitle: "Designed for a Strong Event Identity",
      themeClass: "project-theme-thunderbolts",
      toolTones: [
        "project-tool-gold",
        "project-tool-rose",
        "project-tool-violet",
        "project-tool-blue",
      ],
      visualOnePosition: "object-center",
      visualOneTitle: "Brand identity",
      visualTwoPosition: "object-bottom",
      visualTwoTitle: "Event assets",
    };
  }

  return {
    cardIcon: "◎",
    roleTitle: "Designed for Faster Decisions",
    themeClass: "project-theme-parkwise",
    toolTones: [
      "parkwise-tool-cyan",
      "parkwise-tool-teal",
      "parkwise-tool-yellow",
      "parkwise-tool-blue",
      "parkwise-tool-green",
    ],
    visualOnePosition: "object-center",
    visualOneTitle: "Main interface",
    visualTwoPosition: "object-center",
    visualTwoTitle: "Product flow",
  };
}

function getToolMark(tool: string) {
  const normalized = tool.toLowerCase();

  if (normalized.includes("react")) return "⚛";
  if (normalized.includes("fastapi")) return "ϟ";
  if (normalized.includes("python")) return "Py";
  if (normalized.includes("postgres")) return "Pg";
  if (normalized.includes("supabase")) return "S";
  if (normalized.includes("figma")) return "F";
  if (normalized.includes("illustrator")) return "Ai";
  if (normalized.includes("motion")) return "M";
  if (normalized.includes("content")) return "C";
  if (normalized.includes("website")) return "W";
  if (normalized.includes("branding")) return "B";
  if (normalized.includes("ui/ux")) return "UX";
  if (normalized.includes("adobe")) return "A";

  return tool.slice(0, 2);
}

function ProjectFact({
  label,
  value,
  noWrap = false,
  variant = "default",
}: {
  label: string;
  value: string;
  noWrap?: boolean;
  variant?: "default" | "parkwise";
}) {
  if (variant === "parkwise") {
    return (
      <div className="parkwise-fact">
        <p>{label}</p>
        <p className={noWrap ? "sm:whitespace-nowrap" : ""}>{value}</p>
      </div>
    );
  }

  return (
    <div className="min-w-0">
      <p className="text-[11px] font-medium tracking-[-0.01em] text-[#8a857d]">
        {label}
      </p>
      <p
        className={`mt-3 text-[14px] font-semibold leading-[1.45] tracking-[-0.02em] text-[#161616] ${
          noWrap ? "sm:whitespace-nowrap" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}
