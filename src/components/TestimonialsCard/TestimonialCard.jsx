
const TestimonialCard = ({name, designation, dp, review, source}) => {
  const getSourceLogo = (sourceName) => {
    switch (sourceName) {
      case "twitter":
        return (
          <i className="ri-twitter-fill"></i>
        )
      case "facebook":
        return (
          <i className="ri-facebook-circle-fill"></i>
        )
      case "linkedin":
        return (
          <i className="ri-linkedin-box-fill"></i>
        )
      default:
        return (
          <i className="ri-open-source-fill"></i>
        )
    }
  }

  return (
    <div className="max-w-md w-full text-white">
      <div className="bg-custom-dark-green p-7 rounded-xl relative min-h-64 sm:min-h-60 md:min-h-56 lg:min-h-60 border-1 border-solid border-[#262626]">
        <div className="bg-custom-green flex justify-center items-center rounded-sm w-10 h-10 text-xl mb-5">{getSourceLogo(source)}</div>
        <p className="text-custom-white text-sm font-light font-sora">
          {review}
        </p>
      </div>

      <div className="mt-4 pl-3 flex items-center gap-3">
        <img
          src={dp}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-base text-custom-white font-light">{name}</h3>
          <p className="text-custom-grey font-light text-sm">{designation}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
