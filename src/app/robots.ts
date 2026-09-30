import type { MetadataRoute } from "next";
import { CLINIC } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const base = CLINIC.seo.siteUrl;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/jeotomadmin/", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
