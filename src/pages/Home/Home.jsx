import Hero from "../../components/Hero/Hero.jsx";
import InquiryForm from "../../components/InquiryForm/InquiryForm.jsx";
import Partners from "../../components/Partners/Partners.jsx";
import OurServices from "../../components/OurServices/OurServices.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Works from "../../components/Works/Works.jsx";
import "./Home.css";

const home = () => {
  return (
    <>
      <Hero />
      <div className="eclipse_container">
        <Partners/>
        <OurServices/>
        <Works/>
        <Testimonials/>
      </div>
      <InquiryForm/>
    </>
  );
};

export default home;