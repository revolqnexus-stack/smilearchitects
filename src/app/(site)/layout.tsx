import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import MobileAppointmentBar from "@/components/layout/MobileAppointmentBar";
import LenisProvider from "@/components/providers/LenisProvider";
import { BranchProvider } from "@/components/providers/BranchProvider";
import { buildSiteSchemaGraph } from "@/lib/seo/schema";

const siteSchemaGraph = buildSiteSchemaGraph();

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <BranchProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchemaGraph) }}
        />
        {/* Skip navigation for accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        <SiteHeader />

        <main
          id="main-content"
          tabIndex={-1}
          className="site-main"
        >
          {children}
        </main>

        <SiteFooter />

        {/* Sticky mobile CTA bar */}
        <MobileAppointmentBar />
      </BranchProvider>
    </LenisProvider>
  );
}
