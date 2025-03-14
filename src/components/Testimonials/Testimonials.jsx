import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";
import Button from "../Button/Button";
import mark from "../../assets/Client Pics/mark.png";
import sarah from "../../assets/Client Pics/sarah.png";
import lisa from "../../assets/Client Pics/lisa.png";
import michael from "../../assets/Client Pics/michael.png";
import TestimonialCard from "../TestimonialsCard/TestimonialCard";

const Testimonials = () => {
  const testimonialList = [
    {
      name: "Mark Roberts",
      designation: "Founder of GreenEarth Eco Store",
      dp: mark,
      review:
        "Working with DEVCIR was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
      source: "facebook",
    },
    {
      name: "Sarah Thompson",
      designation: "CEO of BlueBloom Fashion",
      dp: sarah,
      review:
        "DEVCIR turned our business around! Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      source: "linkedin",
    },
    {
      name: "Lisa Williams",
      designation: "Head of Product at HealthTech Innovations",
      dp: lisa,
      review:
        "The mobile app DEVCIR developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
      source: "twitter",
    },
    {
      name: "Michael Johnson",
      designation: "Marketing Manager at GlobalTech Solutions.",
      dp: michael,
      review:
        "DEVCIR transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our vision made the entire process smooth and hassle-free.",
      source: "linkedin",
    },
    {
      name: "Lisa Williams",
      designation: "Head of Product at HealthTech Innovations",
      dp: lisa,
      review:
        "The mobile app DEVCIR developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
      source: "twitter",
    },
    {
      name: "Sarah Thompson",
      designation: "CEO of BlueBloom Fashion",
      dp: sarah,
      review:
        "DEVCIR turned our business around! Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      source: "linkedin",
    },
  ];

  useEffect(() => {
    const slides = document.querySelectorAll(".swiper-slide");
    let maxHeight = 0;

    // finding the maximum height of slides
    slides.forEach((slide) => {
      maxHeight = Math.max(maxHeight, slide.offsetHeight);
    });
    // setting the maximum height to all slides
    slides.forEach((slide) => {
      slide.style.height = `${maxHeight}px`;
    });
  }, []);

  return (
    <div className="relative">
      <div className="container mt-18 sm:mt-20 lg:mt-24 flex flex-col md:flex-row md:items-end md:justify-between items-center gap-3">
        <div>
          <h2 className="font-yaro uppercase text-3xl sm:text-4xl lg:text-5xl font-medium text-center md:text-left text-custom-white">
            <span className="text-[#666666]">Our</span> Testimonials
          </h2>
          <p className="font-yaro text-sm lg:text-lg mt-3 lg:max-w-full mx-auto md:mx-0 text-center md:text-left md:leading-3 text-custom-grey">
            We our clients say about us
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4 justify-center items-center">
          <div className="bg-custom-faded-green p-2 rounded-full flex items-center gap-2 max-w-fit">
            <button className="button-prev-testimonials bg-custom-green text-base lg:text-lg rounded-full w-7 h-7 flex items-center justify-center">
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <button className="button-next-testimonials bg-custom-green text-base lg:text-lg rounded-full w-7 h-7 flex items-center justify-center">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
          <Button>
            View All Testimonials <i className="ri-arrow-right-line"></i>
          </Button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1.1}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        navigation={{
          nextEl: ".button-next-testimonials",
          prevEl: ".button-prev-testimonials",
        }}
        breakpoints={{
          480: { slidesPerView: 1.5 },
          768: { slidesPerView: 1.8 },
          900: { slidesPerView: 2.2 },
          1024: { slidesPerView: 2.5 },
          1200: { slidesPerView: 3.3 },
          1400: { slidesPerView: 4 },
        }}
        className="mt-10 px-4 relative max-h-[350px] sm:max-h-[320px]"
      >
        {testimonialList.map((testimonial) => (
          <SwiperSlide key={testimonial.name} className="pb-10">
            <TestimonialCard
              name={testimonial.name}
              designation={testimonial.designation}
              dp={testimonial.dp}
              review={testimonial.review}
              source={testimonial.source}
            />
          </SwiperSlide>
        ))}
        <div className="fade-left z-20"></div>
        <div className="fade-right z-20"></div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
