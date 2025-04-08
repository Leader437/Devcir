import "./About.css"
import Hero from "../../components/Hero/Hero"
import InquiryForm from "../../components/InquiryForm/InquiryForm"
import ServiceCategories from "../../components/ServiceCategories/ServiceCategories"
import Testimonials from "../../components/Testimonials/Testimonials"
import SuccessStories from "../../components/SuccessStories/SuccessStories"

const About = () => {
  return (
    <>
      <Hero />
      <div className="eclipse_container_2">
        <ServiceCategories />
        <Testimonials />
        <SuccessStories />
      </div>
      <InquiryForm />
    </>
  )
}

export default About