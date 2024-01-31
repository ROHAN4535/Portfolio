import React from 'react'
import Html from '../Images/HTML.svg'
import Css from '../Images/CSS.svg'
import Js from '../Images/JS.svg';
import react from '../Images/react.svg';
import Redux from '../Images/Redux.svg'
import Tailwind from '../Images/TailwindCss.svg'
import git from '../Images/Git.svg';
import github from '../Images/Github.svg'
import skills from '../Images/Skill-firstImg.svg'
import skills2 from '../Images/skills-second-img.webp';

const Skills = () => {
  return (
    <div id='skills' className='lg:mt-40 mt-32 lg:mb-0 mb-20'>
        <div className='lg:text-4xl text-3xl text-white font-bold text-center'>
            <p>I SPECIALIZE IN A <br></br> RANGE OF 💪SKILLS</p>
        </div>

        <div className='flex flex-wrap items-center justify-center mt-10 lg:w-[80%] mx-auto lg:px-0 px-[20px]'>
            <img src={Html} className='lg:w-[150px]  w-[80px] lg:mb-4 lg:mx-4' alt='HTML'/>
            <img src={Css} className='lg:w-[150px] w-[80px]' alt='Css' />
            <img src={Js} className='lg:w-[150px] w-[80px]' alt='js'/>
            <img src={react} className='lg:w-[150px] w-[80px]' alt='react' />
            <img src={Redux} className='lg:w-[150px] w-[80px]' alt='redux'/>
            <img src={github} className='lg:w-[150px] w-[80px]' alt='github' />
            <img src={git} className='lg:w-[150px] w-[80px]' alt='git'/>
            <img src={Tailwind} className='lg:w-[150px] w-[80px]' alt='tailwind' />   
        </div>
        <div className='flex justify-between lg:px-0 px-[20px]'>
            <div className='lg:block hidden'>
            <img src={skills2} alt='skills2' className='lg:w-[180px] w-[90px] lg:-translate-y-[130px]'/>
            </div>
            <img src={skills} alt='skills' className=' lg:block hidden lg:w-[200px] lg:translate-x-0 lg:-translate-y-[480px]  ' />
        </div>
    </div>
  )
}

export default Skills;