export default function SkillDevelopmentSection() {
  const steps = [
    {
      title: "Community Mobilization",
      points: ["Area Mapping", "Identifying strategy and making work plan"],
      color: "border-orange-500",
    },
    {
      title: "Selection and Enrollment",
      points: ["Counseling", "Documentation"],
      color: "border-pink-500",
    },
    {
      title: "Training",
      points: ["Training as per course module and industry standard"],
      color: "border-green-500",
    },
    {
      title: "Placement",
      points: ["Placement into Garment Companies", "Follow-Up"],
      color: "border-blue-500",
    },
    {
      title: "ECCE & NFE",
      points: [
        "Community Mobilization",
        "Selection and Admission",
        "Child Centric Learning",
        "Mainstreaming",
      ],
      color: "border-yellow-500",
    },
  ];

  return (
    <section className="bg-orange-100 py-12 px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Skill Development Approach and Methodology
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`bg-orange-50 rounded-xl shadow-md p-6 border-b-4 ${step.color} transition-transform hover:-translate-y-2`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {step.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {step.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


























// export default function SkillDevelopmentFlowchart() {
//   const steps = [
//     {
//       title: "Community Mobilization",
//       color: "border-orange-500",
//       substeps: ["Area Mapping", "Identifying strategy and making work plan"],
//     },
//     {
//       title: "Selection & Enrollment",
//       color: "border-pink-500",
//       substeps: ["Counseling ", "Documentation"],
//     },
//     {
//       title: "Training",
//       color: "border-green-500",
//       substeps: ["Training as per course module and industry standard"],
//     },
//     {
//       title: "Placement",
//       color: "border-blue-500",
//       substeps: ["Placement into Garment Companies", "Follow-Up"],
//     },
//     {
//       title: "ECCE & NFE",
//       color: "border-yellow-500",
//       substeps: [
//         "Community Mobilization",
//         "Selection and Admission",
//         "Child Centric Learning",
//         "Mainstreaming",
//       ],
//     },
//   ];

//   return (
//     <section className="bg-orange-100 py-12 px-4 lg:px-20">
//       <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
//         Skill Development Approach and Methodology
//       </h2>

//       <div className="flex flex-wrap justify-center gap-12">
//         {steps.map((step, index) => (
//           <div key={index} className="flex flex-col items-center">
//             {/* Main Box */}
//             <div
//               className={`w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center text-center font-semibold text-gray-800 border-b-4 ${step.color}`}
//             >
//               {step.title}
//             </div>

//             {/* Vertical Line */}
//             <div className="w-0.5 h-8 bg-gray-400 my-2"></div>

//             {/* Sub Boxes */}
//             <div
//               className={`flex flex-wrap justify-center gap-4 ${
//                 step.substeps.length === 1 ? "w-48" : "w-full"
//               }`}
//             >
//               {step.substeps.map((point, i) => (
//                 <div
//                   key={i}
//                   className="min-w-[140px] max-w-[180px] bg-white rounded-md shadow-sm px-4 py-2 text-sm text-gray-700 border border-gray-300 text-center"
//                 >
//                   {point}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }