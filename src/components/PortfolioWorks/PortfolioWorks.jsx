import ProjectCard from "../ProjectCard/ProjectCard";
import projectImg1 from "../../assets/Projects/project1.png";
import projectImg2 from "../../assets/Projects/project2.png";
import projectImg3 from "../../assets/Projects/project3.png";
import projectImg4 from "../../assets/Projects/project4.png";

const PortfolioWorks = () => {
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
  ];

  return (
    <div className="container mt-10 pt-18 sm:pt-20 lg:pt-24">
      <div className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-9">
        <h1 className="font-yaro uppercase text-3xl sm:text-4xl lg:text-5xl font-medium text-center md:text-left text-custom-white">
          Our Works
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
      <div className="mt-10 lg:mt-14 flex flex-wrap justify-center lg:justify-between items-center gap-5 xl:gap-7">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            category={project.category}
            month={project.month}
            year={project.year}
            description={project.description}
            projectImg={project.img}
            width="half"
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioWorks;
