import "./InquiryForm.css";
import { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company:"",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-18 sm:mt-20 lg:mt-24 py-20 bg-custom-dark-green rounded-3xl inquiry-container">
      <div className="container">
        <div className="mb-14">
          <h2 className="font-yaro uppercase text-3xl sm:text-4xl lg:text-5xl font-medium text-center text-custom-white">
            <span className="text-[#666666]">Ready to</span> Transform Your
            Digital Presence?
          </h2>
          <p className="font-yaro text-sm lg:text-lg mt-3 lg:max-w-full mx-auto md:mx-0 text-center text-custom-grey">
            Take the first step towards digital success with DEVCIR by your
            side. Our team of experts is eager to craft tailored solutions that
            drive growth for your business.
          </p>
          <div className="flex flex-col justify-center items-center gap-3 mt-10">
            <span className="capitalize text-custom-white font-light text-center">
              Unlock your Digital potential today
            </span>
            <div className="flex gap-2">
              <button className="rounded-3xl bg-custom-white text-custom-dark-green text-sm lg:text-base font-light px-3 py-2.5 lg:px-4 lg:py-3">
                Get Started
              </button>
              <button className="rounded-3xl bg-custom-contrast-green text-custom-white text-sm lg:text-base font-light px-3 py-2.5 lg:px-4 lg:py-3">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
        <div className="bg-custom-dark-green w-full border-1 border-solid border-custom-light-grey rounded-xl py-12 px-4 sm:px-8 lg:py-16 xl:px-12">
          <form
            onSubmit={handleSubmit}
            className="max-w-7xl mx-auto  shadow-lg text-custom-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-y-8 xl:gap-x-8">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-normal mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="w-full px-6 py-3 font-sora font-light bg-transparent border border-custom-light-grey rounded-full focus:outline-none focus:border-custom-green transition-colors"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-normal mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="w-full px-6 py-3 font-sora font-light bg-transparent border border-custom-light-grey rounded-full focus:outline-none focus:border-custom-green transition-colors"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="phone"
                  className="block text-sm font-normal mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your Phone Number"
                  className="w-full px-6 py-3 font-sora font-light bg-transparent border border-custom-light-grey rounded-full focus:outline-none focus:border-custom-green transition-colors"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="service"
                  className="block text-sm font-normal mb-1"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-custom-dark-green font-sora font-light w-full px-6 py-3 border border-custom-light-grey rounded-full focus:outline-none focus:border-custom-green transition-colors appearance-none"
                >
                  <option value="">Select your Service</option>
                  <option value="service1">Service 1</option>
                  <option value="service2">Service 2</option>
                  <option value="service3">Service 3</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-5 top-1/2"></i>
              </div>

              <div className="relative">
                <label
                  htmlFor="name2"
                  className="block text-sm font-normal mb-1"
                >
                  Company / Organization Name
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className="w-full px-6 py-3 font-sora font-light bg-transparent border border-custom-light-grey rounded-full focus:outline-none focus:border-custom-green transition-colors"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="subject"
                  className="block text-sm font-normal mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-3 font-sora font-light bg-custom-dark-green border border-custom-light-grey rounded-full focus:outline-none focus:border-custom-green transition-colors appearance-none"
                >
                  <option value="">Select your Subject</option>
                  <option value="subject1">Subject 1</option>
                  <option value="subject2">Subject 2</option>
                  <option value="subject3">Subject 3</option>
                </select>
                <i className="ri-arrow-down-s-line absolute right-5 top-1/2"></i>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-normal mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                rows="6"
                className="w-full px-6 py-3 font-sora font-light bg-transparent border border-custom-light-grey rounded-[25px] focus:outline-none focus:border-custom-green transition-colors resize-none"
              ></textarea>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="bg-custom-green transition-colors font-sora text-white px-3 py-2 md:px-6 md:py-3 text-sm rounded-full font-normal flex items-center gap-2 whitespace-nowrap submit-btn">
                Send your Inquiry <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
