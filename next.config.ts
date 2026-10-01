import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/best-dental-clinic-pala", destination: "/local/pala", permanent: true },
      { source: "/best-dental-clinic-kottayam", destination: "/local/kottayam", permanent: true },
      { source: "/best-dental-clinic-thrissur", destination: "/local/thrissur", permanent: true },
      { source: "/dental-clinic-pala", destination: "/local/pala", permanent: true },
      { source: "/dental-clinic-kottayam", destination: "/local/kottayam", permanent: true },
      { source: "/dental-clinic-thrissur", destination: "/local/thrissur", permanent: true },
      { source: "/orthodontist-pala", destination: "/orthodontics", permanent: true },
      { source: "/orthodontist-kottayam", destination: "/local/kottayam", permanent: true },
      { source: "/dentist-thrissur", destination: "/thrissur", permanent: true },
      { source: "/dental-implants-kerala", destination: "/patient-guide/implants-and-smile-design", permanent: true },
      { source: "/braces-pala", destination: "/orthodontics/braces", permanent: true },
      { source: "/sitemap", destination: "/site-map", permanent: true },
      { source: "/dentists/dr-mohamed-riyas", destination: "/dentists", permanent: true },
    ];
  },
};

export default nextConfig;
