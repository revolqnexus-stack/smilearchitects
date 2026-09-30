import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import {
  getLocalLanding,
  LOCAL_LANDING_SLUGS,
  type LocalLandingSlug,
} from "@/lib/seo/local-landing";
import { buildFaqPageSchema, buildMedicalBusinessSchema } from "@/lib/seo/schema";
import { getBranch } from "@/lib/branches";
import { CLINIC } from "@/lib/site-config";
import LocalLandingContent from "@/components/seo/LocalLandingContent";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LOCAL_LANDING_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getLocalLanding(slug);
  if (!config) return {};

  return buildMetadata({
    title: config.title,
    description: config.description,
    canonical: config.canonical,
    keywords: [
      `best dental clinic ${config.cities[0]}`,
      `dentist ${config.cities[0]}`,
      `dental clinic ${config.cities[0]} Kerala`,
      "Smile Architects",
      "orthodontist",
      "dental implants",
      "braces",
    ],
  });
}

export default async function LocalLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const config = getLocalLanding(slug);
  if (!config) notFound();

  const branch = getBranch(config.branchId);
  const pageUrl = `${CLINIC.seo.siteUrl}${config.canonical}`;

  const faqSchema = buildFaqPageSchema(config.faqs);
  const businessSchema = buildMedicalBusinessSchema({
    name: config.h1,
    description: config.description,
    url: pageUrl,
    branch,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <LocalLandingContent config={config} />
    </>
  );
}
