import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const people = [
  {
    name: "Neha Shrivastava",
    role: "Director, Corporate Volunteering",
    image: "/About/Team/1.jpg",
    about:
      "Neha leads corporate volunteering initiatives, creating impactful programs that empower communities and drive sustained engagement."
  },
{
  name: "Adv. Rajat Garg",
  role: "Finance Department, Doree Foundation",
  image: "/About/Team/Rajat_Sir.jpg",
  about:
    "Adv. Rajat Garg is currently leading the Finance Department at Doree Foundation. He ensures financial transparency, planning and sustainable growth.",
  qualifications: [
    "B.Com",
    "M.Com (Economics)",
    "M.Com (Accountancy)",
    "LL.B.",
    "MBA (HR)"
  ]
},
  
  {
    name: "Vivek Agrawal",
    role: "Director, HR & Operations",
    image: "/About/Team/2.jpg",
    about:
      "Vivek oversees operations and HR initiatives, ensuring scalable systems, strong governance and people-first culture."
  },
  {
    name: "Vivek Agrawal",
    role: "Director, HR & Operations",
    image: "/About/Team/2.jpg",
    about:
      "Vivek oversees operations and HR initiatives, ensuring scalable systems, strong governance and people-first culture."
  },
  {
    name: "Vivek Agrawal",
    role: "Director, HR & Operations",
    image: "/About/Team/2.jpg",
    about:
      "Vivek oversees operations and HR initiatives, ensuring scalable systems, strong governance and people-first culture."
  }
];

export default function TeamSlider() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? people.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === people.length - 1 ? 0 : i + 1));

  const main = people[index];
  const sideTop = people[(index + 1) % people.length];
  const sideBottom = people[(index + 2) % people.length];

  return (
//     <section className="w-full max-w-7xl mx-auto px-4 py-10 grid gap-8 lg:grid-cols-5 -mt-15">
//       {/* LEFT MAIN CARD - 60% */}
//       <div className="lg:col-span-3 bg-orange-50 rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 shadow">
//         {/* TEXT */}
//         <div className="flex-1 flex flex-col gap-4">
//           <button
//             onClick={prev}
//             className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-300 hover:bg-orange-400 transition"
//           >
//             <ArrowLeft />
//           </button>

//           <h2 className="text-3xl font-bold text-gray-900">
//             {main.name}
//           </h2>

//           <p className="font-semibold text-gray-700">
//             {main.role}
//           </p>

//        <p className="text-gray-600 leading-relaxed">
//   {main.about}
// </p>

// <p className="mt-3 font-semibold text-gray-900">
//   Qualifications:
// </p>

// <ul className="list-disc pl-6 text-gray-700">
//   {main.qualifications?.map((q, i) => (
//     <li key={i} className="font-bold">{q}</li>
//   ))}
// </ul>


//           <div className="mt-auto flex  gap-4">
//             <button
//               onClick={next}
//               className="ml-auto w-12 h-12 rounded-full flex items-center justify-center bg-orange-300 hover:bg-orange-400 transition"
//             >
//               <ArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* IMAGE */}
//         <div className="flex-shrink-0">
//           <img
//             src={main.image}
//             className="w-full max-w-xs  h-[440px] object-cover rounded-3xl"
//             alt={main.name}
//           />
//         </div>
//       </div>


<section className="w-full max-w-7xl mx-auto px-4 py-10 grid gap-8 lg:grid-cols-5  -mt-20">
  {/* MAIN CARD */}
  <div className="
      lg:col-span-3 bg-orange-50 rounded-3xl 
      p-6 md:p-10 flex flex-col gap-6 shadow
      lg:flex-row
  ">
    
    {/* IMAGE FIRST ON MOBILE */}
    <div className="w-full flex justify-center lg:hidden">
      <img
        src={main.image}
        className="w-60 h-60 object-cover rounded-3xl shadow"
        alt={main.name}
      />
    </div>

    {/* TEXT */}
    <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
      <div className="flex justify-between lg:justify-start lg:gap-3">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-300 hover:bg-orange-400 transition"
        >
          <ArrowLeft />
        </button>

        {/* NEXT ON MOBILE RIGHT */}
        <button
          onClick={next}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-300 hover:bg-orange-400 transition lg:hidden"
        >
          <ArrowRight />
        </button>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        {main.name}
      </h2>

      <p className="font-semibold text-gray-700">{main.role}</p>

      <p className="text-gray-600 leading-relaxed">{main.about}</p>

      {main.qualifications && (
        <>
          <p className="mt-2 font-semibold text-gray-900">
            Qualifications:
          </p>

          <ul className="list-disc pl-6 text-left mx-auto lg:mx-0">
            {main.qualifications.map((q, i) => (
              <li key={i} className="font-bold text-gray-800">{q}</li>
            ))}
          </ul>
        </>
      )}

      {/* NEXT BUTTON ON DESKTOP ONLY */}
      <div className="hidden lg:flex mt-auto">
        <button
          onClick={next}
          className="ml-auto w-12 h-12 rounded-full flex items-center justify-center bg-orange-300 hover:bg-orange-400 transition"
        >
          <ArrowRight />
        </button>
      </div>
    </div>

    {/* IMAGE FOR DESKTOP */}
    <div className="hidden lg:block flex-shrink-0">
      <img
        src={main.image}
        className="w-full max-w-xs h-[440px] object-cover rounded-3xl"
        alt={main.name}
      />
    </div>
  </div>




      {/* RIGHT SIDE PANEL - 40% */}
      <div className="hidden lg:flex  lg:col-span-2 flex flex-col gap-6">
        {/* TOP CARD */}
        <div className="flex gap-4 items-center bg-orange-50 rounded-3xl p-4 shadow">
          <img
            src={sideTop.image}
            className="w-48 h-52 object-cover rounded-2xl"
            alt={sideTop.name}
          />
          <div>
            <h4 className="text-lg font-bold text-orange-600">
              {sideTop.name}
            </h4>
            <p className="text-gray-700 text-sm">
              {sideTop.role}
            </p>
          </div>
        </div>

        {/* BOTTOM CARD */}
        <div className="flex gap-4 items-center bg-orange-50 rounded-3xl p-4 shadow">
          <img
            src={sideBottom.image}
            className="w-48 h-52 object-cover rounded-2xl"
            alt={sideBottom.name}
          />
          <div>
            <h4 className="text-lg font-bold text-orange-600">
              {sideBottom.name}
            </h4>
            <p className="text-gray-700 text-sm">
              {sideBottom.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
