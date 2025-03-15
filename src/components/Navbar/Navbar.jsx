import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import Button from "../Button/Button";
import triArrow from "../../assets/tri-arrow.svg";
import serviceLogo1 from "../../assets/Nav Services Logos/logo1.svg";
import serviceLogo2 from "../../assets/Nav Services Logos/logo2.svg";
import serviceLogo3 from "../../assets/Nav Services Logos/logo3.svg";
import serviceLogo4 from "../../assets/Nav Services Logos/logo4.svg";
import serviceLogo5 from "../../assets/Nav Services Logos/logo5.svg";
import serviceLogo6 from "../../assets/Nav Services Logos/logo6.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const toggleServiceDetail = () => {
    const serviceDetails = document.querySelector(".service-details");
    serviceDetails.classList.toggle("hidden");
  };

  const toggleOfferDetail = () => {
    const serviceDetails = document.querySelector(".offer-details");
    serviceDetails.classList.toggle("hidden");
  };

  const services = [
    {
      name: "Website Development",
      description: "Learn about your users",
      logo: serviceLogo1,
    },
    {
      name: "Website Development",
      description: "Real-time analytics user trends",
      logo: serviceLogo2,
    },
    {
      name: "Website Development",
      description: "Monitor your metrics",
      logo: serviceLogo3,
    },
    {
      name: "Website Development",
      description: "Segments with perfect target",
      logo: serviceLogo4,
    },
    {
      name: "Website Development",
      description: "Measure B2B account health",
      logo: serviceLogo5,
    },
    {
      name: "Website Development",
      description: "Surface hidden trends",
      logo: serviceLogo6,
    },
  ];

  const offers = [
    {
      name: "Convert",
      description: "Analyze conversion",
      logo: serviceLogo1,
    },
    {
      name: "Engage",
      description: "Measure Active Usage",
      logo: serviceLogo2,
    },
    {
      name: "Retain",
      description: "Find retentation drivers",
      logo: serviceLogo3,
    },
    {
      name: "Product Adoption",
      description: "Maximize all customers",
      logo: serviceLogo4,
    },
  ];

  const serviceItem = ({ name, description, logo }) => {
    return (
      <div className="flex gap-2 lg:max-w-fit">
        <div>
          <img src={logo} alt="" className="w-6 md:w-7" />
        </div>
        <div>
          <h6 className="text-[10px] md:text-[11px] text-custom-white font-yaro font-semibold">
            {name}
          </h6>
          <p className="text-[8px] md:text-[9px] text-custom-grey font-semibold">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <nav className="container fixed top-[20px] lg:left-1/2 lg:-translate-x-1/2 z-40">
      <div className="bg-custom-dark-green p-4 md:p-5  rounded-[7px] border-1 border-solid border-custom-light-grey flex justify-between items-center">
        <Link to="/" className="block z-50">
          <img src={logo} alt="main Devcir logo" className="w-20" />
        </Link>
        <div
          className={`bg-custom-dark-green fixed lg:relative top-0 left-0 bottom-0 overflow-auto lg:overflow-visible right-0 md:block transition-transform ${
            showMenu ? "-translate-x-0" : "-translate-x-full"
          } lg:-translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-6 px-7 md:px-13 lg:px-0 pb-7 lg:pb-0 mt-24 lg:mt-0 text-white text-md lg:text-sm font-yaro font-medium">
            <li className="relative group cursor-pointer transition-colors hover:text-custom-green">
              <button onClick={toggleServiceDetail}>
                <span>Services</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              <div className="lg:absolute top-full left-[-100px] pt-3 hidden group-hover:block service-details">
                <img
                  src={triArrow}
                  alt=""
                  className="ml-[110px] hidden lg:block"
                />
                <div className="pt-1 pl-2 lg:p-6 lg:bg-custom-dark-green lg:border-1 lg:border-solid lg:border-custom-contrast-green lg:rounded-2xl lg:w-[450px]">
                  <h5 className="font-sora uppercase text-xs text-custom-white mb-2 hidden lg:block">
                    List of Services
                  </h5>
                  <div className="flex flex-wrap gap-y-2 gap-x-10">
                    {services.map((service, index) => (
                      <div key={index} className="py-2">
                        {serviceItem(service)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li className="relative cursor-pointer group transition-colors hover:text-custom-green">
              <button onClick={toggleOfferDetail}>
                <span>Offers</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              <div className="lg:absolute top-[100%] left-[-100px] pt-3 hidden group-hover:block offer-details">
                <img
                  src={triArrow}
                  alt=""
                  className="ml-[110px] hidden lg:block"
                />
                <div className="lg:bg-custom-dark-green lg:border-1 lg:border-solid lg:border-custom-contrast-green rounded-3xl items-center justify-center lg:p-2 lg:w-[400px]">
                  <div className="lg:bg-custom-dark-green lg:rounded-3xl w-full text-white lg:shadow-xl">
                    <div className="grid grid-cols-2 gap-8 py-4 lg:px-4">
                      <div className="space-y-2">
                        <h2 className="text-[10px] sm:text-xs whitespace-nowrap font-sora uppercase">
                          Business Solutions
                        </h2>

                        <div className="flex flex-col gap-2">
                          {offers.map((service, index) => (
                            <div key={index} className="py-2">
                              {serviceItem(service)}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h2 className="text-[10px] sm:text-xs whitespace-nowrap font-sora tracking-wider uppercase">
                          Industry Solutions
                        </h2>

                        <div className="space-y-3">
                          <p className="text-[10px] font-sora cursor-pointer hover:text-custom-green transition-colors">
                            ECOMMERCE
                          </p>
                          <p className="text-[10px] font-sora cursor-pointer hover:text-custom-green transition-colors">
                            SAAS
                          </p>
                          <p className="text-[10px] font-sora cursor-pointer hover:text-custom-green transition-colors">
                            FINANCIAL SERVICES
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 bg-custom-green p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                      <h3 className="text-[10px] sm:text-xs font-sora uppercase mb-2 sm:mb-4">
                        Insight
                      </h3>

                      <div className="space-y-2 md:space-y-4">
                        <button className="w-full flex items-center justify-between group hover:opacity-80 transition-opacity">
                          <div className="flex items-center gap-3">
                            <i className="ri-lightbulb-flash-line"></i>
                            <span className="text-custom-dark-green text-[10px] font-semibold text-start">
                              Debugging with product analytics
                            </span>
                          </div>
                          <i className="ri-arrow-right-s-line"></i>
                        </button>

                        <button className="w-full flex items-center justify-between group hover:opacity-80 transition-opacity">
                          <div className="flex items-center gap-3">
                            <i className="ri-lightbulb-flash-line"></i>
                            <span className="text-custom-dark-green text-[10px] font-semibold text-start">
                              Why it's never too early to add product analytics
                            </span>
                          </div>
                          <i className="ri-arrow-right-s-line"></i>
                        </button>

                        <button className="w-full flex items-center justify-between group hover:opacity-80 transition-opacity">
                          <div className="flex items-center gap-3">
                            <i className="ri-lightbulb-flash-line"></i>
                            <span className="text-custom-dark-green text-[10px] font-semibold text-start">
                              Data implementation, starting with the 'why'
                            </span>
                          </div>
                          <i className="ri-arrow-right-s-line"></i>
                        </button>

                        <button className="flex items-center gap-2 text-xs hover:opacity-80 transition-opacity">
                          <span>See all</span>
                          <i className="ri-arrow-right-s-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-custom-white transition-colors hover:text-custom-green"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-custom-white transition-colors hover:text-custom-green"
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-custom-white transition-colors hover:text-custom-green"
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-custom-white transition-colors hover:text-custom-green"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li className="block lg:hidden">
              <Button>Do you have a Project?</Button>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 md:gap-5 text-custom-white z-50">
          <select
            name="Language"
            id="Language"
            className="outline-none focus:outline-none bg-custom-dark-green text-custom-white text-md lg:text-sm cursor-pointer"
          >
            <option value="En">En</option>
            <option value="fr">Fr</option>
          </select>
          <div className="hidden lg:block">
            <Button>Do you have a Project?</Button>
          </div>
          <div className="block text-xl lg:hidden" onClick={toggleMenu}>
            <i className="ri-menu-3-fill"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
