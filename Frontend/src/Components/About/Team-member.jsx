import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Neha Shrivastava",
    role: "Director – Corporate Volunteering",
    image: "/About/Team/1.jpg",
  },
  {
    name: "Adv. Rajat Garg",
    role: "Finance Department – Doree Foundation",
    image: "/About/Team/Rajat_Sir.jpg",
  },
  {
    name: "Vivek Agrawal",
    role: "Director – HR & Operations",
    image: "/About/Team/2.jpg",
  },
  {
    name: "Rashmi Arora",
    role: "Director – Finance",
    image: "/About/Team/3.jpg",
  },
];

export default function OurTeamSection() {
  const [i, setI] = useState(0);

  const prev = () =>
    setI((p) => (p === 0 ? team.length - 1 : p - 1));

  const next = () =>
    setI((p) => (p === team.length - 1 ? 0 : p + 1));

  // cards to show (1/2/3 depending on screen)
  const visible = (k) => team[(i + k) % team.length];

  return (
    <section className="w-full bg-orange-900/90 py-12 md:py-16">
    
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
      Our Team
    </h2>
   

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2 text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Managing Committee
          </h3>

          <p className="text-white/90 leading-relaxed">
            Doree Foundation’s leadership team guides our
            mission, strengthens systems, and ensures meaningful
            impact across communities.
          </p>

          <div className="mt-6 border-t border-white/30 w-3/4" />
        </div>

        {/* RIGHT - SLIDER */}
        <div className="lg:col-span-3 relative">
          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-500 shadow flex items-center justify-center"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gray-500 shadow  flex items-center justify-center"
          >
            <ArrowRight />
          </button>

          {/* CARDS CONTAINER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[visible(0), visible(1), visible(2)].map((m, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow overflow-hidden"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-5 text-center">
                  <h4 className="font-bold text-gray-900">
                    {m.name}
                  </h4>

                  <p className="text-gray-600 text-sm mt-1">
                    {m.role}
                  </p>

                  <div className="mt-4 h-[2px] w-24 bg-orange-400 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
