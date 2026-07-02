import { redirect } from "next/navigation";

type ProjectRedirectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectRedirectPage({
  params,
}: ProjectRedirectPageProps) {
  const { slug } = await params;

  redirect(`/projects/${slug}`);
}
