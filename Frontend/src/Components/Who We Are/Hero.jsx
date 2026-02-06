export default function EducationHero() {
  return (
    <section className="w-full bg-[#FFF9F1] text-[#131271]">
      {/* TEXT CONTENT */}
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-10  QW890-9]\text-center">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          Strengthening Education for Every Child
        </h1>

        {/* divider */}
        <div className="w-174 h-[2px] bg-orange-400 my-6" />

        <p className="text-base md:text-lg text-[#131271]/80 leading-relaxed">
          Education is a fundamental right, yet millions of children in India 
          continue to face barriers to learning. We work to create safe, 
          inclusive, and empowering educational environments that help children 
          stay in school and build a brighter fuutre. 
          
         
        </p>

        <h2 className="mt-10 text-xl md:text-2xl font-medium">
         <b> Enabling access, equity, and quality learning opportunities </b>
        </h2>
      </div>

      {/* IMAGE */}
      <div className="w-full   mx-auto">
        <img
          src="/Whose/Hero.jpg"
          alt="Education initiative with children"
          className="w-full h-[320px] md:h-[520px] object-cover"
        /> 
      </div>
    </section>
  );
}
