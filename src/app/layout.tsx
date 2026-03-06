import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://sehn-consulting.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sehn Consulting | Mass Timber Sales Strategy & Market Intelligence",
    template: "%s | Sehn Consulting",
  },
  description:
    "Sehn Consulting helps mass timber companies identify projects early, build winning sales strategies, and accelerate revenue growth. 30+ years of senior executive experience.",
  keywords: [
    "mass timber consulting",
    "CLT sales strategy",
    "mass timber projects",
    "timber construction consulting",
    "engineered wood products",
    "glulam sales",
    "mass timber market intelligence",
    "wood construction advisory",
  ],
  authors: [{ name: "Paul Sehn" }],
  creator: "Sehn Consulting",
  openGraph: {
    title: "Sehn Consulting | Mass Timber Sales Strategy & Market Intelligence",
    description:
      "We identify mass timber projects before your competitors do. 30+ years of senior executive experience driving revenue for the world's leading mass timber companies.",
    url: siteUrl,
    siteName: "Sehn Consulting",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sehn Consulting | Mass Timber Market Intelligence",
    description:
      "We identify mass timber projects before your competitors do. Deep research. Early identification. Strategic positioning.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Sehn Consulting",
    description:
      "Mass timber sales strategy, market intelligence, and project identification consulting. 30+ years of senior executive experience in the engineered wood products industry.",
    url: siteUrl,
    founder: {
      "@type": "Person",
      name: "Paul Sehn",
      jobTitle: "Principal Consultant",
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    serviceType: [
      "Mass Timber Project Intelligence",
      "Sales Strategy Consulting",
      "Market Entry Advisory",
      "Sales Team Development",
    ],
    knowsAbout: [
      "Mass Timber",
      "Cross-Laminated Timber (CLT)",
      "Glulam",
      "Engineered Wood Products",
      "Timber Construction",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
