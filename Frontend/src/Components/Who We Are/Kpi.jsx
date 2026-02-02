export default function OurWorkInAction() {
  const journey = [
    {
      step: "01",
      title: "Identify Community Needs",
      desc: "We work closely with local communities to understand real challenges through surveys, meetings, and field assessments.",
    },
    {
      step: "02",
      title: "Design Purpose-Driven Programs",
      desc: "Programs are structured with clear goals, timelines, and measurable indicators aligned with social impact standards.",
    },
    {
      step: "03",
      title: "Ground-Level Implementation",
      desc: "Our teams collaborate with educators, trainers, and volunteers to deliver interventions directly on the ground.",
    },
    {
      step: "04",
      title: "Monitor & Improve",
      desc: "Continuous monitoring helps us improve quality, accountability, and effectiveness of every initiative.",
    },
    {
      step: "05",
      title: "Sustainable Impact",
      desc: "We focus on long-term change by enabling communities to become self-reliant and resilient over time.",
    },
  ];

  return (
    <section className="bg-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#131271] mb-6">
            Our Work in Action
          </h2>
          <p className="text-lg text-[#131271]/80 leading-relaxed">
            From understanding grassroots challenges to creating lasting change,
            our work follows a structured journey that ensures accountability,
            transparency, and measurable impact.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {journey.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 text-center border border-orange-100 hover:shadow-md transition"
            >
              <div className="text-orange-500 text-3xl font-bold mb-4">
                {item.step}
              </div>
              <h4 className="text-lg font-semibold text-[#131271] mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-[#131271]/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition">
            See Our Programs in Detail
          </button>
        </div>

      </div>

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



<section className="w-full bg-[#FFF3E6] py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* SECTION LABEL */}
    <p className="text-sm uppercase tracking-widest text-[#131271]/60 mb-4">
      Who We Work For
    </p>

    {/* MAIN HEADING */}
    <h2 className="text-4xl md:text-5xl font-bold text-[#131271] mb-6">
      People at the heart of everything we do
    </h2>

    {/* DESCRIPTION */}
    <p className="max-w-3xl mx-auto text-lg text-[#131271]/80 mb-16">
      Our programs are designed around real people, real challenges, and real
      aspirations. We focus on communities that are often unheard, underserved,
      and overlooked.
    </p>

    {/* BENEFICIARY GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {[
        {
          title: "Children & Youth",
          desc: "Ensuring safe environments, access to education, and opportunities to grow with dignity.",
        },
        {
          title: "Women & Girls",
          desc: "Supporting leadership, financial independence, and protection of rights.",
        },
        {
          title: "Marginalized Communities",
          desc: "Working with communities facing systemic barriers to resources and services.",
        },
        {
          title: "Rural Families",
          desc: "Strengthening livelihoods, health access, and resilience in rural areas.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl px-6 py-8 shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold text-[#131271] mb-4">
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



<section className="w-full bg-[#FFF3E6] py-28">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">

    {/* LEFT — NARRATIVE */}
    <div>
      <p className="text-sm uppercase tracking-widest text-[#131271]/60 mb-4">
        Our Approach
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#131271] mb-8">
        How lasting change actually happens
      </h2>

      <p className="text-lg text-[#131271]/85 leading-relaxed mb-6">
        Sustainable social change does not come from one-time interventions.
        It emerges when communities are empowered, systems are strengthened,
        and long-term thinking replaces short-term relief.
      </p>

      <p className="text-lg text-[#131271]/85 leading-relaxed">
        Our work focuses on building capacity, trust, and accountability —
        ensuring that progress continues even after programs end.
      </p>
    </div>

    {/* RIGHT — FLOW STEPS */}
    <div className="space-y-12 border-l-2 border-orange-300 pl-10">

      {[
        {
          step: "01",
          title: "Listen First",
          desc: "We begin by deeply understanding community realities, not assumptions.",
        },
        {
          step: "02",
          title: "Co-Create Solutions",
          desc: "Programs are designed with communities, not for them.",
        },
        {
          step: "03",
          title: "Strengthen Local Systems",
          desc: "We invest in skills, institutions, and leadership that sustain change.",
        },
        {
          step: "04",
          title: "Measure What Matters",
          desc: "Impact is tracked through outcomes, not activities alone.",
        },
      ].map((item, i) => (
        <div key={i} className="relative">
          <span className="absolute -left-16 top-0 text-5xl font-bold text-orange-200">
            {item.step}
          </span>

          <h3 className="text-xl font-semibold text-[#131271] mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-[#131271]/80 leading-relaxed max-w-md">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    </section>



  );
}
