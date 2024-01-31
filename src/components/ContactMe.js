import React from "react";
import contactImg from "../Images/contactImgs.2ecc8e0e.svg";
import toast from "react-hot-toast";

const ContactMe = () => {

    const handleSubmit = (e) => {
      e.preventDefault();
      // validation logic goes here
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    if (!name || !email || !message) {
    // Show error toast for missing fields
        toast.error("Please fill in all mandatory fields.")
        return;
        }
        toast.success('Message sent successfully!');
        e.target.reset();
    }
    return (
        <div id="contact" className="text-center mt-28">
            <div className="lg:text-4xl text-3xl text-white font-bold">
            <p>CONTACT ME</p>
        </div>

        <div className="flex items-center justify-center lg:px-0 px-[20px] mt-10">
            <div className="lg:w-[50%] w-full lg:block hidden">
            <img src={contactImg} alt="contactImg" className="lg:w-[300px] ml-[20px]" />
        </div>

        <div className="lg:w-[49%] w-full  text-start">
        <form className="mb-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-white block mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full rounded-md border text-gray-200 border-gray-400 bg-transparent p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-white block  mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-400 bg-transparent text-gray-200 p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="text-white block mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Type your message here"
                className="w-full rounded-md border border-gray-400 bg-transparent text-gray-200 p-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-lime-500 text-black font-semibold py-2 px-4 rounded-md hover:bg-lime-600 mt-4" 
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;