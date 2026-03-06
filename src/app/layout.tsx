import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sehn Consulting | Mass Timber Sales Strategy & Market Intelligence",
  description:
    "Sehn Consulting helps mass timber companies identify projects early, build winning sales strategies, and accelerate revenue growth. 30+ years of senior executive experience.",
  keywords:
    "mass timber consulting, CLT sales strategy, mass timber projects, timber construction consulting, engineered wood products",
  openGraph: {
    title: "Sehn Consulting | Mass Timber Sales Strategy & Market Intelligence",
    description:
      "We identify mass timber projects before your competitors do. 30+ years of senior executive experience driving revenue for the world's leading mass timber companies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
