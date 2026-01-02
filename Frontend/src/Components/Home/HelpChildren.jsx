import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PrimaryButton } from "./../UI/UiComponent";
import { useTranslation } from "react-i18next";

const images = [
  {
    img: "/HelpChildren/Computer.jpg",
    title: "बच्चों की शिक्षा का समर्थन करें",
    subtitle: "उन्हें स्कूल में बनाए रखने में मदद करें",
  },

  {
  img: "/HelpChildren/Silayi.jpg",
    title: "बच्चों को वापस स्कूल भेजें",
    subtitle: "उनकी सीखने की यात्रा का समर्थन करें",
  },
  {
    img: "/HelpChildren/Plant.jpg",
    title: "उम्मीद की एक डोर",
    subtitle: "आशा और अवसर प्रदान करें",
  },
  {
    img: "/HelpChildren/Theory.jpg",
    title: "बच्चों के लिए उज्ज्वल भविष्य",
    subtitle: "स्थायी प्रभाव पैदा करें",
  },
  
];
   
export default function ChildrenSupportSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    const maxIndex = isMobile ? images.length - 1 : images.length - 2;
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="w-full  py-12 px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-4   gap-10">
        {/* LEFT SIDE – 25% */}
        <div className="col-span-1 lg:pr-6 lg:-mr-50 lg:mt-20 ">
          <h3 className="text-3xl font-bold text-gray-900">
            {t("childrenSupport.headline")}
          </h3>

          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            {t("childrenSupport.paragraph")}
          </p>

          <PrimaryButton className="mt-6 text-white px-6 py-4 rounded-lg font-semibold shadow-md rounded-full">
            {t("childrenSupport.cta")}
          </PrimaryButton>
        </div>

        {/* RIGHT SIDE – 75% */}
        <div className="col-span-1 lg:col-span-3 lg:ml-50 -mr-10 relative  ">
          {/* ARROWS – Same Your Position */}
          <button
            onClick={prevSlide}
            className="absolute top-40 -translate-y-1/2 left-[-24px] z-10 
                       bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center 
                       hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-8 h-8 text-orange-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 helpchildren-ChevronRight -translate-y-1/2 left-[-24px] z-10 
                       bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center 
                       hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-8 h-8 text-orange-600" />
          </button>

          {/* IMAGE SLIDER (2 items visible) */}
          <div className="overflow-hidden  ">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out  "
              style={{
                transform: `translateX(-${index * (isMobile ? 90 : 50)}%)`,
              }}
            >
              {images.map((item, i) => (
                <div
                  key={i}
                  className=" min-w-[85%] md:min-w-[47%]  helpchildren-width bg-white rounded-lg shadow-md overflow-hidden border-b-4 border-orange-400"
                >
                  <img
                    src={item.img}
                    className="w-full h-90 object-cover   helpchildren-height"
                    alt="child"
                  />

                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 flex items-center justify-center">
                      {item.title}
                    </h4>
                    <h6 className="text-sm text-gray-600 mt-1 flex items-center justify-center">
                      {item.subtitle}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
