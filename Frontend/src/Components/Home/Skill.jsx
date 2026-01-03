

export default function SkillDevelopmentFlowchart() {
 const steps = [
  {
    title: "Community Awareness",
    points: ["Area Mapping", "Identifying strategies and creating an action plan"],
    color: "border-orange-500",
  },
  {
    title: "Selection and Enrollment",
    points: ["Counseling", "Documentation"],
    color: "border-pink-500",
  },
  {
    title: "Training",
    points: ["Training as per curriculum modules and industry standards"],
    color: "border-green-500",
  },
  {
    title: "Placement",
    points: ["Placement in garment companies", "Follow-up support"],
    color: "border-blue-500",
  },
  {
    title: "ECCE and NFE",
    points: [
      "Community Awareness",
      "Selection and Admission",
      "Child-centric Education",
      "Mainstream Integration",
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