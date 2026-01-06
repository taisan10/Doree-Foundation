// Work5YearSection.jsx
import { useEffect, useRef, useState } from "react";

const impactData = [
  {
    id: 1,
      title: "Village Outreach",
  desc: "Support • Serve • Uplift",
    count: 5000,
    color: "bg-pink-100",
    icon: "/Home/Icons/Health1.png"
  },
  {
    id: 2,
    title: "Education",
  desc: "Study • Shine • Progress",
    count: 20000,
    color: "bg-teal-100",
   icon: "/Home/Work5Year/Education11.png"
  },
  {
    id: 3,
    title: "Awareness for Rural Girls",
     desc: "Learn • Lead • Grow",
    count: 10000,
    color: "bg-orange-300",
   icon: "/Home/Work5Year/Women10.png"
  },
  {
    id: 4,
    title: "Tree Plantation Drive",
  desc: "Plant • Protect • Preserve",
    count: 12000,
    color: "bg-green-100",
    icon: "/Home/Work5Year/Plant1.png"
  },
  {
    id: 5,
     title: "No-Plastic Campaign",
  desc: "Reduce • Reuse • Respect",
    count: 250,
    color: "bg-yellow-100",
    icon: "/Home/Work5Year/No-Plastic10.png"
  },
  {
    id: 6,
    title: "Placement Drive",
     desc:"Skills • Jobs • Growth",
    count: 15000,
    color: "bg-purple-100",
   icon: "/Home/Work5Year/Employement10.png"
  }
];

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0;
        const step = Math.ceil(target / 100);
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            setCount(target);
            clearInterval(interval);
          } else {
            setCount(current);
          }
        }, 20);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function Work5YearSection() {
  return (
    <section className="w-full  py-20 -mt-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-start ">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Lives of <Counter className="target-yellow" target={20000} /> Children changed though our work last 5 Year.
          </h2>
          <p className="text-gray-600 mb-6">April 2020 to March 2025</p>
          <div className="flex flex-col space-y-4">
  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Community helping hands" className="w-full max-w-md rounded-xl shadow-md" />
</div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:-ml-5 ">
          {impactData.map((item) => (
            <div
              key={item.id}
              className={`relative p-6 rounded-xl shadow-md ${item.color} flex flex-col justify-between`}
            >
              {/* Icon */}
              <div className="absolute -top-5 -left-3 w-12 h-12">
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
              </div>

              {/* Count */}
              <h3 className="text-2xl font-bold text-gray-800 ">
                <Counter target={item.count} />+
              </h3>

              {/* Title */}
              <p className="text-gray-700 font-bold text-[1.10rem] ">{item.title}</p>

              <p className="text-gray-700 font-semibold">{item.desc}</p>

              {/* Bottom Line */}
              <div className="h-px bg-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}