import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/logo-small.svg";

const Footer = () => {
  return (
    <footer className="">
            <div className="container py-20">
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <Link to="/" className="block">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>
        <div className="flex flex-col md:flex-row items-center gap-3">
        <span className="font-light text-xs">Follow Us On Social Media</span>
        <div className="flex items-center space-x-2">
          <Link to="/" className="w-10 h-10 flex justify-center items-center text-lg bg-custom-contrast-green rounded-full">
            <i className="ri-linkedin-box-fill"></i>
          </Link>
          <Link to="/" className="w-10 h-10 flex justify-center items-center text-lg bg-custom-contrast-green rounded-full">
            <i className="ri-instagram-line"></i>
          </Link>
          <Link to="/" className="w-10 h-10 flex justify-center items-center text-lg bg-custom-contrast-green rounded-full">
            <i className="ri-twitter-fill"></i>
          </Link>
        </div>
        </div>
      </div>

      <hr className="border-custom-light-grey mt-8 mb-10 lg:mb-12" />

      <div className="grid justify-between grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
        <div>
          <h3 className="text-sm font-medium text-custom-white mb-2">Home</h3>
          <ul className="space-y-0.5">
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Partners</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">What we do</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Our works</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Our Testimonials</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-custom-white mb-2">Services</h3>
          <ul className="space-y-0.5">
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Web Design</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Website Development</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">App Development</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Digital Marketing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-custom-white mb-2">Portfolio</h3>
          <ul className="space-y-0.5">
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">ABC Tech Solutions</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">GreenEarth Eco Store</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">HealthTech Innovations</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">GlobalTech Solutions</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">TechGuru Inc.</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-custom-white mb-2">About Us</h3>
          <ul className="space-y-0.5">
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Our Team</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Achievements</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Offers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-custom-white mb-2">Contact</h3>
          <ul className="space-y-0.5">
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Contact via email</Link></li>
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Send inquiry</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-custom-white mb-2">Blogs</h3>
          <ul className="space-y-0.5">
            <li><Link to="/" className="text-xs text-custom-grey font-light whitespace-nowrap hover:text-custom-green">Our Blogs</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 lg:mt-12 pt-8 border-t border-custom-light-grey">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-sm text-custom-grey font-light">©2024 Devcir. All Rights Reserved.</p>
          <p className="text-sm text-custom-grey font-light">Version 1.0</p>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-sm text-custom-grey font-light hover:text-custom-green">Privacy Policy</Link>
            <Link to="/" className="text-sm text-custom-grey font-light hover:text-custom-green">Terms & Conditions</Link>
            <Link to="/" className="text-sm text-custom-grey font-light hover:text-custom-green">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
