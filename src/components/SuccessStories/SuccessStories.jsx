import successIcon1 from "../../assets/Success Stories/icon1.svg";
import successIcon2 from "../../assets/Success Stories/icon2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const caseStudies = [
  {
    title: "ABC Tech Solutions",
    categories: ["E-commerce", "Web Design & Development"],
    challenge:
      "ABC Enterprises approached us with a desire to revamp their outdated website and create a more user-friendly and visually appealing platform. They sought to improve user engagement and increase online sales.",
    solution:
      "Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout. Additionally, we integrated an efficient checkout process and optimized the site for search engines.",
      icon: successIcon1,
  },
  {
    title: "Fitness Tracker App",
    categories: ["Health & Fitness", "Mobile App Development"],
    challenge:
      "Our client aimed to create an all-in-one fitness tracking app to cater to health enthusiasts and fitness professionals. They wanted a seamless user interface, real-time data tracking, and social sharing features.",
    solution:
      "Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media platforms. We integrated an efficient checkout process and optimized the site for search engines.",
      icon: successIcon2,
  },
  {
    title: "Fitness Tracker App",
    categories: ["Health & Fitness", "Mobile App Development"],
    challenge:
      "Our client aimed to create an all-in-one fitness tracking app to cater to health enthusiasts and fitness professionals. They wanted a seamless user interface, real-time data tracking, and social sharing features.",
    solution:
      "Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media platforms. We integrated an efficient checkout process and optimized the site for search engines.",
      icon: successIcon1,
  },
  {
    title: "Fitness Tracker App",
    categories: ["Health & Fitness", "Mobile App Development"],
    challenge:
      "Our client aimed to create an all-in-one fitness tracking app to cater to health enthusiasts and fitness professionals. They wanted a seamless user interface, real-time data tracking, and social sharing features.",
    solution:
      "Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals, track their progress, and share achievements on social media platforms. We integrated an efficient checkout process and optimized the site for search engines.",
      icon: successIcon2,
  },
];

const SuccessStories = () => {
  return (
    <div className="container mt-10 pt-18 sm:pt-20 lg:pt-24">
      <div className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-9">
        <h1 className="font-yaro uppercase text-3xl sm:text-4xl lg:text-5xl font-medium text-center md:text-left text-custom-white">
          Success Stories
        </h1>
        <p className="font-sora text-sm lg:text-lg max-w-[90%] md:max-w-[80%] mx-auto text-center text-custom-grey">
          At DEVCIR, our success is defined by the achievements of our valued
          clients. We take immense pride in the transformative impact our
          digital solutions have had on their businesses. Here are some
          inspiring success stories that highlight the outcomes of our
          collaborative efforts
        </p>
      </div>
      <div className="w-full container mx-auto mt-10 px-4 lg:px-20 pt-12 lg:pt-0 relative md:min-h-[100dvh]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".button-next-success",
            prevEl: ".button-prev-success",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {caseStudies.map((study, index) => (
            <SwiperSlide key={index}>
              <div className="bg-custom-green p-2 md:p-4 lg:p-6 rounded-2xl text-white flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className="rounded-[50%] max-w-fit p-3 bg-[linear-gradient(137.25deg,#000000_-17.15%,rgba(231,231,231,0.6875)_17.46%,rgba(255,255,255,0.34139)_44.62%,rgba(255,255,255,0.222774)_61.76%,#666666_117.91%)] border-1 border-solid border-slate-600">
                    <img
                      src={study.icon}
                      alt="project icon"
                      className="max-w-full w-4 h-4 md:w-6 md:h-6"
                    />
                  </div>
                  <h1 className="text-base sm:text-lg 2xl:text-xl font-sora font-medium">
                    {study.title}
                  </h1>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {study.categories.map((category, i) => (
                    <div
                    key={i}
                    className="flex items-center gap-1.5 md:gap-2.5 border-1 border-solid border-custom-dark-green text-white pl-0.5 pr-2 py-0.5 md:pl-1 md:pr-4 md:py-1 rounded-full"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-custom-dark-green">
                    <i className="ri-briefcase-line"></i>
                    </div>
                    <span className="text-xs md:text-sm font-light">{category}</span>
                  </div>
                  ))}
                </div>
                <div className="bg-custom-dark-green mb-3 px-4 py-6 rounded-xl text-sm md:h-[650px] lg:h-[610px] xl:h-[500px]">
                  <h3 className="text-base md:text-lg font-semibold">Challenge</h3>
                  <p className="text-custom-grey text-xs md:text-base font-light mt-2">{study.challenge}</p>
                  <h3 className="text-base md:text-lg font-semibold mt-4">Solution</h3>
                  <p className="text-custom-grey text-xs md:text-base font-light mt-2">{study.solution}</p>
                  <button className="mt-4 text-white underline">
                    Read Full Story
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="button-prev-success absolute top-0 left-0 bg-custom-contrast-green text-base xl:text-lg rounded-full w-12 h-8 flex items-center justify-center">
          <i className="ri-arrow-left-line"></i>
        </button>
        <button className="button-next-success absolute top-0 right-0 bg-custom-contrast-green text-base xl:text-lg rounded-full w-12 h-8 flex items-center justify-center">
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;
