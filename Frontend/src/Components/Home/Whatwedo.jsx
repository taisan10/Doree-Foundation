// // src/components/WhatWeDoSection.jsx
// import { PrimaryButton } from "../UI/UiComponent";

// const cardData = [
//   {
//     title: "Education",
//     gif: "/GIf/Education.png", // Replace with actual gif path
//     description:
//       "Ensuring that children go to school and complete their education.",
//     button: "Read More",
//     borderColor: "border-pink-500",
//   },
//   {
//     title: "Health & Nutrition",
//     gif: "/GIf/Health.png",
//     description:
//       "Providing nutritious meals and health support to growing children.",
//     button: "Read More",
//     borderColor: "border-green-500",
//   },
//   {
//     title: "Safety & Protection",
//     gif: "/GIf/Safety1.png",
//     description:
//       "Creating safe environments and protecting children from harm.",
//     button: "Read More",
//     borderColor: "border-blue-500",
//   },
//   {
//     title: "Child Participation",
//     gif: "/GIf/Children.png",
//     description:
//       "Empowering children to express themselves and be part of decisions.",
//     button: "Read More",
//     borderColor: "border-yellow-500",
//   },
// ];

// export default function WhatWeDoSection() {
//   return (
//     <section className="bg-orange-300 py-12 px-6 lg:px-20">
//       <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//         What We Do
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className={`bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:-translate-y-2 border-b-2 ${card.borderColor}`}
//           >
//             <div className="relative group">
//               <img
//                 src={card.gif}
//                 alt={card.title}
//                 className="w-full h-48 object-cover transition-transform duration-500 group-hover:-translate-y-2"
//               />
//               <h3 className="absolute bottom-2 left-4 text-xl font-semibold text-white bg-black/50 px-3 py-1 rounded group-hover:-translate-y-2 transition duration-500">
//                 {card.title}
//               </h3>
//             </div>

//             <div className="p-6">
//               <p className="text-gray-700 mb-4">{card.description}</p>
//               <PrimaryButton href="/what-we-do">{card.button}</PrimaryButton>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }























import { PrimaryButton } from "../UI/UiComponent";

const cardData = [
  {
    title: "Education",
    gif: "/GIf/Education.png",
    description:
      "Ensuring that children go to school and complete their education.",
    button: "Read More",
    borderColor: "border-pink-500",
  },
  {
    title: "Health & Nutrition",
    gif: "/GIf/Health.png",
    description:
      "Providing nutritious meals and health support to growing children.",
    button: "Read More",
    borderColor: "border-green-500",
  },
  {
    title: "Safety & Protection",
    gif: "/GIf/Safety1.png",
    description:
      "Creating safe environments and protecting children from harm.",
    button: "Read More",
    borderColor: "border-blue-500",
  },
  {
    title: "Child Participation",
    gif: "/GIf/Children.png",
    description:
      "Empowering children to express themselves and be part of decisions.",
    button: "Read More",
    borderColor: "border-yellow-500",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-orange-100 py-12 px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        What We Do
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`group relative bg-white rounded-xl overflow-hidden shadow-lg border-b-4 ${card.borderColor}`}
          >
            {/* Image + Title */}
            <div className="relative z-10 transition-all duration-500 group-hover:-translate-y-72">
              <img
                src={card.gif}
                alt={card.title}
                className="w-full h-68 object-cover"
              />
              <h3 className="absolute bottom-2 left-4 text-xl  font-semibold text-white bg-black/50 px-3 py-1 rounded">
                {card.title}
              </h3>
            </div>

            {/* Hidden Content Reveal */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-white z-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500">
              <p className="text-gray-700 mb-4">{card.description}</p>
              <PrimaryButton href="/what-we-do" >{card.button}</PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}