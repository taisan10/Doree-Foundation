<section className="w-full bg-[#FFF3E6] py-20">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-sm uppercase tracking-widest text-[#131271]/70 mb-4">
        How We Work
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#131271] leading-tight mb-6">
        Turning compassion into <br /> measurable impact
      </h2>

      <p className="text-lg text-[#131271]/80 mb-8">
        We don’t believe in short-term help. Our work focuses on building
        sustainable systems that empower individuals, strengthen communities,
        and create long-lasting change.
      </p>

      <ul className="space-y-4">
        {[
          "Community-first approach",
          "Transparent & accountable operations",
          "Data-driven decision making",
          "Long-term sustainability focus",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-[#131271]" />
            <span className="text-[#131271]/90">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT CONTENT */}
    <div className="grid sm:grid-cols-2 gap-8">

      {[
        {
          title: "Identify Real Needs",
          desc: "On-ground research and local collaboration help us understand what truly matters.",
        },
        {
          title: "Design Sustainable Solutions",
          desc: "Programs are created with scalability, dignity, and long-term impact in mind.",
        },
        {
          title: "Implement with Accountability",
          desc: "Every initiative is tracked, reviewed, and improved continuously.",
        },
        {
          title: "Measure & Share Impact",
          desc: "Clear metrics, honest reporting, and transparent outcomes.",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold text-[#131271] mb-3">
            {card.title}
          </h3>
          <p className="text-[#131271]/80 text-sm leading-relaxed">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
