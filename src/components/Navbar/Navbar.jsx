import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import Button from "../Button/Button";
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
  }

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

  const serviceItem = ({name, description, logo}) => {
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
          className={`bg-custom-dark-green fixed lg:relative top-0 left-0 bottom-0 right-0 md:block transition-transform ${
            showMenu ? "-translate-x-0" : "-translate-x-full"
          } lg:-translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row gap-5 lg:gap-6 pl-7 md:pl-13 lg:pl-0 mt-24 lg:mt-0 text-white text-md lg:text-sm font-yaro font-medium">
            <li className="relative group cursor-pointer transition-colors hover:text-custom-green">
              <button onClick={toggleServiceDetail}>
                <span>Services</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              <div className="lg:absolute top-[200%] left-[-100px] pt-1 pl-2 lg:p-6 lg:bg-custom-dark-green lg:border-1 lg:border-solid lg:border-custom-contrast-green lg:rounded-2xl lg:w-[450px] hidden group-hover:block service-details">
                <h5 className="font-sora uppercase text-xs text-custom-white mb-2 hidden lg:block">
                  List of Services
                </h5>
                <div className="lg:flex lg:flex-wrap gap-y-2 gap-x-10">
                  {services.map((service, index) => (
                    <div key={index} className="py-2">
                      {serviceItem(service)}
                    </div>
                  ))}
                </div>
              </div>
            </li>
            <li className="cursor-pointer transition-colors hover:text-custom-green">
              <button>
                <span>Offers</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>
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
