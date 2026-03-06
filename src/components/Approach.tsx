const steps = [
  {
    num: "01",
    title: "Research & Discovery",
    desc: "We monitor approval pipelines, building departments, and industry channels to identify mass timber projects at the earliest possible stage.",
  },
  {
    num: "02",
    title: "Intelligence & Analysis",
    desc: "Each opportunity is analyzed for fit, timing, and competitive landscape. You receive actionable briefings, not raw data.",
  },
  {
    num: "03",
    title: "Strategy & Positioning",
    desc: "We develop a tailored engagement strategy for each high-value opportunity, mapping decision-makers and crafting your value proposition.",
  },
  {
    num: "04",
    title: "Execution & Results",
    desc: "From first outreach to closed deal, we support your team through the sales cycle with coaching, strategy adjustments, and accountability.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            From approval to award. Faster.
          </h2>
          <p className="text-lg text-gray-600">
            A proven methodology that turns early project intelligence into
            competitive advantage and closed business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-bold text-primary/10 mb-4">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary/20"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
