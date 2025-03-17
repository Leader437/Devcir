const ProjectCard = ({name, category, description, month, year, projectImg, width}) => {
  return (
    <div className={`w-full bg-custom-dark-green rounded-2xl overflow-hidden p-6 min-h-[520px] ${width == 'half'? "max-w-md lg:max-w-[48%]" : "max-w-md xl:min-h-[580px]"}`}>
      {/* Image Container */}
      <div className="relative mb-10 sm:mb-14">
        <img
          src={projectImg}
          alt="Project Preview Image"
          className="w-full h-[200px] md:h-[240px] object-cover rounded-2xl"
        />
        <button className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 bg-custom-green hover:bg-custom-contrast-green transition-colors text-white px-3 py-2 md:px-6 md:py-3 text-sm rounded-full font-normal flex items-center gap-2 whitespace-nowrap">
          View Projects Details <i className="ri-arrow-right-line"></i>
        </button>
      </div>

      {/* Content */}
      <div className="text-white">
        <h2 className="text-lg 2xl:text-xl font-sora font-medium mb-4">
          {name}
        </h2>

        <div className="flex flex-col sm:flex-row gap-2 justify-between mb-4 text-xs font-sora font-light">
          <span>
            Category: {category}.
          </span>
          <span>{month} {year}</span>
        </div>

        <p className="text-custom-grey font-sora font-light text-xs md:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;