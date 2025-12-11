import { useState } from "react";
import { PrimaryButton } from "../UI/UiComponent";

const fields = [
  {
    title: "Education",
    icon: "/Icons/Education.png",
    image: "/HeroSection/Hero1.png",
    headline: "Shiksha Ki Raksha, Bhavishya Ki Raksha!",
    description:
      "From early childhood to adolescence, quality education unlocks human potential. Safe classrooms, girls’ participation, digital access — our interventions remove barriers across India.",
    button: "Know More",
  },
  {
    title: "Health",
    icon: "/Icons/Health.png",
    image: "/HeroSection/Hero3.png",
    headline: "Arogya Ki Raksha, Bhavishya Ki Raksha!",
    description:
      "We guarantee healthcare and nutrition for children through awareness drives, system strengthening, and partnerships with Health Ministry and NITI Aayog.",
    button: "Know More",
  },
  {
    title: "Resilience",
    icon: "/Icons/Resilience.png",
    image: "/HeroSection/Hero4.png",
    headline: "Building Resilience for Tomorrow",
    description:
      "Empowering children and communities to adapt and thrive through climate awareness, disaster preparedness, and emotional strength.",
    button: "Know More",
  },
  {
    title: "Livelihood",
    icon: "/Icons/Livelihood.png",
    image: "/HeroSection/Hero5.png",
    headline: "Securing Livelihoods for Families",
    description:
      "Skill development, vocational training, and placement support to uplift families and ensure sustainable income.",
    button: "Know More",
  },
  {
    title: "Protection",
    icon: "/Icons/Security.png",
    image: "/HeroSection/Hero6.png",
    headline: "Safety and Protection for Every Child",
    description:
      "We create safe spaces, prevent abuse, and advocate for child rights through legal and community-based interventions.",
    button: "Know More",
  },
  {
    title: "Humanitarian",
    icon: "/Icons/Human.png",
    image: "/HeroSection/Hero2.png",
    headline: "Humanitarian Aid with Dignity",
    description:
      "Rapid response during emergencies — food, shelter, education continuity — with dignity and care.",
    button: "Know More",
  },
];

export default function FieldsOfWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-orange-100 py-12 px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Fields of Work
      </h2>

      {/* Subtitle Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-10 relative">
        {fields.map((field, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <img
              src={field.icon}
              alt={field.title}
              className="w-16 h-16 mb-2 transition-transform group-hover:scale-110"
            />
            <span className="text-sm font-medium text-gray-700">
              {field.title}
            </span>
            {activeIndex === index && (
<div className="w-4 h-4 border-t-4 border-r-4 border-orange-500 transform rotate-135 mt-2"></div>            )}
          </div>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-xl shadow-md p-6">
        <img
          src={fields[activeIndex].image}
          alt={fields[activeIndex].title}
          className="w-full lg:w-1/2 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {fields[activeIndex].headline}
          </h3>
          <p className="text-gray-700 mb-6">{fields[activeIndex].description}</p>
          <PrimaryButton href="/fields">{fields[activeIndex].button}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}