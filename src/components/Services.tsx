"use client";

import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    title: "Project Intelligence & Early Identification",
    desc: "We conduct deep research to source and identify mass timber projects the moment they receive approval. Get to the table first with actionable intelligence on upcoming CLT, glulam, and mass timber builds.",
    features: [
      "Real-time project tracking and alerts",
      "Approval-stage identification",
      "Decision-maker mapping",
      "Competitive landscape analysis",
    ],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Sales Strategy & Revenue Growth",
    desc: "Tailored sales strategies built on decades of mass timber sales leadership. We design and implement go-to-market plans that turn market intelligence into closed deals and sustained revenue growth.",
    features: [
      "Go-to-market strategy development",
      "Sales process design & optimization",
      "Pipeline development and management",
      "Key account strategy",
    ],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Sales Execution & Team Development",
    desc: "From building high-performing sales teams to coaching individuals on complex technical sales, we embed proven execution frameworks that drive measurable results across your organization.",
    features: [
      "Sales team assessment and coaching",
      "Technical sales enablement",
      "CRM and process implementation",
      "Performance metrics and accountability",
    ],
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    title: "Market Entry & Expansion Advisory",
    desc: "Whether you are entering a new region or expanding your product portfolio, we provide strategic guidance rooted in firsthand experience scaling mass timber businesses across North America.",
    features: [
      "Market assessment and sizing",
      "Channel strategy development",
      "Partnership and distribution planning",
      "Competitive positioning",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Strategic services for mass timber growth.
          </h2>
          <p className="text-lg text-gray-600">
            From finding the right projects to closing them, we provide
            end-to-end strategic support tailored to the mass timber industry.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <AnimatedSection
              key={i}
              delay={0.15 * i}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div className="bg-white rounded-lg p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <svg
                        className="w-5 h-5 text-primary shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
