import { useState, useRef, useEffect } from "react";
import StoryCard from "./StoryCard";
import { storiesData } from "./storiesData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StoriesSection() {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef(null);

  const prevSlide = () =>
    setIndex(index > 0 ? index - 1 : storiesData.length - 1);
  const nextSlide = () =>
    setIndex(index < storiesData.length - 1 ? index + 1 : 0);

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // 20% visible required
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);


   return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-12 "
    >
       <h1 className="text-4xl font-bold text-orange-500  text-center mb-8">Success Stories</h1>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {storiesData.map((story, i) => (
          <div key={story.id} className="flex-shrink-0 w-full flex justify-center">
            <StoryCard story={story} active={i === index && inView} />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-80 md:top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-80 md:top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </section>
  );
}