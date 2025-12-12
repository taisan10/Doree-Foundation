// export default function SkillDevelopmentSection() {
//   const steps = [
//   {
//     title: "समुदाय जागरूकता",
//     points: ["क्षेत्र मानचित्रण", "रणनीति पहचानना और कार्य योजना बनाना"],
//     color: "border-orange-500",
//   },
//   {
//     title: "चयन और नामांकन",
//     points: ["परामर्श", "प्रलेखन"],
//     color: "border-pink-500",
//   },
//   {
//     title: "प्रशिक्षण",
//     points: ["पाठ्यक्रम मॉड्यूल और उद्योग मानक के अनुसार प्रशिक्षण"],
//     color: "border-green-500",
//   },
//   {
//     title: "नियोजन",
//     points: ["वस्त्र कंपनियों में नियुक्ति", "अनुवर्ती कार्रवाई"],
//     color: "border-blue-500",
//   },
//   {
//     title: "ईसीसीई और एनएफई",
//     points: [
//       "समुदाय जागरूकता",
//       "चयन और प्रवेश",
//       "बाल-केंद्रित शिक्षा",
//       "मुख्यधारा में शामिल करना",
//     ],
//     color: "border-yellow-500",
//   },
// ];
//   return (
//     <section className="bg-orange-100 py-12 px-6 lg:px-20">
//       <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//   कौशल विकास दृष्टिकोण और कार्यप्रणाली
// </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className={`bg-orange-50 rounded-xl shadow-md p-6 border-b-4 ${step.color} transition-transform hover:-translate-y-2`}
//           >
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               {step.title}
//             </h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               {step.points.map((point, i) => (
//                 <li key={i}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


























export default function SkillDevelopmentFlowchart() {
  const steps = [
  {
    title: "समुदाय जागरूकता",
    points: ["क्षेत्र मानचित्रण", "रणनीति पहचानना और कार्य योजना बनाना"],
    color: "border-orange-500",
  },
  {
    title: "चयन और नामांकन",
    points: ["परामर्श", "प्रलेखन"],
    color: "border-pink-500",
  },
  {
    title: "प्रशिक्षण",
    points: ["पाठ्यक्रम मॉड्यूल और उद्योग मानक के अनुसार प्रशिक्षण"],
    color: "border-green-500",
  },
  {
    title: "नियोजन",
    points: ["वस्त्र कंपनियों में नियुक्ति", "अनुवर्ती कार्रवाई"],
    color: "border-blue-500",
  },
  {
    title: "ईसीसीई और एनएफई",
    points: [
      "समुदाय जागरूकता",
      "चयन और प्रवेश",
      "बाल-केंद्रित शिक्षा",
      "मुख्यधारा में शामिल करना",
    ],
    color: "border-yellow-500",
  },
];


  return (
    <section className="bg-orange-100 py-12 px-4 lg:px-20">
     <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
  कौशल विकास दृष्टिकोण और कार्यप्रणाली
</h2>

      <div className="flex flex-wrap justify-center gap-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Main Box */}
            <div
              className={`w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center text-center font-semibold text-gray-800 border-b-4 ${step.color}`}
            >
              {step.title}
            </div>

            {/* Vertical Line */}
            <div className="w-0.5 h-8 bg-gray-400 my-2"></div>

            {/* Sub Boxes */}
            <div
              className={`flex flex-wrap justify-center gap-4 ${
                step.points.length === 1 ? "w-48" : "w-full"
              }`}
            >
              {step.points.map((point, i) => (
                <div
                  key={i}
                  className="min-w-[140px] max-w-[180px] bg-white rounded-md shadow-sm px-4 py-2 text-sm text-gray-700 border border-gray-300 text-center"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}