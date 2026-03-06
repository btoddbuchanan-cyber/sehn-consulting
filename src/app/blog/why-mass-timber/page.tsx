import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Mass Timber? | Sehn Consulting",
  description:
    "Mass timber is transforming the construction industry. Learn why CLT, glulam, and engineered wood products are the future of sustainable, high-performance building.",
};

const sections = [
  {
    id: "what-is",
    title: "What Is Mass Timber?",
    content: `Mass timber refers to a category of engineered wood products used as primary structural elements in building construction. Unlike traditional light-frame wood construction, mass timber uses large, solid, or laminated wood panels and beams that can rival steel and concrete in structural performance.

The most common mass timber products include:`,
    list: [
      "**Cross-Laminated Timber (CLT)** — Layers of lumber boards glued at right angles, creating massive structural panels for walls, floors, and roofs.",
      "**Glued-Laminated Timber (Glulam)** — Layers of dimensional lumber bonded together to create beams and columns capable of spanning large distances.",
      "**Nail-Laminated Timber (NLT)** — Dimensional lumber stacked on edge and fastened with nails, used for floors, walls, and roof decking.",
      "**Dowel-Laminated Timber (DLT)** — Similar to NLT but connected with hardwood dowels instead of nails, eliminating the need for adhesives or metal fasteners.",
      "**Mass Plywood Panels (MPP)** — Large structural panels made from layers of veneer, offering an alternative to CLT.",
    ],
  },
  {
    id: "carbon",
    title: "The Carbon Advantage",
    content: `One of the most compelling arguments for mass timber is its environmental profile. While concrete and steel production account for roughly 11% of global CO2 emissions, mass timber sequesters carbon, locking it away for the life of the building.

A typical mass timber building stores approximately one tonne of CO2 per cubic meter of wood used. When you factor in the avoided emissions from not using concrete or steel, the carbon math becomes extraordinary.

This is not a marginal improvement. It is a fundamental shift in how we think about the materials that make up our built environment. Every mass timber building is, in effect, a carbon bank — storing carbon that would otherwise be in the atmosphere.`,
  },
  {
    id: "performance",
    title: "Structural Performance That Surprises",
    content: `Mass timber's strength-to-weight ratio is remarkably competitive with steel and concrete. CLT panels can support multi-story loads, and glulam beams can span distances that would typically require steel.

But the advantages go beyond raw strength:`,
    list: [
      "**Fire resistance** — Mass timber chars predictably on the outside, forming a protective layer that insulates the structural core. Modern mass timber buildings meet and exceed fire code requirements.",
      "**Seismic performance** — Wood is naturally flexible and lightweight, giving mass timber structures excellent earthquake resistance. This has been proven in testing and in real-world seismic events.",
      "**Dimensional stability** — Engineered wood products are manufactured to precise specifications, offering predictable performance that simplifies engineering and construction.",
    ],
  },
  {
    id: "speed",
    title: "Speed of Construction",
    content: `Mass timber components are precision-manufactured off-site using CNC technology and delivered ready to install. This prefabrication approach delivers dramatic time savings on the job site.

Typical mass timber projects see construction timelines reduced by 25% or more compared to equivalent concrete structures. Fewer trades on site, less waste, quieter construction, and reduced disruption to surrounding areas.

For developers and owners, faster construction means faster occupancy, earlier revenue, and lower carrying costs. In competitive markets, this speed advantage can be the difference between a viable project and a missed opportunity.`,
  },
  {
    id: "market",
    title: "A Market in Rapid Growth",
    content: `The North American mass timber market is experiencing exponential growth. Building codes have expanded to allow mass timber structures up to 18 stories in many jurisdictions, and new projects are being announced at an accelerating pace.

Key market drivers include:`,
    list: [
      "**Corporate sustainability mandates** — Major tenants and developers are increasingly requiring low-carbon building materials to meet ESG commitments.",
      "**Government policy** — Incentive programs, green building requirements, and updated building codes are creating tailwind for mass timber adoption.",
      "**Occupant demand** — Studies consistently show that people prefer working and living in spaces with exposed natural wood, citing improved well-being and productivity.",
      "**Cost convergence** — As the supply chain matures and more manufacturers come online, mass timber is becoming cost-competitive with conventional materials in an expanding range of building types.",
    ],
  },
  {
    id: "opportunity",
    title: "The Opportunity for Mass Timber Companies",
    content: `The growth of mass timber creates enormous opportunity — but also intense competition. Projects are being approved at a pace that makes it difficult for any single company to track, evaluate, and pursue them all effectively.

The companies that win in this market are the ones that identify opportunities earliest, position themselves strategically, and execute with discipline. That means having deep market intelligence, strong relationships with specifiers and developers, and a sales process built for the unique dynamics of mass timber procurement.

This is exactly where Sehn Consulting operates. With over 30 years of executive experience in the mass timber industry, we help companies turn market momentum into revenue — from early project identification through to closed deals.`,
  },
];

export default function WhyMassTimber() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-foreground tracking-tight">
                  Sehn Consulting
                </span>
                <span className="hidden sm:block text-xs text-accent tracking-widest uppercase">
                  Mass Timber Advisory
                </span>
              </div>
            </Link>

            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative pt-20">
          <div className="relative h-[50vh] min-h-[400px]">
            <Image
              src="/images/hero-geometric-ceiling.jpg"
              alt="Geometric mass timber ceiling structure showcasing engineered wood beams"
              fill
              className="object-cover"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-[#1a2e0a]/50 to-[#1a2e0a]/70" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <p className="text-sm font-semibold text-green-300 tracking-widest uppercase mb-4">
                  Industry Insight
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Why Mass Timber?
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <p className="text-xl text-gray-600 leading-relaxed mb-12 border-l-4 border-primary pl-6">
            Mass timber is not just a building material. It is a fundamental
            shift in how we construct — one that is redefining performance,
            sustainability, and speed across the global construction industry.
          </p>

          {/* Table of Contents */}
          <nav className="bg-section rounded-lg p-8 mb-16">
            <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
              In This Article
            </h2>
            <ul className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          {sections.map((section, i) => (
            <section key={section.id} id={section.id} className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                {section.title}
              </h2>
              {section.content.split("\n\n").map((paragraph, j) => (
                <p
                  key={j}
                  className="text-lg text-gray-600 leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-4 mt-6">
                  {section.list.map((item, k) => {
                    const boldMatch = item.match(/^\*\*(.+?)\*\*(.*)$/);
                    return (
                      <li key={k} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-primary shrink-0 mt-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-lg text-gray-600 leading-relaxed">
                          {boldMatch ? (
                            <>
                              <strong className="text-foreground">
                                {boldMatch[1]}
                              </strong>
                              {boldMatch[2]}
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
              {i < sections.length - 1 && (
                <hr className="mt-16 border-gray-200" />
              )}
            </section>
          ))}

          {/* CTA */}
          <section className="bg-gradient-to-br from-[#1a2e0a] via-[#2d5016] to-[#1e3a0e] rounded-lg p-10 sm:p-14 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to capitalize on the mass timber opportunity?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Sehn Consulting helps mass timber companies identify projects
              early, build winning sales strategies, and accelerate revenue
              growth.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-white text-primary font-semibold px-8 py-4 rounded text-base hover:bg-gray-50 transition-colors"
            >
              Schedule a Consultation
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-[#111] py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-white/80 font-semibold text-sm">
                Sehn Consulting
              </span>
            </Link>
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Sehn Consulting. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
