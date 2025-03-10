import "./ServiceDetail.css";

const ServiceDetail = (props) => {
  const closeDetail = () => {
    const serviceDetail = document.querySelectorAll(".service-detail-container");
    serviceDetail.forEach((detail) => {
      detail.classList.add("hidden");
    })
  };
  return (
    <div className="absolute z-20 bg-custom-green text-white p-4 md:p-6 rounded-2xl max-w-full lg:max-w-77 lg:w-77 shadow-lg service-detail-container hidden">
      <button
        className="absolute text-base right-3.5 top-5 -translate-y-1/2 w-4 h-4 cursor-pointer"
        onClick={closeDetail}
      >
        <i className="ri-close-large-line"></i>
      </button>
      <div className="service-icon-container">
        <img src={props.icon} alt="Logo" className="" />
      </div>
      <h3 className="text-xl font-sora font-medium text-center my-2.5">
        {props.name}
      </h3>
      <p className="text-sm font-sora font-light text-center mt-2">
        With our Mobile App Development service, we harness the power of mobile
        technology to create cutting-edge applications that engage your
        customers on-the-go. Our team of skilled developers builds feature-rich
        and intuitive apps for both Android and iOS platforms.
      </p>
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm font-sora font-light">
          Starts at
          <br />
          Price: <span className="font-semibold">${props.price}</span>
        </p>
        <div className="flex justify-center">
          <button className="bg-transparent text-custom-white border-1 border-solid border-custom-dark-green px-3 py-2 rounded-full flex items-center gap-2 font-semibold cursor-pointer">
            Book a Call{" "}
            <span className="bg-custom-dark-green rounded-2xl w-12 h-8 flex items-center justify-center text-lg ml-1">
              <i className="ri-arrow-right-line"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
