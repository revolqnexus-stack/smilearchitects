import type { MetadataRoute } from "next";
import { CLINIC } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const base = CLINIC.seo.siteUrl;
  return {
    rules: [
      // Allow all major search engines and AI crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/jeotomadmin/",
          "/jeotomadmin/*",
          "/api/",
          "/api/*",
          "/*?secret=*",
        ],
      },
      // OpenAI ChatGPT Search (critical for AI discoverability)
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/jeotomadmin/", "/api/"],
      },
      // OpenAI GPTBot (for training/research)
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/jeotomadmin/", "/api/"],
      },
      // Google Gemini/Bard
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/jeotomadmin/", "/api/"],
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/jeotomadmin/", "/api/"],
      },
      // Anthropic Claude
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/jeotomadmin/", "/api/"],
      },
      // Meta AI
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: ["/jeotomadmin/", "/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
