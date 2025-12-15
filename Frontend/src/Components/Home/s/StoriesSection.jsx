// import { useState } from "react";
// import StoryCard from "./StoryCard";
// import { storiesData } from "./storiesData";

// export default function StoriesSection() {
//   const [index, setIndex] = useState(0);

//   const prevSlide = () => setIndex(index > 0 ? index - 1 : storiesData.length - 1);
//   const nextSlide = () => setIndex(index < storiesData.length - 1 ? index + 1 : 0);

//   return (
//     <section className="relative w-full overflow-hidden py-12 bg-gray-50">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${index * 100}%)` }}
//       >
//         {storiesData.map((story) => (
//           <div key={story.id} className="flex-shrink-0 w-full flex justify-center">
//             <StoryCard story={story} />
//           </div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
//       >
//         ◀
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
//       >
//         ▶
//       </button>
//     </section>
//   );
// }
import { useState } from "react";
import StoryCard from "./StoryCard";
import { storiesData } from "./storiesData";

// Import chevron icons from lucide-react
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StoriesSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex(index > 0 ? index - 1 : storiesData.length - 1);
  const nextSlide = () =>
    setIndex(index < storiesData.length - 1 ? index + 1 : 0);

  return (
    <section className="relative w-full overflow-hidden py-12 bg-orange-100">
 <h1 className="text-4xl font-bold text-orange-500  text-center mb-8">Success Stories</h1>
     
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {storiesData.map((story) => (
          <div
            key={story.id}
            className="flex-shrink-0 w-full flex justify-center"
          >
            <StoryCard story={story} />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </section>
  );
}