import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const stories = [
  {
    bg: "bg-orange-100",
    title: "Hope of Rope",
    desc: "Ek chhoti si madad bachchon ki zindagi badal sakti hai. Aapka support unke future ko secure karta hai.",
    thumb: "/Icons/Human2.png",
    videoId: "dQw4w9WgXcQ",
  },
  {
    bg: "bg-blue-100",
    title: "Education for All",
    desc: "Education har bacche ka adhikar hai. Hum milkar unke sapne poore kar sakte hain.",
    thumb:"/Icons/Health1.png",
    videoId: "dQw4w9WgXcQ",
  },
  {
    bg: "bg-green-100",
    title: "Bright Futures",
    desc: "Sahi mauka aur guidance se bacchon ka kal chamak sakta hai.",
    thumb: "/Icons/Education.png",
    videoId: "dQw4w9WgXcQ",
  },
  {
    bg: "bg-green-100",
    title: "Bright Futures",
    desc: "Sahi mauka aur guidance se bacchon ka kal chamak sakta hai.",
    thumb: "/Icons/Education2.png",
    videoId: "dQw4w9WgXcQ",
  },
  {
    bg: "bg-green-100",
    title: "Bright Futures",
    desc: "Sahi mauka aur guidance se bacchon ka kal chamak sakta hai.",
    thumb: "/Icons/Education1.png",
    videoId: "dQw4w9WgXcQ",
  },
  {
    bg: "bg-green-100",
    title: "Bright Futures",
    desc: "Sahi mauka aur guidance se bacchon ka kal chamak sakta hai.",
    thumb: "/Icons/Education3.png",
    videoId: "dQw4w9WgXcQ",
  },
];

export default function StoriesSection() {
  const [index, setIndex] = useState(0);
  const [openVideo, setOpenVideo] = useState(null);

  const prev = () => index > 0 && setIndex(index - 1);
  const next = () => index < stories.length - 1 && setIndex(index + 1);

  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-gray-200 text-black shadow-md w-13 h-13 rounded-full flex items-center justify-center"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-gray-200 text-black shadow-md w-13 h-13 rounded-full flex items-center justify-center"
        >
          <ChevronRight />
        </button>

        {/* Slider */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 50}%)` }}
        >
          {stories.map((item, i) => (
            <div
              key={i}
              className="min-w-[90%] md:min-w-[80%] lg:min-w-[70%] px-4"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-[500px] rounded-2xl overflow-hidden shadow-lg">

                {/* Left */}
                <div className={`${item.bg} p-10 flex flex-col justify-between`}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                  <button className="mt-6 w-max px-6 py-3 bg-orange-500 text-white rounded-full">
                    Read More
                  </button>
                </div>

                {/* Right */}
                <div className="relative bg-black">
                  <img
                    src={item.thumb}
                    alt="story"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setOpenVideo(item.videoId)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <Play className="text-orange-500" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {openVideo && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative w-[90%] max-w-4xl aspect-video bg-black">
            <button
              onClick={() => setOpenVideo(null)}
              className="absolute -top-10 right-0 text-white text-xl"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${openVideo}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
