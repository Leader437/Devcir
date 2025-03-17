import projectIcon1 from "../../assets/Upcoming Projects/icon1.svg"
import projectIcon2 from "../../assets/Upcoming Projects/icon2.svg";
import UpcomingProjectCard from "../UpcomingProjectCard/UpcomingProjectCard";

const UpcomingProjects = () => {
  const upcomingProjectList = [
      {
        name: "Healthcare Platform Enhancement",
        category: "Web Development",
        month: "May",
        year: 2025,
        description: "We are partnering with a dynamic marketing agency to develop an AI-driven marketing automation platform. This cutting-edge solution will empower businesses to optimize their marketing efforts through data-driven insights, personalized customer interactions, and automated campaign management. The project promises to revolutionize the digital marketing landscape and drive exceptional results for businesses of all sizes.",
        icon: projectIcon1,
      },
      {
        name: "AI-Driven Marketing Automation",
        category: "Digital Marketing",
        month: "April",
        year: 2025,
        description: "We are partnering with a dynamic marketing agency to develop an AI-driven marketing automation platform. This cutting-edge solution will empower businesses to optimize their marketing efforts through data-driven insights, personalized customer interactions, and automated campaign management. The project promises to revolutionize the digital marketing landscape and drive exceptional results for businesses of all sizes.",
        icon: projectIcon2,
      },
    ];

  return (
    <div className="relative container mt-18 sm:mt-20 lg:mt-24">
        <div>
            <h1 className="font-yaro uppercase text-3xl sm:text-4xl lg:text-5xl font-medium text-center md:text-left text-custom-white">Upcoming Projects</h1>
            <p className="font-sora text-sm lg:text-lg text-center md:text-left mt-3 text-custom-grey">Check out some of our upcoming projects in the table below.</p>
        </div>
        <div className="mt-10 lg:mt-14 flex flex-wrap justify-center lg:justify-between items-center gap-5 xl:gap-7">
          {upcomingProjectList.map((project, index) => (
            <UpcomingProjectCard key={index} {...project}/>
          ))}
        </div>
        <button className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-20 bg-custom-green hover:bg-custom-contrast-green transition-colors text-white px-3 py-2 md:px-6 md:py-3 text-sm rounded-full font-normal flex items-center gap-2 whitespace-nowrap">
          View All Projects <i className="ri-arrow-right-line"></i>
        </button>
    </div>
  )
}

export default UpcomingProjects