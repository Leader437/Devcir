import "./PartnerCard.css";
import devcirIcon from "../../assets/devcirIcon.svg";

const PartnerCard = ({ title, description, Icon }) => {
  return (
    <div className="relative bg-custom-dark-green rounded-xl px-4 sm:px-6 py-10 xl:py-12 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-[#0E2E1D] partnerDiv">
      <div className="flex justify-center items-center gap-4 text-xl">
        <div className="w-20"><img src={devcirIcon} alt="Devcir Logo" className="w-full" /></div>
        <i className="ri-add-fill"></i>
        <div className="w-20"><img src={Icon} alt="Client Firm Logo" className="w-full" /></div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg text-custom-white font-sora font-medium mb-3 text-center">{title}</h3>
        <p className="text-sm text-custom-grey font-sora font-light text-center">{description}</p>
      </div>
    </div>
  );
};

export default PartnerCard;
