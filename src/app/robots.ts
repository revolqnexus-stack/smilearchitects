import type { MetadataRoute } from "next";
import { CLINIC } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const base = CLINIC.seo.siteUrl;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/jeotomadmin/",
          "/jeotomadmin/*",
          "/api/",
          "/api/*",
          "/*?secret=*", // Block any URL with secret parameter
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
