export default function WhoWeServeSection() {
  const beneficiaries = [
    {
      title: "Children & Adolescents",
      desc: "Ensuring access to education, digital literacy, nutrition, and safe learning environments for underserved children.",
    },
    {
      title: "Women & Girls",
      desc: "Strengthening economic independence, leadership skills, and social security for women through targeted interventions.",
    },
    {
      title: "Rural Communities",
      desc: "Building resilient villages by improving livelihoods, environmental sustainability, and access to essential services.",
    },
    {
      title: "Youth & First-Time Earners",
      desc: "Equipping youth with employable skills, career guidance, and entrepreneurship support for dignified livelihoods.",
    },
  ];

  const approach = [
    "Need-based program design rooted in local realities",
    "Partnership-driven execution with institutions and communities",
    "Transparent fund utilization and compliance",
    "Measurable outcomes aligned with SDGs",
  ];

  return (
    <section className="w-full bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#131271] mb-6">
            Who We Serve & How We Create Change
          </h2>
          <p className="text-[#131271]/80 text-lg leading-relaxed">
            Our work focuses on empowering underserved communities through
            structured programs that address immediate needs while building
            long-term resilience.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Left - Beneficiaries */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#131271] mb-4">
              Communities We Work With
            </h3>

            {beneficiaries.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold text-[#131271] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-[#131271]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right - Approach */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#131271] mb-6">
              Our Change Framework
            </h3>

            <ul className="space-y-5">
              {approach.map((point, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                  <p className="text-[#131271]/80 text-sm leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button className="px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition">
                Explore Our Programs
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
