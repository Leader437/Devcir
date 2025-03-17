
const UpcomingProjectCard = ({
  name,
  category,
  description,
  month,
  year,
  icon,
}) => {
  return (
    <div className="relative w-full bg-custom-contrast-green rounded-2xl overflow-hidden p-4 md:p-8 max-w-md lg:max-w-[48%]">
      <div className="flex items-center gap-4 mb-6">
        <div className="rounded-[50%] max-w-fit p-3 bg-[linear-gradient(137.25deg,#000000_-17.15%,rgba(231,231,231,0.6875)_17.46%,rgba(255,255,255,0.34139)_44.62%,rgba(255,255,255,0.222774)_61.76%,#666666_117.91%)]">
          <img src={icon} alt="project icon" className="max-w-full w-6 h-6" />
        </div>
        <h1 className="text-base sm:text-lg 2xl:text-xl font-sora font-medium">
          {name}
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row mb-6 border-2 border-custom-grey rounded-lg overflow-hidden">
        <div className="flex-1">
          <div className="p-3 md:p-4">
            <p className="text-custom-grey text-xs sm:text-sm mb-1">Category</p>
            <p className="text-white text-sm sm:text-base">{category}</p>
          </div>
        </div>
        <div className="sm:border-l border-[#1A5D3D] flex-1">
          <div className="p-3 md:p-4">
            <p className="text-custom-grey text-xs sm:text-sm mb-1">Expected Completion</p>
            <p className="text-white text-sm sm:text-base">{month} {year}</p>
          </div>
        </div>
      </div>

      <div className="bg-custom-dark-green rounded-[12px] p-4 md:p-6">
        <h2 className="text-custom-white text-base md:text-xl mb-2">Project Description</h2>
        <p className="text-custom-grey text-sm font-light">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-[linear-gradient(rgba(15,15,15,0)_0%,#0F0F0F_100%)]"></div>
    </div>
  );
};

export default UpcomingProjectCard;
