import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import starStud from "./../../assets/star-stud-icon.svg";

const ServiceCategories = () => {
  const slides = [
    {
      title: "Ai Development, Consultation & Integration",
      description:
        "DEVCIR is known to be persistent toward providing the solutions for complicated problems with a team attitude of getting things done. With over a decade of experience, we specialize in a wide range of technologies and services, ensuring that your project receives the attention it deserves.",
    },
    {
      title: "System Development & Implementation",
      description:
        "DEVCIR is known to be persistent toward providing the solutions for complicated problems with a team attitude of getting things done. With over a decade of experience, we specialize in a wide range of technologies and services, ensuring that your project receives the attention it deserves.",
    },
    {
      title: "Mobile App Development",
      description:
        "DEVCIR is known to be persistent toward providing the solutions for complicated problems with a team attitude of getting things done. With over a decade of experience, we specialize in a wide range of technologies and services, ensuring that your project receives the attention it deserves.",
    },
    {
      title: "Ai Development, Consultation & Integration",
      description:
        "DEVCIR is known to be persistent toward providing the solutions for complicated problems with a team attitude of getting things done. With over a decade of experience, we specialize in a wide range of technologies and services, ensuring that your project receives the attention it deserves.",
    },
    {
      title: "System Development & Implementation",
      description:
        "DEVCIR is known to be persistent toward providing the solutions for complicated problems with a team attitude of getting things done. With over a decade of experience, we specialize in a wide range of technologies and services, ensuring that your project receives the attention it deserves.",
    },
    {
      title: "Mobile App Development",
      description:
        "DEVCIR is known to be persistent toward providing the solutions for complicated problems with a team attitude of getting things done. With over a decade of experience, we specialize in a wide range of technologies and services, ensuring that your project receives the attention it deserves.",
    },
  ];

  return (
    <div className="container mt-10 pt-18 sm:pt-20 lg:pt-24">
      <div className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-9">
        <h1 className="font-yaro uppercase text-3xl sm:text-4xl lg:text-5xl font-medium text-center md:text-left text-custom-white">
          Categories of Services
        </h1>
        <p className="font-sora text-sm lg:text-lg max-w-[90%] md:max-w-[80%] mx-auto text-center text-custom-grey">
          <span className="text-custom-white">At DEVCIR</span>, we are committed
          to providing{" "}
          <span className="text-custom-white">
            {" "}
            exceptional digital solutions{" "}
          </span>
          tailored to suit your unique business needs. Our comprehensive service
          offerings cover a wide spectrum of{" "}
          <span className="text-custom-white">
            digital disciplines, including web design, app development, web
            development, and marketing.
          </span>
        </p>
        <button className="bg-custom-green hover:bg-custom-contrast-green transition-colors text-white px-3 py-2 md:px-6 md:py-3 text-sm rounded-full font-normal flex items-center gap-2 whitespace-nowrap">
          View All Projects <i className="ri-arrow-right-line"></i>
        </button>
      </div>
      <div className="min-h-screen mt-5 lg:mt-7 flex flex-wrap justify-center lg:justify-between items-center gap-5 xl:gap-7">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="w-full overflow-visible h-[550px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[320px] transition-all duration-500 pt-15"
            >
              {({ isActive }) => (
                <div
                  className={`relative p-6 rounded-xl text-center border transition-all duration-500 min-h-[380px] flex flex-col justify-between overflow-visible
                ${
                  isActive
                    ? "bg-[#04130F] text-white border-green-500 shadow-[0_0_20px_5px_rgba(34,197,94,0.5)] scale-105"
                    : "bg-[#04130F] text-gray-500 border-[#04130F] scale-100 blur-[2px]"
                }
                `}
                >
                  <div className="w-12 min-h-12 flex justify-center items-center mx-auto mb-4">
                    <img src={starStud} alt="" />
                  </div>
                  <h2
                    className={`text-lg font-yaro mb-3 font-bold transition-all duration-500 ${
                      isActive ? "text-green-400" : "text-gray-600"
                    }`}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className={`text-sm transition-all duration-500 ${
                      isActive ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {slide.description}
                  </p>
                  <button className="bg-custom-green max-w-fit mx-auto mt-3 text-sm text-custom-white border-1 border-solid border-custom-dark-green px-2.5 py-1.5 rounded-full flex items-center gap-2 font-medium cursor-pointer">
                    Book a Call{" "}
                    <span className="bg-custom-dark-green rounded-2xl w-12 h-8 flex items-center justify-center text-lg ml-1">
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </button>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceCategories;
