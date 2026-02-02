export default function OurMethodologySection() {
  const methodology = [
    {
      step: "01",
      title: "Community-Led Assessment",
      desc: "We partner directly with local communities to identify root causes, priorities, and culturally relevant solutions — ensuring ownership from day one.",
    },
    {
      step: "02",
      title: "Evidence-Based Program Design",
      desc: "Programs are developed using global best practices, data insights, and field research aligned with international development standards.",
    },
    {
      step: "03",
      title: "Collaborative Implementation",
      desc: "We work alongside local leaders, governments, and civil society organizations to deliver programs with transparency and shared responsibility.",
    },
    {
      step: "04",
      title: "Monitoring, Evaluation & Learning",
      desc: "Continuous monitoring, independent evaluations, and learning loops help us refine strategies and scale what truly works.",
    },
  ];

  return (
    <section className="relative w-full bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#131271] leading-tight mb-6">
              Our Methodology for<br />
              Sustainable Impact
            </h2>

            <p className="text-[#131271]/80 text-lg leading-relaxed max-w-xl">
              We follow a structured, transparent, and community-centered
              methodology to ensure every initiative delivers measurable,
              ethical, and long-term outcomes.
            </p>
          </div>

          {/* Right Highlight Box */}
          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h4 className="text-xl font-semibold text-[#131271] mb-4">
              Why Our Approach Works
            </h4>
            <ul className="space-y-3 text-[#131271]/80 text-sm leading-relaxed">
              <li>• Community ownership over dependency</li>
              <li>• Data-driven decision making</li>
              <li>• Global standards, local execution</li>
              <li>• Transparent impact reporting</li>
            </ul>
          </div>
        </div>

        {/* Methodology Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodology.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-7 border border-orange-100 hover:shadow-lg transition"
            >
              <span className="block text-5xl font-bold text-orange-200 mb-4 group-hover:text-orange-300 transition">
                {item.step}
              </span>

              <h3 className="text-lg font-semibold text-[#131271] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[#131271]/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
