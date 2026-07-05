import Image from "next/image";
import { notFound } from "next/navigation";

import DesignCollectionGallery from "@/components/design/DesignCollectionGallery";
import BackToProjectsLink from "@/components/navigation/BackToProjectsLink";
import {
  designCaseStudies,
  getDesignCaseStudy,
} from "@/data/designCaseStudies";

type DesignPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return designCaseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: DesignPageProps) {
  const { slug } = await params;
  const project = getDesignCaseStudy(slug);

  if (!project) {
    return {
      title: "Design Work Not Found",
    };
  }

  return {
    title: `${project.title} | Manisha Rai`,
    description: project.summary,
  };
}

export default async function DesignCaseStudyPage({ params }: DesignPageProps) {
  const { slug } = await params;
  const project = getDesignCaseStudy(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="design-collection-page">
      <section className="design-collection-hero">
        <div className="design-collection-copy">
          <BackToProjectsLink href="/#design" label="Back to design work" />

          <p className="design-collection-kicker">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="design-collection-summary">{project.summary}</p>
        </div>

        <div className="design-collection-preview">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority
            sizes="(max-width: 1000px) 90vw, 520px"
            className={
              project.slug === "brand-identity"
                ? "object-cover object-top"
                : "object-contain p-8"
            }
          />
        </div>
      </section>

      <section className="design-collection-overview">
        <div>
          <p className="design-section-label">Overview</p>
          <p>{project.overview}</p>
        </div>
        <div>
          <p className="design-section-label">Role</p>
          <p>{project.role}</p>
        </div>
      </section>

      <DesignCollectionGallery groups={project.groups} />

      <section className="design-tools-section">
        <p className="design-section-label">Tools</p>
        <ul>
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
