import heroIllustration from "../../assets/home-hero-illustration.png";
import sLogo from "../../assets/s-logo.svg";
import Button2 from "../Button2/Button2.jsx";
import Button3 from "../Button3/Button3.jsx";

const ServiceCard = ({ title }) => (
  <div className="bg-custom-dark-green flex items-center justify-center border-1 border-solid border-custom-green text-white py-4 px-3 rounded-lg z-10 transition duration-300 hover:shadow-[0_0_15px_2px_#00FF79] cursor-pointer">
    <h3 className="text-sm font-normal text-center">{title}</h3>
  </div>
);

const Hero = () => {
  return (
    <div className="container">
      <div className="">
        <div className="rounded-2xl rounded-b-none lg:rounded-br-2xl bg-gradient-to-b from-[#0C512D] to-[#0DA25433] px-3 sm:px-4 md:px-5 lg:px-7 pt-12 pb-20">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-12 lg:gap-16">
            <div className="max-w-full text-center lg:text-left">
              <h1 className="font-yaro font-bold text-3xl md:text-4xl mb-6 pb-2 max-w-fit mx-auto lg:mx-0 border-b-[1.5px] border-custom-white ">
                iNNOVATIVE WEB APPS
                <br />
                DESIGN & DEVELOPMENT
              </h1>
              <p className="font-sora font-light text-sm md:text-[16px] xl:text-lg text-custom-grey mb-8 md:max-w-[80%] mx-auto lg:max-w-[95%] lg:mx-0">
                From concept to launch, our team creates web apps that enhance
                user experience, boost engagement, and drive results for
                businesses like yours.
              </p>
              <div className="flex flex-col max-w-[70%] mx-auto lg:mx-0 sm:flex-row gap-4 justify-center lg:justify-start">
                <Button2 btn_text="Learn More" />
                <Button3 btn_text="Book a Service" />
              </div>
            </div>
            <div className="w-[85%] sm:w-[70%] md:w-1/2 lg:w-[80%] mx-auto">
              <img
                src={heroIllustration}
                alt="tech illustrations"
                className="w-full"
              />
            </div>
          </div>
        </div>

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
              <ServiceCard title="Web Apps Design & Development" />
              <ServiceCard title="Mobile Apps Design & Development" />
              <ServiceCard title="Website Design & Development" />
              <ServiceCard title="AI Development, Consultation & Integration" />
              <ServiceCard title="CMS Development & Customization" />
              <ServiceCard title="Systems Development & Implementation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
