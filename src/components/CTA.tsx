"use client";

import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-gradient-to-br from-[#1a2e0a] via-[#2d5016] to-[#1e3a0e] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to find your next mass timber project?
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how Sehn Consulting can help you identify
            opportunities earlier, build a winning sales strategy, and accelerate
            your growth in the mass timber market.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 sm:p-10 max-w-xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/90">
                <svg
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <a
                  href="mailto:paul@sehnconsulting.com"
                  className="text-lg hover:text-white transition-colors"
                >
                  paul@sehnconsulting.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <svg
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-lg">Canada</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <svg
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <a
                  href="https://www.linkedin.com/in/paulsehn9161b542/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-white transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <a
                href="mailto:paul@sehnconsulting.com?subject=Sehn%20Consulting%20Inquiry"
                className="group inline-flex items-center justify-center w-full bg-white text-primary font-semibold px-8 py-4 rounded text-base hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
              >
                Start a Conversation
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
