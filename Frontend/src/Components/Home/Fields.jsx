import { useState } from "react";
import { PrimaryButton } from "../UI/UiComponent";
const fields = [
  {
    title: "शिक्षा",
    icon: "/Icons/Education.png",
    image: "/HeroSection/Hero1.png",
    headline: "शिक्षा की रक्षा, भविष्य की रक्षा!",
    description:
      "प्रारंभिक बचपन से किशोरावस्था तक, गुणवत्तापूर्ण शिक्षा मानव क्षमता को उजागर करती है। सुरक्षित कक्षाएँ, लड़कियों की भागीदारी, डिजिटल पहुँच — हमारे हस्तक्षेप पूरे भारत में बाधाओं को दूर करते हैं।",
    button: "और जानें",
  },
  {
    title: "स्वास्थ्य",
    icon: "/Icons/Health.png",
    image: "/HeroSection/Hero3.png",
    headline: "आरोग्य की रक्षा, भविष्य की रक्षा!",
    description:
      "हम बच्चों के लिए स्वास्थ्य और पोषण की गारंटी जागरूकता अभियानों, प्रणाली सुदृढ़ीकरण और स्वास्थ्य मंत्रालय व नीति आयोग के साथ साझेदारी के माध्यम से देते हैं।",
    button: "और जानें",
  },
  {
    title: "लचीलापन",
    icon: "/Icons/Resilience.png",
    image: "/HeroSection/Hero4.png",
    headline: "कल के लिए लचीलापन निर्माण",
    description:
      "बच्चों और समुदायों को जलवायु जागरूकता, आपदा तैयारी और भावनात्मक शक्ति के माध्यम से अनुकूलन और प्रगति करने के लिए सशक्त बनाना।",
    button: "और जानें",
  },
  {
    title: "जीविका",
    icon: "/Icons/Livelihood.png",
    image: "/HeroSection/Hero5.png",
    headline: "परिवारों के लिए आजीविका सुनिश्चित करना",
    description:
      "कौशल विकास, व्यावसायिक प्रशिक्षण और नियुक्ति सहयोग के माध्यम से परिवारों को ऊपर उठाना और सतत आय सुनिश्चित करना।",
    button: "और जानें",
  },
  {
    title: "संरक्षण",
    icon: "/Icons/Security.png",
    image: "/HeroSection/Hero6.png",
    headline: "हर बच्चे के लिए सुरक्षा और संरक्षण",
    description:
      "हम सुरक्षित स्थान बनाते हैं, दुर्व्यवहार रोकते हैं और कानूनी व सामुदायिक हस्तक्षेपों के माध्यम से बाल अधिकारों की वकालत करते हैं।",
    button: "और जानें",
  },
  {
    title: "मानवीय सहायता",
    icon: "/Icons/Human.png",
    image: "/HeroSection/Hero2.png",
    headline: "गरिमा के साथ मानवीय सहायता",
    description:
      "आपात स्थितियों के दौरान त्वरित प्रतिक्रिया — भोजन, आश्रय, शिक्षा की निरंतरता — गरिमा और देखभाल के साथ।",
    button: "और जानें",
  },
];


export default function FieldsOfWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-orange-100 py-12 px-6 lg:px-20 ">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 ">
        Our Fields of Work
      </h2>

      {/* Subtitle Icons */}
      <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-6 lg:gap-30 mb-10 relative  field icons-gap ">
        {fields.map((field, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <img
              src={field.icon}
              alt={field.title}
              className="w-24 h-24 mb-2 transition-transform group-hover:scale-110"
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
      <div className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-xl  shadow-md p-6">
        <img
          src={fields[activeIndex].image}
          alt={fields[activeIndex].title}
          className="w-full  h-full md:h-100  lg:h-90 lg:w-1/2 rounded-lg object-cover"
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