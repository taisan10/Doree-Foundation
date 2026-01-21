export default function VisionMission() {
  return (
    <section className="w-full max-w-7xl mx-auto py-14 px-6 lg:px-10 place-items-center lg:-mt-20">
 <div className="text-left  mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
      Our Vision & Our Mission 
    </h2>
    <div className="w-full h-[3px] bg-orange-400  mt-3 rounded-full" />
  </div>
      {/* ROW 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 sm:mb-0 w-85 sm:w-110 sm:w-full">

        {/* LEFT — TEXT */}
        <div className="flex flex-col justify-center   p-10 h-80 sm:h-full">
          <h2 className="text-3xl font-bold text-left text-blue-900">
            Our Vision
          </h2>

          <p className="text-gray-800 text-lg mt-4 leading-relaxed text-center lg:text-left">
            Build a world in which every child has the right to survival,
            protection,
             development, and participation.
          </p>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative h-96">
  <img
    src="/About/VisionMission/Our Vision.jpg"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
    {Array.from({ length: 24 }).map((_, i) => (
      <div
        key={i}
        className={`w-[57px] lg:w-[90px] h-[90px] 
          ${i % 2 === 0 ? "bg-gray-200/30" : "bg-orange-200/30 "}
        `}
      />
    ))}
  </div>
</div>



      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-85 sm:w-110 sm:w-full">

        {/* LEFT — IMAGE */}
        <div className="h-96 order-2 sm:order-1">
          <img
            src="/About/VisionMission/Our Mission.jpg"
            alt="Mission"
             className="w-110 sm:w-full h-90 sm:h-full object-cover"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="flex flex-col order-1 justify-center bg-b00 p-10 h-80 sm:h-full">
          <h2 className="text-3xl font-bold text-center lg:text-left text-blue-900">
            Our Mission
          </h2>

          <p className="text-gray-800 text-lg mt-4 leading-relaxed text-center lg:text-left">
            To inspire breakthroughs in the way the world treats children,
            and to achieve immediate and lasting change in their lives.
          </p>
        </div>
      </div>
      
    </section>
  );
}
