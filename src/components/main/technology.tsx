import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
const Technology = () => {
  return (
    <div id="technology" className=" md:p-24 mb-32">
       <div className="flex flex-col text-center w-full">
         
         <h1 className="text-[35px] font-serif font-extrabold sm:text-6xl text-3xl text-gray-100  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
             Technology
           </h1>
         </div>
      <div className="flex flex-wrap items-center justify-around">
      
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:animate-spin">
            <FaHtml5 color="#E34F26"  size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:animate-spin">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:animate-spin">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:animate-spin">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:animate-spin">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:animate-spin">
            <RiNextjsFill  color="#008000" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl hover:animate-spin">
            <SiTypescript color="#1572B6" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center ">
            <SiCanva  className="hover:animate-spin" color="#4285F4 " size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Canva Designer</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>I have great skill of Designing in Canva</li>
                <li> Work as a designer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <SiAdobeillustrator className="hover:animate-spin" color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Adobe Illustrator</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- I have Great Skill in Adobe Illustrator.</li>
                <li>-Work as a Designer </li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <SiAdobephotoshop className="hover:animate-spin" color="#1572B6" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Adobe Photoshop</h2>
              <p className="text-sm leading-tight font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- I have Great Skill in Adobe Photoshop.</li>
                <li>- Work as a Designer</li>
              </ul>
            </span>
          </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Technology