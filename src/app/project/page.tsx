import ProjectCard from '@/components/sub/ProjectCard'
import React from 'react'


const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20'>
           <h1 className="text-[35px] font-serif font-extrabold sm:text-6xl text-3xl mb-4 text-gray-100 md:mt-2 md:ml-[60px]  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
             My Projects
           </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-5'>
                <ProjectCard 
                   title="Ecommerce Website"
                   description="This is a ZULU Shoes Ecommerce website created by HTML, CSS and JS with some component libraries for better user experience and styling."
                   src="/project1.png"
                   demourl="https://internship-pakistan-task-4.vercel.app/"
                   codeurl="https://github.com/Siddiqa77/Internship-Pakistan-Task-4"
                />
                <ProjectCard
                      title="Wedding Website"
                      description="This is a Wedding Planner website created by HTML, CSS and JS with some component libraries for better user experience and styling."
                      src="/project2.png"
                      demourl="https://wedding-planner-website-liard.vercel.app/"
                      codeurl="https://github.com/Siddiqa77/Wedding-Planner-Website"
                />
                <ProjectCard
                   title="Techforcepakistan "
                   description="This is a Wedding Planner website created by HTML and CSS with some component libraries for better user experience and styling.."
                   src="/project3.png"
                   demourl="https://js-website-8cddd.web.app/"
                   codeurl="https://github.com/Siddiqa77/Portfolio/tree/main/Techforce%20Pakistan"
                />
                
                
            </div>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-5'>
                <ProjectCard
                   title="Image Gallery"
                   description="A responsive Image Gallery with Large Image interface  With HTML and CSS by using some libraries for better user Experience."
                   src="/project4.png"
                   demourl="https://code-alpha-image-gallery-rho.vercel.app/"
                   codeurl="https://github.com/Siddiqa77/CodeAlpha_Image_Gallery"
                />
                <ProjectCard
                    title="React portfolio"
                    description="This is my React Portfolio website created by HTML, CSS and JS with some component libraries for better user Experience.  "
                    src="/project5.png"
                    demourl="https://react-portfolio-opal-ten.vercel.app/"
                    codeurl="https://github.com/Siddiqa77/React-Portfolio"
                />
                <ProjectCard
                   title="Resume Builder"
                   description="This is Resume Builder  created by core HTML, CSS and Ts to generate beautiful and unique design portfolio for users ."
                   src="/project6.png"
                   demourl="https://milestone-5-azure.vercel.app/"
                   codeurl="https://github.com/Siddiqa77/Milestone-5"
                />
                
                
            </div>
        </div>
    )
}

export default Projects