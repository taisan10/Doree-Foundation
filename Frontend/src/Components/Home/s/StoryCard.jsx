



// import { useState, useRef, useEffect } from "react";

// export default function StoryCard({ story, active }) {
//   const [play, setPlay] = useState(false);
//   const iframeRef = useRef(null);

//   // जब active false हो (arrow से slide बदला), तो वीडियो pause कर दो
//   useEffect(() => {
//     if (iframeRef.current) {
//       const message = JSON.stringify({
//         event: "command",
//         func: active ? "playVideo" : "pauseVideo",
//         args: []
//       });
//       iframeRef.current.contentWindow.postMessage(message, "*");
//     }
//   }, [active]);

//   return (
//     <div className="flex h-[400px] md:h-[400px] lg:h-[500px] w-[90%] lg:w-[70%] rounded-xl overflow-hidden shadow-lg   success-story">
//       {/* Left Side */}
//       <div className={`flex-1 p-8 ${story.bgColor} flex flex-col justify-between`}>
//         <div>
//           <h2 className="text-3xl text-gray-800 font-bold mb-4">{story.title}</h2>
//           <p className="text-gray-700 mb-6">{story.description}</p>
//         </div>
//         <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition w-fit">
//           {story.buttonText}
//         </button>
//       </div>

//       {/* Right Side */}
//       <div className="flex-1 relative bg-black flex items-center justify-center">
//         {!play ? (
//           <div className="relative cursor-pointer" onClick={() => setPlay(true)}>
//             <img src={story.thumbnail} alt={story.title} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="bg-white rounded-full p-4 shadow-lg">
//                 <svg className="w-13 h-13 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <iframe
//             ref={iframeRef}
//             className="w-full h-full"
//             src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1&enablejsapi=1`}
//             title={story.title}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         )}
//       </div>
//     </div>
//   );
// }


import { useState, useRef, useEffect } from "react";

export default function StoryCard({ story, active }) {
  const [play, setPlay] = useState(false);
  const iframeRef = useRef(null);

  // जब active false हो (arrow से slide बदला), तो वीडियो pause कर दो
  useEffect(() => {
    if (iframeRef.current) {
      const message = JSON.stringify({
        event: "command",
        func: active ? "playVideo" : "pauseVideo",
        args: [],
      });
      iframeRef.current.contentWindow.postMessage(message, "*");
    }
  }, [active]);

  return (
    <div className="flex flex-col sm:flex-row h-110 sm:h-[400px] lg:h-[500px] w-full sm:w-[90%] lg:w-[70%] rounded-xl overflow-hidden shadow-lg success-story mx-auto">
      {/* Left Side */}
      <div
        className={`w-full sm:w-1/2 p-6 sm:p-8 ${story.bgColor} flex flex-col justify-between`}
      >
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold mb-1 md:mb-3 sm:mb-4">
            {story.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-2 md:mb-4 sm:mb-6">
            {story.description}
          </p>
        </div>
        <button className="bg-orange-500 text-white  px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-orange-600 transition w-fit">
          {story.buttonText}
        </button>
      </div>

      {/* Right Side */}
      <div className="w-full sm:w-1/2 relative bg-black flex items-center justify-center h-64 sm:h-full">
        {!play ? (
          <div
            className="relative cursor-pointer w-full h-full"
            onClick={() => setPlay(true)}
          >
            <img
              src={story.thumbnail}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <svg
                  className="w-10 h-10 sm:w-13 sm:h-13 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1&enablejsapi=1`}
            title={story.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

