import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandBootstrap } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { AiOutlineCheckSquare } from "react-icons/ai";


const Skill = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-[100px] ">
        <div className="container px-5 py-24 mx-auto">
        <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[10] opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video
                        className='w-full h-auto'
                        preload='false'
                        playsInline
                        loop
                        muted
                        autoPlay
                        src='/cards-video.webm'

                    />
                </div>
                </div>
                <div className="flex flex-col text-center w-full mb-20">
         
         <h1 className="text-[35px] font-serif font-extrabold sm:text-6xl text-3xl mb-4 text-gray-100 md:mt-2 md:ml-[60px] align-middle  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
             My Skills
           </h1>
         </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-600 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                    HTML5 <FaHtml5 className="inline ml-2 bg-blue-800"/>
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-100 rounded-xl">
                    <div className="absolute bg-[#017ee0] h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-[#017ee0] text-right">100%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-600 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                    CSS3 <IoLogoCss3 className="inline ml-2 bg-red-600"/>
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-100 rounded-xl">
                    <div className="absolute bg-[#017ee0] h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-[#017ee0] text-right">95%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-600 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                    JavaScript/TypeScript <IoLogoJavascript className="inline ml-2 bg-blue-700"/> / <TbBrandTypescript className="inline bg-blue-800"/>
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-100 rounded-xl">
                    <div className="absolute bg-[#017ee0] h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-[#017ee0] text-right">90%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-600 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                    Tailwindcss <RiTailwindCssLine className="inline ml-2 bg-blue-700"/>
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-100 rounded-xl">
                    <div className="absolute bg-[#017ee0] h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-[#017ee0] text-right">80%</p>
                </div>
              </div>
            </div>
            
            {/* skill */}

            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-600 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                    Bootstrap <TbBrandBootstrap className="inline ml-2 bg-red-800"/>
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-100 rounded-xl">
                    <div className="absolute bg-[#017ee0] h-1 rounded-xl w-[85%]"></div>
                  </div>
                  <p className="font-bold text-[#017ee0] text-right">85%</p>
                </div>
              </div>
            </div>
            {/* skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-purple-600 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                   React/NextJs <FaReact className="inline ml-2"/> / <RiNextjsLine className="inline"/>
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-100 rounded-xl">
                    <div className="absolute bg-[#017ee0] h-1 rounded-xl w-[50%]"></div>
                  </div>
                  <p className="font-bold text-[#017ee0] text-right">50%</p>
                </div>
              </div>
            </div>
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-purple-600 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                   Video Editing  <CiVideoOn className="inline ml-2 bg-blue-800 font-bold"/>
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-100 rounded-xl">
                    <div className="absolute bg-[#017ee0] h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-[#017ee0] text-right">90%</p>
                </div>
              </div>
            </div>
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-purple-600 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                  Adobe Illustrator <SiAdobeillustrator className="inline ml-2 bg-yellow-800"/>
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-100 rounded-xl">
                    <div className="absolute bg-[#017ee0] h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-[#017ee0] text-right">80%</p>
                </div>
              </div>
            </div>
                        {/* skill */}
                        <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  bg-purple-600 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-100 text-lg title-font font-medium">
                   Adobe Photoshop <SiAdobephotoshop className="inline ml-2 bg-blue-600"/>
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-100 rounded-xl">
                    <div className="absolute bg-[#017ee0] h-1 rounded-xl w-[30%]"></div>
                  </div>
                  <p className="font-bold text-[#017ee0] text-right">30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;

      