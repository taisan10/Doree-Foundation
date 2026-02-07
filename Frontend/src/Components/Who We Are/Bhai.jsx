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





// ===================== DATA =====================
const focusAreas = [
  {
    title: "Education Support",
    desc: "Providing quality education, mentoring, and digital learning resources to underprivileged children.",
    image: "/WhatWeDo/education.jpg",
  },
  {
    title: "Healthcare & Nutrition",
    desc: "Improving access to healthcare, nutrition programs, and health awareness campaigns.",
    image: "/WhatWeDo/health.jpg",
  },
  {
    title: "Women Empowerment",
    desc: "Skill development, financial literacy, and leadership programs for women.",
    image: "/WhatWeDo/women.jpg",
  },
];

const initiatives = [
  "Community Awareness Programs   ",
  "Child Protection & Rights",
  "Environmental Sustainability",
  "Skill Development & Livelihood",
  "Corporate Volunteering",
  "Disaster Relief Support",
];

const impactStats = [                                                

  { label: "Children Impacted", value: "25,000+" },
  { label: "Volunteers", value: "1,200+" },
  { label: "Projects Completed", value: "150+" },
  { label: "Cities Reached", value: "40+" },   
];

// ===================== COMPONENT =====================
export default function Who() {
  return (
    <main className="w-full bg- orange-500">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center "> 
        <h1 className="text-4xl md:text-5xl font-bold  text-[#131271]">
           What We Do  Bro 
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          We work at the grassroots to create sustainable change by empowering
          communities, supporting children, and building resilient systems. 
          We work at the grassroots to create sustainable change by empowering
          communities, supporting children, and building resilient systems. 
          We work at the grassroots to create sustainable change by empowering 
          communities, supporting children, and building resilient systems.
          We work at the grassroots to create sustainable change by empowering
          communities, supporting children, and building resilient systems. 
          We work at the grassroots to create sustainable change by empowering
          communities, supporting children , and building resilient systems. 
          We work at the grassroots to create sustainable change by empoering 
          communities, 
        </p>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#f76b04]">
          Our Focus Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {focusAreas.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INITIATIVES ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Key Initiatives
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item, i) => (
              <div
                key={i}
                className="border rounded-2xl p-6 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      {/* <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          How We Work
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl">Identify Needs</h3>
            <p className="mt-3 text-gray-600">
              We conduct on-ground research to understand real community needs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl">Design Programs</h3>
            <p className="mt-3 text-gray-600">
              Programs are designed with sustainability and scalability in mind.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl">Measure Impact</h3>
            <p className="mt-3 text-gray-600">
              Continuous monitoring ensures long-term measurable impact.
            </p>
          </div>
        </div>
      </section> */}

      {/* ================= IMPACT ================= */}
      {/* <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-orange-500">
                  {stat.value}
                </p>
                <p className="mt-2 text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= CTA ================= */}
      {/* <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Join Us in Creating Change
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Be a part of our mission to uplift communities and build a better
          future together.
        </p>
        <button className="mt-8 px-8 py-3 rounded-full bg-orange-500 text-white font-semibold">
          Get Involved
        </button>
      </section> */}
    </main>
  );
}
 
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
            Our approach 

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
