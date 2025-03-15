import { useState } from "react";
import sLogo from "../../assets/s-logo.svg";
import WebAppDesign from "../HeroContents/WebAppDesign.jsx";
import MobileAppDesign from "../HeroContents/MobileAppDesign.jsx";
import WebsiteDesign from "../HeroContents/WebsiteDesign.jsx";
import SystemDevelopment from "../HeroContents/SystemDevelopment.jsx";
import AiDevelopment from "../HeroContents/AiDevelopment.jsx";
import CmsDevelopment from "../HeroContents/CmsDevelopment.jsx";

const Hero = () => {
  const [activeService, setActiveService] = useState(
    "Web Apps Design & Development"
  );

  const HeroContent = () => {
    switch (activeService) {
      case "Web Apps Design & Development":
        return <WebAppDesign />;
        break;
      case "Mobile Apps Design & Development":
        return <MobileAppDesign />;
        break;
      case "Website Design & Development":
        return <WebsiteDesign />;
        break;
      case "Systems Development & Implementation":
        return <SystemDevelopment />;
        break;
      case "AI Development, Consultation & Integration":
        return <AiDevelopment />;
        break;
      case "CMS Development & Customization":
        return <CmsDevelopment />;
        break;

      default:
        return null;
        break;
    }
  };

  const ServiceCard = ({ title, onclick }) => (
    <div
      className={`bg-custom-dark-green flex items-center justify-center border-1 border-solid border-custom-green text-white py-4 px-3 rounded-lg z-10 transition duration-300 hover:shadow-[0_0_8px_2px_#00FF79] cursor-pointer ${activeService == title ? "shadow-[0_0_8px_2px_#00FF79]" : ""}`}
      onClick={onclick}
    >
      <h3 className="text-sm font-normal text-center">{title}</h3>
    </div>
  );

  return (
    <div className="container">
      <div className="">
        {HeroContent()}

        <div className="lg:flex ">
          <div className="">
            <div className="overflow-hidden w-full bg-custom-faded-green rounded-b-2xl h-full pb-10 lg:pb-0 flex flex-col items-center justify-center">
              <div className="flex justify-center gap-0 translate-x-7 mb-4">
                <div className="w-12 h-12 p-3.5 rounded-full bg-custom-green border-1 border-solid border-custom-grey shadow-black shadow flex items-center justify-center">
                  <img src={sLogo} alt="s shaped logo" />
                </div>
                <div className="w-12 h-12 p-3.5 rounded-full bg-custom-green border-1 border-solid border-custom-grey shadow-black shadow -translate-x-3 flex items-center justify-center">
                  <img src={sLogo} alt="s shaped logo" />
                </div>
                <div className="w-12 h-12 p-3.5 rounded-full bg-custom-green border-1 border-solid border-custom-grey shadow-black shadow -translate-x-6 flex items-center justify-center">
                  <img src={sLogo} alt="s shaped logo" />
                </div>
                <div className="w-12 h-12 p-3.5 rounded-full bg-custom-green border-1 border-solid border-custom-grey shadow-black shadow -translate-x-9 flex items-center justify-center">
                  <img src={sLogo} alt="s shaped logo" />
                </div>
                <div className="w-12 h-12 p-3.5 rounded-full bg-custom-green border-1 border-solid border-custom-grey shadow-black shadow -translate-x-12 flex items-center justify-center">
                  <img src={sLogo} alt="s shaped logo" />
                </div>
                <div className="w-12 h-12 p-3.5 rounded-full bg-custom-green border-1 border-solid border-custom-grey shadow-black shadow -translate-x-15 flex items-center justify-center">
                  <img src={sLogo} alt="s shaped logo" />
                </div>
              </div>
              <p className="text-sm text-center text-gray-400">
                we own the reputation among our clients
              </p>
            </div>
          </div>

          <div className="relative mt-5 lg:mt-0 lg:pl-3 lg:pt-3">
            <div className="bg-custom-faded-green w-5 h-5 absolute left-0 top-0 hidden lg:block">
              <span className="bg-[#101012] w-5 h-5 absolute left-0 top-0 rounded-tl-2xl"></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <ServiceCard
                title="Web Apps Design & Development"
                onclick={() => {
                  setActiveService("Web Apps Design & Development");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
              <ServiceCard
                title="Mobile Apps Design & Development"
                onclick={() => {
                  setActiveService("Mobile Apps Design & Development");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
              <ServiceCard
                title="Website Design & Development"
                onclick={() => {
                  setActiveService("Website Design & Development");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
              <ServiceCard
                title="AI Development, Consultation & Integration"
                onclick={() => {
                  setActiveService(
                    "AI Development, Consultation & Integration"
                  );
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
              <ServiceCard
                title="CMS Development & Customization"
                onclick={() => {
                  setActiveService("CMS Development & Customization");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
              <ServiceCard
                title="Systems Development & Implementation"
                onclick={() => {
                  setActiveService("Systems Development & Implementation");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
