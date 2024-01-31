import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import AboutImg from "../Images/AboutImg.png";
import { Link  } from "react-scroll";

const HeroSection = () => {

  const resumePdfUrl = "https://drive.google.com/file/d/1_-oeAWBRBp8obXDK6RwuNrwxHvkiMQYK/view?usp=sharing";

  const linkedinUrl = "https://www.linkedin.com/in/Rohan4535/";
  const githubUrl = "https://github.com/ROHAN4535";
  const instagramUrl = "https://www.instagram.com/rohan_gaikwad__official/";

  return (
    <div id="herosection" className="text-white max-w-[1130px] lg:mx-auto mt-10 lg:mt-10 flex flex-col relative">
      <div className=" text-[40px] lg:text-[90px] font-bold lg:px-0 px-[20px]">
        <h1>
          CODING WITH <br></br>
        </h1>
        <p className="lg:ml-[156px] ml-[0px]"> 🔥PASSION, CREATING </p>
        <p>WITH PURPOSE</p>
      </div>

        <div className="mt-10 lg:w-[50%] w-full leading-[30px] lg:px-0 px-[20px] ">
        <p className="text-gray-400">
          Hello There ! I'm Rohan Gaikwad Frontend Developer <br></br> I'm thrill
          to showcase my passion for creating captivating <br></br>and
          functional website.
        </p>

        <div className="flex space-x-6 mt-10 items-center">
          <div className="text-black lg:text-[16px] text-[12px] bg-lime-500 lg:py-2 lg:px-4 py-1 px-2 rounded-full font-bold hover:bg-lime-600 cursor-pointer">
            <Link to="contact"  spy={true}
            smooth={true}
            offset={-100}
            duration={500}>👋🏻 Let's Talk</Link>
          </div>

          <div className="flex items-center space-x-3">
            <div className=" py-2 rounded-[100%] bg-lime-500 w-[35px] h-[35px] translate-x-6">
                <FaAngleDoubleRight className="text-black font-bold ml-2 "/>
            </div>
            <div className="w-[35px] h-[35px] rounded-[100%] py-2 border border-white">

            </div>
            <a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-500 font-semibold"
            download="MyResume.pdf"
          >
            Download CV
          </a>
          </div>
        </div>
      </div>

      <div className="lg:flex flex-col lg:absolute lg:translate-x-[620px] lg:translate-y-[450px] animate-pulse duration-200 mt-6 lg:mt-0 mb-6 lg:mb-0">
        <img
              src={AboutImg}
              alt="textImg"
              className="lg:w-full lg:mt-0 lg:mb-0 mb-8 mt-10 w-[90%] h-full lg:px-0 px-[20px]  object-cover rounded-md row-end-auto"
            />
      </div>
      <div className="flex lg:px-0 px-[20px] items-center text-white lg:mt-40">
            <p className="lg:mr-10 mr-[50px]">Follow Me</p>
       
        <div className="flex space-x-8 text-2xl cursor-pointer">
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <BsInstagram className="hover:text-pink-600 transition-all duration-300 ease-in-out" />
        </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <GrLinkedinOption className="hover:text-blue-600 transition-all duration-300 ease-in-out" />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <SiGithub className="hover:text-lime-500 transition-all duration-300 ease-in-out" />
        </a>
        </div>
        <div className="lg:border lg:w-[300px] ml-10 flex border-gray-700">
        </div>
      </div>
    </div>
  );
};

export default HeroSection;