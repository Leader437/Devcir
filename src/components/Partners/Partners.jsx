import "./Partners.css";
import PartnerCard from "../PartnerCard/PartnerCard";
import clientIcon1 from "../../assets/Client Logos/clientIcon1.svg";
import clientIcon2 from "../../assets/Client Logos/clientIcon2.svg";
import clientIcon3 from "../../assets/Client Logos/clientIcon3.svg";
import clientIcon4 from "../../assets/Client Logos/clientIcon4.svg";
import clientIcon5 from "../../assets/Client Logos/clientIcon5.svg";
import clientIcon6 from "../../assets/Client Logos/clientIcon6.svg";

const partnerList = [
  {
    title: "ABC Tech Solutions",
    description:
      "A leading technology firm that trusted DEVCIR to develop their responsive website, showcasing their cutting-edge products and services.",
    Icon: clientIcon1,
  },
  {
    title: "GreenEarth Eco Store",
    description:
      "DEVCIR collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products.",
    Icon: clientIcon2,
  },
  {
    title: "HealthTech Innovations",
    description:
      "DEVCIR developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
    Icon: clientIcon3,
  },
  {
    title: "GlobalTech Solutions",
    description:
      "GlobalTech Solutions partnered with DEVCIR for a website redesign, resulting in a modern interface that elevates their online presence and their business growth.",
    Icon: clientIcon4,
  },
  {
    title: "TechGuru Inc.",
    description:
      "DEVCIR's digital marketing strategies boosted TechGuru Inc.'s online visibility and customer engagement, driving significant business growth.",
    Icon: clientIcon5,
  },
  {
    title: "ArtScape Gallery",
    description:
      "DEVCIR brought ArtScape Gallery's artistic vision to life with a visually stunning website, showcasing the work of talented artists to manage their digital presence.",
    Icon: clientIcon6,
  },
];

const Partners = () => (
  <div className="container mt-18 sm:mt-20 lg:mt-24">
    <div>
      <h2 className="font-yaro text-3xl sm:text-4xl lg:text-5xl font-medium text-center md:text-left text-custom-white">
        <span className="text-[#666666]">Our</span> Partners and Clients
      </h2>
      <p className="font-yaro text-sm lg:text-lg mt-3 sm:max-w-[70%] lg:max-w-full mx-auto md:mx-0 text-center md:text-left text-custom-grey">
        We are grateful for the opportunity to work with esteemed partners and
        clients
      </p>
    </div>
    <div className="min-h-screen mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerList.map((item, index) => (
            <PartnerCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Partners;
