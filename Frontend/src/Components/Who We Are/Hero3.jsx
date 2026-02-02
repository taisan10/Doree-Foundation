
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
 