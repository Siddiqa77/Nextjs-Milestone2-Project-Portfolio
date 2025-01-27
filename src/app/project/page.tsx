import ProjectCard from '@/components/sub/ProjectCard';
import React from 'react';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[35px] font-serif font-extrabold sm:text-6xl text-3xl mb-12 text-gray-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        My Projects
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 w-full">
        <ProjectCard
          title="Ecommerce Website"
          description="This is a ZULU Shoes Ecommerce website created by HTML, CSS, and JS with some component libraries for better user experience and styling."
          src="/project1.png"
          demourl="https://internship-pakistan-task-4.vercel.app/"
          codeurl="https://github.com/Siddiqa77/Internship-Pakistan-Task-4"
        />
        <ProjectCard
          title="Wedding Website"
          description="This is a Wedding Planner website created by HTML, CSS, and JS with some component libraries for better user experience and styling."
          src="/project2.png"
          demourl="https://wedding-planner-website-liard.vercel.app/"
          codeurl="https://github.com/Siddiqa77/Wedding-Planner-Website"
        />
        <ProjectCard
          title="Furniture Website Hackathon"
          description="This is a Furniture Ecommerce website created by Next.js, React, and Tailwindcss with some component libraries for better user experience and styling."
          src="/project3.png"
          demourl="https://final-figma-hackathon.vercel.app/"
          codeurl="https://github.com/Siddiqa77/Final-Figma-Hackathon"
        />
        <ProjectCard
          title="Cake Online Store"
          description="This is a Cake Online Store website created using Next.js,React and Tailwindcss with component libraries for styling and better user experience."
          src="/project4.png"
          demourl="https://nextjs-milestone2-assignment-ten.vercel.app/"
          codeurl="https://github.com/Siddiqa77/Nextjs-Milestone2-Assignment"
        />
        <ProjectCard
          title="Dynamic Ecommerce Website"
          description="This is Dynamic Ecommerce  website created by Tailwindcss,React and Nextjs with some component libraries for better user experience."
          src="/project5.png"
          demourl="https://milestone3-nextjs-ecommerce-website.vercel.app/"
          codeurl="https://github.com/Siddiqa77/Milestone3-Nextjs-Ecommerce-Website"
        />
        <ProjectCard
          title="Portfolio with CSS"
          description="This is a Resume Builder created by core HTML, CSS, and TypeScript to generate beautiful and unique design portfolios for users."
          src="/project6.png"
          demourl="https://next-js-milestone-2-project-with-css.vercel.app/"
          codeurl="https://github.com/Siddiqa77/NextJS-Milestone-2-Project-with-CSS"
        />
        <ProjectCard
          title="Techforce Pakistan"
          description="This is a Techforce Pakistan project website created by HTML and CSS with component libraries for styling."
          src="/project7.png"
          demourl="https://js-website-8cddd.web.app/"
          codeurl="https://github.com/Siddiqa77/Portfolio/tree/main/Techforce%20Pakistan"
        />
        <ProjectCard
          title="React Portfolio"
          description="This is my React Portfolio website created by React, HTML, CSS, and JS with component libraries for better user experience."
          src="/project8.png"
          demourl="https://react-portfolio-opal-ten.vercel.app/"
          codeurl="https://github.com/Siddiqa77/React-Portfolio"
        />
        <ProjectCard
          title="Resume Builder"
          description="This is a Resume Builder created by core HTML, CSS, and TypeScript to generate beautiful and unique design portfolios for users."
          src="/project9.png"
          demourl="https://milestone-5-azure.vercel.app/"
          codeurl="https://github.com/Siddiqa77/Milestone-5"
        />
      </div>
    </div>
  );
};

export default Projects;
