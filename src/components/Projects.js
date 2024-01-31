import { HiOutlineLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import ecomerceImg from '../Images/Ecomerce.png'
import expense from '../Images/ExpenseTracker.png';
import mailbox from '../Images/Mailbox.png';
import restaurant from '../Images/Restaurant.png'
import projectImg from '../Images/ProjectImg.png';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      image:  ecomerceImg ,
      heading: "E-commerce",
      description:
        "Developed a fully functional E-commerce platform using React and tailwind and used redux for state management and react router for semless navigation .",
      skills: ["React", "CSS", "Firebase"],
      liveprivew: "https://ecommerce-website-800b0.web.app/",
      viewcode: "https://github.com/ROHAN4535/E-Commerce-Website",
    },
    {
      id: 2,
      image:  expense ,
      heading: "Expense Tracker",
      description:
        "Create a simple platform using React to keep track of expenses done by user and implemented Firebse realtime data to manage data at the backend.",
      skills: ["React", "CSS", "Firebase"],
      liveprivew: "https://expense-tracker-f082a.web.app/",
      viewcode: "https://github.com/ROHAN4535/Expense-Tracker",
    },
    {
      id: 3,
      image:  mailbox ,
      heading: "Mail Box Client",
      description:
        "Mailbox client is an application where user can send and receive mail.Each user has their account and implemented various hooks.",
      skills: ["React", "CSS", "Firebase"],
      liveprivew: "https://email-box-client-f9178.web.app/",
      viewcode: "https://github.com/ROHAN4535/Email-Box-Client-Project",
    },
    {
      id: 4,
      image:  restaurant ,
      heading: "Restaurant Website",
      description:
        "Web app built with the power of ReactJS experience a seamless and user-frendly user can easily customize their meal,adjusting quantities with just a click.",
      skills: ["React", "CSS"],
      viewcode: "https://github.com/ROHAN4535/Restaurant-Website",
    },

    {
      id: 5,
      image:  projectImg,
      heading: "Portfolio Website",
      description:
        "Designed and built a sleek personal portfolio showcasing a Frontend skills,projects and user-friendly interfaces and clean code,responsive design.",
      skills: ["React", "TailwindCss", "Firebase"],
    //   liveprivew: "https://example.com/live",
      viewcode: "https://github.com/ROHAN4535/Portfolio",
    },
  ];

  return (
    <div id="projects" className=" text-center">
      <div className="lg:text-4xl text-3xl text-white font-bold">
        <p>
          HERE'S A GLIMPSE OF
          <br /> SOME EXCITING 👨‍💻PROJECTS I'VE DONE
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-16">
        {projectData.map((project) => (
          <div
            key={project.id}
            className=" w-[300px] lg:w-[320px] bg-transparent rounded-md overflow-hidden shadow-lg mx-4 my-4 border-2 border-gray-600 hover:shadow-[4.0px_8.0px_8.0px_rgba(50,205,50,0.38)] transition-all duration-200 ease-in-out hover:scale-105 transform 

            cursor-pointer"
          >
            <img
              src={project.image}
              className="w-full h-[150px] object-cover rounded-md"
              alt="projectImg"
            />
            <div className="mt-5">
              <h2 className="text-white font-bold mb-2 text-[18px]">{project.heading}</h2>
              <p className="text-gray-400">{project.description}</p>
            </div>

            <div className="flex space-x-2 mb-5 mt-4 items-center justify-center">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="border border-gray-400 text-white  px-3 py-1 rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className='flex justify-between mx-4 mb-3 '>
                  <div className='flex items-center'>
                    <a href={project.liveprivew} target='_blank' rel='noopener noreferrer' className='text-white hover:text-blue-500 hover:underline flex items-center'>
                      <HiOutlineLink className='mr-1' />
                      Live
                    </a>
                  </div>
                  <div className='flex items-center'>
                    <a href={project.viewcode} target='_blank' rel='noopener noreferrer' className='text-white hover:text-blue-500 flex items-center hover:underline'>
                      <SiGithub className='mr-1' />
                      View Code
                    </a>
                  </div>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;