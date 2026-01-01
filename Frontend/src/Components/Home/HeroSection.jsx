// src/components/HomeCarousel.jsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function HomeCarousel() {
  const images = [
    "/HeroSection/1.jpg",
    "/HeroSection/2.jpg",
    "/HeroSection/3.jpg",
    "/HeroSection/4.jpg",
    "/HeroSection/5.jpg",
    "/HeroSection/6.jpg",
   
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
  
<div className="relative w-screen mx-auto mt- overflow-hidden">
  <div
    className="flex  transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${current * 100}vw)` }}
  >
    {images.map((src, index) => (
      <div
        key={index}
        className="w-screen h-[560px] bg-black bg-center bg-no-repeat bg-cover flex-shrink-0"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
    ))}
  </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
  onClick={() => setCurrent(prev => (prev - 1 + images.length) % images.length)}
  className="absolute top-1/2 left-5 -translate-y-1/2 
             w-20 h-20 bg-white/70 backdrop-blur-md shadow 
             rounded-full flex items-center justify-center 
             hover:bg-white "
>
  <ChevronLeft className="text-orange-500 lg:w-14 lg:h-17" />
</button>


      <button
  onClick={() => setCurrent(prev => (prev + 1) % images.length)}
  className="absolute top-1/2 right-8 -translate-y-1/2 
             w-20 h-20 bg-white/70 backdrop-blur-md shadow 
             rounded-full flex items-center justify-center 
             hover:bg-white"
>
  <ChevronRight className="text-orange-500  lg:w-14 lg:h-17" />
</button>
    </div>
   
  );
}



