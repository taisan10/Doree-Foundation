export default function InspirationSection() {
  return (
    <section className=" py-14 px-6 md:px-16 ">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#154c79]">
        Inspiration - The story of Hope
      </h2>

      <div className="w-30 sm:w-40 md:w-45 h-[3px] bg-orange-500 mt-2 mb-10" />

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* IMAGE */}
        <div className="border-[6px] border-orange-300 rounded-xl overflow-hidden">
          <img
            src="/HeroSection/Hero1.png"
            alt="Inspiration"
            className="w-full object-cover"   
          />
        </div>

        {/* TEXT AREA */}
        <div className="bg-transparent">
          <div className="border-t border-orange-500  pt-6 pb-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta asperiores voluptatem corrupti pariatur doloremque impedit, magni eius quis itaque dolore molestiae, commodi maiores recusandae dolorem nesciunt sint, dolor quam labore! Explicabo quam earum fugiat maiores ratione at voluptatibus beatae soluta necessitatibus error. In inventore autem incidunt officiis distinctio dolore magni fugiat molestiae ducimus ad porro obcaecati pariatur perferendis voluptates deserunt mollitia sapiente odio.
            </p>
          </div>

          <div className="border-t border-orange-500" />
        </div>
      </div>
    </section>
  );
}
