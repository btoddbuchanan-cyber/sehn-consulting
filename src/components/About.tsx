const credentials = [
  {
    title: "Director, EOP Sales & Technical Services — Canada",
    desc: "Led sales and technical operations for one of the largest mass timber manufacturers in the world.",
  },
  {
    title: "SVP, Sales & Marketing",
    desc: "Drove revenue strategy and market expansion for a leading structural lumber company.",
  },
  {
    title: "Director of Marketing",
    desc: "Shaped brand positioning and go-to-market strategy for an international mass timber manufacturer.",
  },
  {
    title: "Business Consultant",
    desc: "Advised a range of mass timber companies on growth strategy, sales execution, and market entry.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
              About Paul Sehn
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Three decades at the forefront of mass timber.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Paul Sehn brings over 30 years of senior executive experience
              across the mass timber and engineered wood products industry. From
              leading national sales operations to shaping go-to-market strategy
              for international manufacturers, Paul has built and scaled revenue
              engines at every level.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, Sehn Consulting channels that depth of experience into
              helping mass timber companies identify opportunities earlier, sell
              smarter, and grow faster.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-2">
              Executive Track Record
            </p>
            {credentials.map((item, i) => (
              <div
                key={i}
                className="border-l-2 border-primary/30 pl-6 py-2 hover:border-primary transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
