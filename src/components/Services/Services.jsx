import Button from "../Button/Button";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./Services.css";
import serviceDetailIcon1 from "../../assets/serviceDetailIcon1.svg";

const servicesList = [
  {
    name: "Website Development",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "Mobile App Development",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "Web App Development",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "CMS",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "AI Integration",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "AI Solution Consultation",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "Custom LLMS Development",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "ERP",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "Corporate Software For Med & Tech",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "Real Estate",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "EdTech",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "Services & Finance Businesses",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "AI Model Training",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "CRM",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "Data Engineering",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "UX/UI Designs",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "AI Enhancements & Custom Requests",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "Web Development Stacks",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "AI & ML Stacks",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "CMS Stacks",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "Chatbots",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "CRMs, ERPs, POS, ISP Stacks",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "Mobile App Stacks",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "PWA & MVP Stacks",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
  {
    name: "IMS",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go. Our team of skilled developers builds feature-rich and intuitive apps for both Android and iOS platforms.",
    price: 2500,
  },
];

const Services = () => {
  const showServiceDetails = (e, show) => {
    const target = e.currentTarget.querySelector(".service-detail-container");
    if (target) {
      target.classList.toggle("hidden", !show);
    }
  };

  return (
    <div className="container mt-18 sm:mt-20 lg:mt-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between items-center gap-3">
        <div>
          <h2 className="font-yaro uppercase text-3xl sm:text-4xl lg:text-5xl font-medium text-center md:text-left text-custom-white">
            <span className="text-[#666666]">Our</span> Services
          </h2>
          <p className="font-yaro text-sm lg:text-lg mt-3 lg:max-w-full mx-auto md:mx-0 text-center md:text-left md:leading-3 text-custom-grey">
            We can provide various services
          </p>
        </div>
        <Button>
          View All Testimonials <i className="ri-arrow-right-line"></i>
        </Button>
      </div>
      <div className="bg-custom-dark-green rounded-xl p-5 mt-10 border-1 border-solid border-custom-green flex flex-wrap gap-x-1 gap-y-3 justify-between">
        {servicesList.map((service, i) => {
          return (
            <div
              className="relative w-full lg:w-fit text-center text-custom-white text-xs font-yaro font-bold bg-custom-contrast-green rounded-lg p-2 hover:bg-custom-green cursor-pointer"
              key={i}
              onMouseOver={(e) => showServiceDetails(e, true)}
              onMouseOut={(e) => showServiceDetails(e, false)}
            >
              {service.name}
              <ServiceDetail
                icon={serviceDetailIcon1}
                name={service.name}
                desc={service.description}
                price={service.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
