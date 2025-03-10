import Hero from "../../components/Hero/Hero.jsx";
import Partners from "../../components/Partners/Partners.jsx";
import Services from "../../components/Services/Services.jsx";
import "./Home.css";

const home = () => {
  return (
    <>
      <Hero />
      <div className="min-h-[400dvh] eclipse_container">
        <Partners/>
        <Services/>
      </div>
    </>
  );
};

export default home;