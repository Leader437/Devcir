import "./Portfolio.css"
import Hero from "../../components/Hero/Hero"
import InquiryForm from "../../components/InquiryForm/InquiryForm"
import PortfolioWorks from "../../components/PortfolioWorks/PortfolioWorks"
import UpcomingProjects from "../../components/UpcomingProjects/UpcomingProjects"

const Portfolio = () => {
  return (
    <>
      <Hero />
      <div className="eclipse_container_2">
        <PortfolioWorks />
        <UpcomingProjects />
      </div>
      <InquiryForm />
    </>
  )
}

export default Portfolio