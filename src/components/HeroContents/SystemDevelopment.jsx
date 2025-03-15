import heroIllustration from "../../assets/Hero Illustrations/home-hero-illustration6.png";
import Button2 from "../Button2/Button2.jsx";
import Button3 from "../Button3/Button3.jsx";

const SystemDevelopment = () => {
  return (
    <div className="rounded-2xl rounded-b-none lg:rounded-br-2xl bg-gradient-to-b from-[#0C512D] to-[#0DA25433] px-3 sm:px-4 md:px-5 lg:px-7 pt-12 pb-20">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-12 lg:gap-16">
        <div className="max-w-full text-center lg:text-left">
          <h1 className="font-yaro font-bold text-2xl sm:text-3xl md:text-4xl mb-6 pb-2 max-w-fit mx-auto lg:mx-0 border-b-[1.5px] border-custom-white ">
          SYSTEMS DEVELOPMENT & <br/> IMPLEMENTATION SERVICES
          </h1>
          <p className="font-sora font-light text-sm md:text-[16px] xl:text-lg text-custom-grey mb-8 md:max-w-[80%] mx-auto lg:max-w-[95%] lg:mx-0">
          Custom system development and implementation to simplify workflows, amplify performance, and fuel business excellence. Expert development and implementation of tailored systems.
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
  );
};

export default SystemDevelopment;
