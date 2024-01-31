import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/logo.png";
import { Link  } from "react-scroll";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className="bg-[#000013] sticky top-0 z-10">
      <div className=" h-[80px] shadow-lg flex items-center justify-between mx-auto">

        {/* Logo */}
        <Link to="herosection" spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          <img src={logo} alt="logo" className="lg:w-[200px] w-[180px] lg:px-0 px-[12px] cursor-pointer" />
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden lg:px-0 px-[12px]">
          {showMobileMenu ? (
            <FaTimes
              className="text-white cursor-pointer px-1"
              size={26}
              onClick={closeMobileMenu}
            />
          ) : (
            <FaBars
              className="text-white cursor-pointer px-1"
              size={26}
              onClick={handleMobileMenuClick}
            />
          )}
        </div>

        {/* Navigation links */}
        <div
          className={`lg:flex space-x-10 items-center ${
            showMobileMenu
              ? "flex flex-col items-center justify-center  shadow-lg  mx-auto  absolute top-20 bg-[#000013] w-full space-y-10 rounded-lg py-4"
              : "hidden"
          }`}
        >
          <Link
            to="herosection"
            spy={true}
          smooth={true}
          offset={-100}
          duration={500}
            className="text-white font-semibold hover:text-lime-400 transition duration-300 ease-in-out cursor-pointer lg:ml-0 ml-10"
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <Link
            to="about"
            spy={true}
          smooth={true}
          offset={-100}
          duration={500}
            className="text-white font-semibold hover:text-lime-400 transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMobileMenu}
          >
            About
          </Link>

          <Link 
            to="skills"
            spy={true}
          smooth={true}
          offset={-100}
          duration={500}
            className="text-white font-semibold hover:text-lime-400 transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMobileMenu}
          >
            Skills
          </Link>

          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to="projects" 
            className="text-white font-semibold hover:text-lime-400 transition duration-300 ease-in-out cursor-pointer"
            onClick={closeMobileMenu}
          >
            Projects
          </Link>

          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to="contact"
            className=" cursor-pointer py-2 px-4 bg-lime-500 text-black font-semibold rounded-full hover:bg-lime-600"
            onClick={closeMobileMenu}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;