import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

const About = () => {

  const resumePdfUrl = "https://drive.google.com/file/d/1_-oeAWBRBp8obXDK6RwuNrwxHvkiMQYK/view?usp=sharing";
  return (
    <section id="about" className="lg:mt-40 mt-32 ">
      <div className=" mx-auto text-center lg:mb-[58px] mb-[20px]">
        <h2 className="text-white lg:text-4xl text-3xl font-bold">ABOUT ME</h2>
      </div>

      <div className="max-w-[1125px] mx-auto items-center flex lg:flex-row flex-col ">
        {/* Left side content */}
        <div className="lg:w-[69%] flex flex-col items-center mx-auto  lg:px-0 px-[20px] lg:pt-0 pt-[30px]">
          <p className="text-white lg:text-[30px] font-light text-center items-center justify-center ">
            👋🏻Hello! I'm Rohan,
            <span className="lg:inline-block ml-2 mr-2 lg:border-b-2 lg:border-indigo-700 hidden lg:w-[50px] -translate-y-5 border-b border-indigo-700 ">
              &nbsp;
            </span>
            a creative and driven web developer. I thrive on turning imaginative
            ideas into digital realities, constantly seeking innovative ways to
            blend design and technology. I possess a strong foundation in
            <span className="font-bold text-indigo-700"> FRONT-END </span>
            development, as well as a keen eye for responsive design and
            user-centered interfaces.
          </p>

          <div className="flex lg:mt-10 mt-8 items-center ">
            <a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-lime-500 py-2 px-6 rounded-md text-black font-bold hover:bg-lime-600"
            download="MyResume.pdf"
          >
            Resume
          </a>
            <IoDocumentTextOutline className=" text-black font-bold text-center -ml-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;