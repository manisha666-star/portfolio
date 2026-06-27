import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#111]">
      <article
        className="mx-auto w-full max-w-[1180px]"
        style={{
          paddingInline: "clamp(24px, 7vw, 96px)",
          paddingBlock: "48px 132px",
        }}
      >
        <Link
          href="/#projects"
          className="inline-flex text-[14px] font-semibold tracking-[-0.01em] text-[#6f6b65] transition hover:text-[#8b1e2d]"
        >
          ← Back to projects
        </Link>

        <header className="pt-16">
          <h1 className="text-[clamp(58px,8vw,116px)] font-semibold leading-[0.9] tracking-[-0.075em] text-[#101010]">
            {project.title}
          </h1>

          <div className="mt-20 grid gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)] md:items-end">
            <div className="grid gap-8 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-end">
              <ProjectFact label="Project" value={`Case Study ${projectNumber}`} />
              <span className="hidden text-[#9d9890] sm:block">/</span>
              <ProjectFact label="Year" value={project.year} />
              <span className="hidden text-[#9d9890] sm:block">/</span>
              <ProjectFact label="Category" value={project.category} />
            </div>

            <p className="max-w-[480px] text-[clamp(17px,1.05vw,20px)] leading-[1.65] tracking-[-0.025em] text-[#383632] md:justify-self-end">
              {project.summary}
            </p>
          </div>
        </header>

        <HeroImage image={project.image} title={project.title} />

        <div className="mx-auto mt-14 max-w-[940px] space-y-16 md:mt-20 md:space-y-20">
          <EditorialSection title="About the Project">
            <p>{project.overview}</p>
            <p>{project.problem}</p>
          </EditorialSection>

          <EditorialSection title="Designed for Faster Decisions">
            <p>{project.role}</p>
            <BulletList items={project.features} />
          </EditorialSection>

          <EditorialSection title="Tech and Tools">
            <TagList items={project.tools} />
          </EditorialSection>

          <EditorialSection title="Process and Implementation">
            <ProcessList items={project.process} />
          </EditorialSection>

          <div className="grid gap-6 md:grid-cols-2">
            <ProjectImageCard image={project.image} title="Main interface" />
            <ProjectImageCard image={project.image} title="Product flow" />
          </div>

          <EditorialSection title="Challenges">
            <p>{project.challenges}</p>
          </EditorialSection>

          <EditorialSection title="What I Learned">
            <p>{project.learning}</p>
          </EditorialSection>

          <div className="overflow-hidden rounded-[32px] bg-[#e8e3da]">
            <div className="relative aspect-[1.72] min-h-[260px]">
              <Image
                src={project.image}
                alt={`${project.title} closing screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 940px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

function ProjectFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[11px] font-medium tracking-[-0.01em] text-[#8a857d]">
        {label}
      </p>
      <p className="mt-2 text-[14px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#161616]">
        {value}
      </p>
    </div>
  );
}

function HeroImage({ image, title }: { image: string; title: string }) {
  return (
    <div className="mt-10 overflow-hidden rounded-[28px] bg-[#e8e3da] shadow-[0_26px_80px_rgba(54,45,34,0.12)] md:mt-12">
      <div className="relative aspect-[1.48] min-h-[320px]">
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1060px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

function EditorialSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="max-w-[720px] text-[clamp(34px,4vw,58px)] font-semibold leading-[1.02] tracking-[-0.06em] text-[#101010]">
        {title}
      </h2>
      <div className="mt-6 max-w-[720px] space-y-5 text-[clamp(16px,1vw,19px)] leading-[1.75] tracking-[-0.02em] text-[#383632]">
        {children}
      </div>
    </section>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-[#d8d1c6] bg-[#fbfaf7] px-4 py-2 text-[14px] font-semibold text-[#4d4942]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-4">
          <span className="mt-[0.72em] h-2 w-2 shrink-0 rounded-full bg-[#8b1e2d]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProcessList({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-5">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid gap-3 border-t border-[#d8d1c6] pt-5 sm:grid-cols-[68px_1fr]"
        >
          <span className="text-[14px] font-semibold text-[#9a9287]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function ProjectImageCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[24px] bg-[#e8e3da] shadow-[0_18px_50px_rgba(54,45,34,0.10)]">
      <div className="relative aspect-[1.14]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 455px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
