import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { useEffect } from "react"
import "swiper/css"
import "swiper/css/navigation"
import Button from "../Button/Button"
import ProjectCard from "../ProjectCard/ProjectCard"
import projectImg1 from "../../assets/Projects/project1.png"
import projectImg2 from "../../assets/Projects/project2.png"
import projectImg3 from "../../assets/Projects/project3.png"
import projectImg4 from "../../assets/Projects/project4.png"

const Works = () => {
  const projectList = [
    {
      name: "Mobile App for Enhanced Fitness",
      category: "Mobile App Development",
      month: "March",
      year: 2022,
      description:
        "Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience.",
      img: projectImg1,
    },
    {
      name: "Modern Corporate Website",
      category: "Web Design",
      month: "April",
      year: 2022,
      description:
        "Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices.",
      img: projectImg2,
    },
    {
      name: "Digital Marketing Success Story",
      category: "Digital Marketing",
      month: "May",
      year: 2022,
      description:
        "Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads experiences.",
      img: projectImg3,
    },
    {
      name: "Innovative E-commerce Platform",
      category: "Web Development",
      month: "January",
      year: 2022,
      description:
        "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
      img: projectImg4,
    },
    {
      name: "Modern Corporate Website",
      category: "Web Design",
      month: "April",
      year: 2022,
      description:
        "Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices.",
      img: projectImg2,
    },
    {
      name: "Mobile App for Enhanced Fitness",
      category: "Mobile App Development",
      month: "March",
      year: 2022,
      description:
        "Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience.",
      img: projectImg1,
    },
    {
      name: "Digital Marketing Success Story",
      category: "Digital Marketing",
      month: "May",
      year: 2022,
      description:
        "Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads experiences.",
      img: projectImg3,
    },
  ]

  useEffect(() => {
    const slides = document.querySelectorAll(".swiper-slide")
    let maxHeight = 0
  
    // finding the maximum height of slides
    slides.forEach((slide) => {
      maxHeight = Math.max(maxHeight, slide.offsetHeight)
    })
    // setting the maximum height to all slides
    slides.forEach((slide) => {
      slide.style.height = `${maxHeight}px`
    })
  }, [])
  
  return (
    <div className="relative">
      <div className="container mt-18 sm:mt-20 lg:mt-24 flex flex-col md:flex-row md:items-end md:justify-between items-center gap-3">
        <div>
          <h2 className="font-yaro uppercase text-3xl sm:text-4xl lg:text-5xl font-medium text-center md:text-left text-custom-white">
            <span className="text-[#666666]">Our</span> Works
          </h2>
          <p className="font-yaro text-sm lg:text-lg mt-3 lg:max-w-full mx-auto md:mx-0 text-center md:text-left md:leading-3 text-custom-grey">
            We have developed and we can develop:
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4 justify-center items-center">
          <div className="bg-custom-faded-green p-2 rounded-full flex items-center gap-2 max-w-fit">
            <button className="button-prev-project bg-custom-green text-base lg:text-lg rounded-full w-7 h-7 flex items-center justify-center">
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <button className="button-next-project bg-custom-green text-base lg:text-lg rounded-full w-7 h-7 flex items-center justify-center">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
          <Button>
            View All Projects <i className="ri-arrow-right-line"></i>
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
          nextEl: ".button-next-project",
          prevEl: ".button-prev-project",
        }}
        breakpoints={{
          480: { slidesPerView: 1.5 },
          768: { slidesPerView: 1.8 },
          900: { slidesPerView: 2.2 },
          1024: { slidesPerView: 2.5 },
          1200: { slidesPerView: 3.3 },
          1400: { slidesPerView: 4 },
        }}
        className="mt-10 px-4"
      >
        {projectList.map((project) => (
          <SwiperSlide key={project.name} className="pb-10">
            <ProjectCard
              name={project.name}
              category={project.category}
              month={project.month}
              year={project.year}
              description={project.description}
              projectImg={project.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Works
