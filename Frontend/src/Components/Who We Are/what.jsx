export default function HowWeWorkSection() {
  const steps = [
    {
      title: "Understanding Community Needs",
      desc: "We begin by listening to communities, identifying real challenges, and understanding cultural and social contexts before planning any intervention.",
    },
    {
      title: "Designing Sustainable Programs",
      desc: "Our experts design long-term, scalable programs focused on education, health, livelihood, and empowerment — not short-term relief.",
    },
    {
      title: "On-Ground Implementation",
      desc: "With local partners and volunteers, we execute programs transparently, ensuring community participation at every stage.",
    },
    {
      title: "Measuring Impact & Growth",
      desc: "We track outcomes, measure impact, and continuously improve our programs to ensure meaningful and lasting change.",
    },
  ];

  return (
    <section className="w-full bg-orange-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#131271] mb-4">
            How We Work With Communities
          </h2>
          <p className="text-[#131271]/80 text-base md:text-lg leading-relaxed">
            Our approach is rooted in empathy, collaboration, and accountability —
            ensuring every initiative creates real and lasting impact.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Step Number */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-[#131271] font-bold mb-4">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold text-[#131271] mb-2">
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
