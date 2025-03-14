import Hero from "../../components/Hero/Hero.jsx";
import InquiryForm from "../../components/InquiryForm/InquiryForm.jsx";
import Partners from "../../components/Partners/Partners.jsx";
import Services from "../../components/Services/Services.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Works from "../../components/Works/Works.jsx";
import "./Home.css";

const home = () => {
  return (
    <>
      <Hero />
      <div className=" eclipse_container">
        <Partners/>
        <Services/>
        <Works/>
        <Testimonials/>
      </div>
      <InquiryForm/>
    </>
  );
};

export default home;