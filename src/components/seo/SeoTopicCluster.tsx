import Link from "next/link";
import { TOPIC_CLUSTERS, clustersForPath, type TopicClusterId } from "@/lib/seo/internal-links";

type SeoTopicClusterProps = {
  pathname: string;
  /** Override auto cluster selection */
  clusterIds?: TopicClusterId[];
  heading?: string;
};

/**
 * Semantic internal link hub — visible, footer-adjacent section for users & crawlers.
 * Not shown in main nav; linked from content pages and patient-guide hub.
 */
export default function SeoTopicCluster({
  pathname,
  clusterIds,
  heading = "Explore related care topics",
}: SeoTopicClusterProps) {
  const ids = clusterIds ?? clustersForPath(pathname);

  return (
    <section
      className="section-padding section-light seo-topic-cluster"
      aria-labelledby="seo-topic-cluster-heading"
    >
      <div className="container-xl">
        <h2
          id="seo-topic-cluster-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
            color: "var(--color-dark-moss)",
            fontWeight: 400,
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto 2rem",
            fontSize: "0.9375rem",
            color: "var(--color-olive)",
            lineHeight: 1.6,
          }}
        >
          Quick links between clinics, treatments, and patient guides — same team in{" "}
          <Link href="/local/pala">Pala</Link> and <Link href="/thrissur">Thrissur</Link>.
        </p>

        <div className="seo-topic-cluster-grid">
          {ids.map((id) => {
            const cluster = TOPIC_CLUSTERS[id];
            return (
              <div key={id} className="seo-topic-cluster-card card-warm" style={{ padding: "1.25rem 1.5rem" }}>
                <h3
                  style={{
                    fontSize: "0.8125rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--color-olive)",
                    fontWeight: 700,
                    marginBottom: "0.875rem",
                  }}
                >
                  {cluster.title}
                </h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {cluster.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          color: "var(--color-dark-moss)",
                          fontWeight: 600,
                          fontSize: "0.9375rem",
                          textDecoration: "none",
                        }}
                      >
                        {link.label}
                      </Link>
                      {link.description ? (
                        <span style={{ display: "block", fontSize: "0.8125rem", color: "var(--color-olive)", marginTop: "0.125rem" }}>
                          {link.description}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .seo-topic-cluster-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .seo-topic-cluster-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .seo-topic-cluster-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .seo-topic-cluster a:hover {
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      `}</style>
    </section>
  );
}
