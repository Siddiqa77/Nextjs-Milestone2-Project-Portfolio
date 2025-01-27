import ProjectCard from '@/components/sub/ProjectCard'
import React from 'react'


const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20'>
           <h1 className="text-[35px] font-serif font-extrabold sm:text-6xl text-3xl mb-4 text-gray-100 md:mt-2 md:ml-[60px]  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
             My Projects
           </h1>

           {/* First Row */}
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-16 mt-5'>
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
                   title="Furniture Website Hackathon"
                   description="This is a Furniture Ecommerce website created by NextJS,react  and Tailwindcss with some component libraries for better user experience and styling."
                   src="/project3.png"
                   demourl="https://final-figma-hackathon.vercel.app/"
                   codeurl="https://github.com/Siddiqa77/Final-Figma-Hackathon"
                />
                </div>

           {/* Second Row */}
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-16 mt-5'>
            <ProjectCard
                   title="Cake Online Store "
                   description="This is a Wedding Planner website created by HTML and CSS with some component libraries for better user experience and styling.."
                   src="/project4.png"
                   demourl="https://nextjs-milestone2-assignment-ten.vercel.app/"
                   codeurl="https://github.com/Siddiqa77/Nextjs-Milestone2-Assignment"
                />
                <ProjectCard
                    title="Dynamic Ecommerce Website"
                    description="This is my React Portfolio website created by HTML, CSS and JS with some component libraries for better user Experience.  "
                    src="/project5.png"
                    demourl="https://milestone3-nextjs-ecommerce-website.vercel.app/"
                    codeurl="https://github.com/Siddiqa77/Milestone3-Nextjs-Ecommerce-Website"
                />
                <ProjectCard
                   title="Portfolio with CSS"
                   description="This is Resume Builder  created by core HTML, CSS and Ts to generate beautiful and unique design portfolio for users ."
                   src="/project6.png"
                   demourl="https://next-js-milestone-2-project-with-css.vercel.app/"
                   codeurl="https://github.com/Siddiqa77/NextJS-Milestone-2-Project-with-CSS"
                />    
            </div>

            {/* Third Row */}
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-16 mt-5'>
            <ProjectCard
                   title="Techforcepakistan "
                   description="This is a Wedding Planner website created by HTML and CSS with some component libraries for better user experience and styling.."
                   src="/project7.png"
                   demourl="https://js-website-8cddd.web.app/"
                   codeurl="https://github.com/Siddiqa77/Portfolio/tree/main/Techforce%20Pakistan"
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
                   src="/project9.png"
                   demourl="https://milestone-5-azure.vercel.app/"
                   codeurl="https://github.com/Siddiqa77/Milestone-5"
                />
                
                
            </div>
        </div>
    )
}

export default Projects