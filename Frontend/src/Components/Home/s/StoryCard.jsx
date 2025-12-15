import { useState } from "react";

export default function StoryCard({ story }) {
  const [play, setPlay] = useState(false);

  return (
<>

     

    <div className="flex h-[450px] w-[90%] lg:w-[70%] rounded-xl overflow-hidden shadow-lg">
      
      {/* Left Side */}
      <div className={`flex-1 p-8 ${story.bgColor} flex flex-col justify-between`}>
        <div>
          <h2 className="text-3xl text-gray-800 font-bold mb-4">{story.title}</h2>
          <p className="text-gray-700 mb-6">{story.description}</p>
        </div>
       <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition w-fit">
  {story.buttonText}
</button>
      </div>

      {/* Right Side */}
      <div className="flex-1 relative bg-black flex items-center justify-center">
        {!play ? (
          <div className="relative cursor-pointer" onClick={() => setPlay(true)}>
            <img src={story.thumbnail} alt={story.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <svg className="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1`}
            title={story.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
      </> 
  );
}