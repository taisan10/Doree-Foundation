export default function VisionMission() {
  return (
    <section className="w-full max-w-7xl mx-auto py-14 px-6 lg:px-10">

      {/* ROW 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 sm:mb-0">

        {/* LEFT — TEXT */}
        <div className="flex flex-col justify-center bg-purple-200 p-10 ">
          <h2 className="text-3xl font-bold text-center lg:text-left">
            Our Vision
          </h2>

          <p className="text-gray-800 text-lg mt-4 leading-relaxed text-center lg:text-left">
            Build a world in which every child has the right to survival,
            protection, development, and participation.
          </p>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="h-96">
          <img
            src="/About/VisionMission/Our Vision.jpg"
            alt="Vision"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2">

        {/* LEFT — IMAGE */}
        <div className="h-96">
          <img
            src="/About/VisionMission/Our Mission.jpg"
            alt="Mission"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="flex flex-col justify-center bg-pink-200 p-10">
          <h2 className="text-3xl font-bold text-center lg:text-left">
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
