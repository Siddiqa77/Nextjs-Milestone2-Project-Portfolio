"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start ">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Frontend Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w--[600px] w-auto h-auto"
        >
          <span>
            <h1 className="lg:text-5xl font-serif font-extrabold sm:text-4xl text-3xl mb-4 text-gray-200 md:mt-2 md:ml-[90px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Hello, I am
              <Typewriter
                options={{
                  strings: ["Web Developer", "Graphic Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a dedicated Frontend developer with a solid foundation in web
          technologies. currently advancing my AI Web3.0 expertise through a
          specialized program hosted at the Governor House.
        </motion.p>
        <Link href="/contact">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Contact Me
          </motion.a>
        </Link>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative flex justify-end mt-10 h-[250px] mr-[60px] mx-10 md:mb-[200px] md:mr-[15px] lg:w-[400px] lg:mt-[80px]">
          <Image
            className="rounded-full h-full w-full object-cover border-8 border-[#de7c3c] lg:mr-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 md:h-[450px] lg:w-[300px] lg:h-[300px]"
            src="/professional.png"
            alt="Siddiqa pic"
            width={300}
            height={400}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

// const HeroContent = () => {
//   return (
//     <section className="text-gray-200 body-font mt-20">
//       <div className="container mx-auto flex px-5 py-10 lg:py-24 flex-col-reverse md:flex-row w-full h-full">

//         {/* Text Section */}
//         <div className="flex-grow md:w-1/2 lg:ml-36 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 ">
//           <h1 className="lg:text-5xl font-serif font-extrabold sm:text-4xl text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//             Hello, I am
//             <Typewriter
//               options={{
//                 strings: ["Web Developer", "Graphic Designer"],
//                 autoStart: true,
//                 loop: true,
//               }}
//             />
//           </h1>

//           <motion.p
//             variants={slideInFromLeft(0.8)}
//             className="text-lg text-gray-400 my-5 max-w-[600px]"
//           >
//             I&apos;m a dedicated Frontend developer with a solid foundation in
//             web technologies, currently advancing my AI Web3.0 expertise through a specialized program
//             hosted at the Governor House.
//           </motion.p>

//           <div className="flex justify-center md:justify-start mt-4 space-x-4">
//             <Link href="https://www.whatsapp.com/">
//               <button className="inline-flex text-black font-bold bg-purple-400 border-0 py-2 px-6 rounded-lg text-lg transition ease-in-out hover:bg-purple-600 hover:text-gray-200">
//                 Contact
//               </button>
//             </Link>
//             <Link href="https://github.com/Siddiqa77?tab=repositories">
//               <button className="inline-flex text-black font-bold bg-blue-400 border-0 py-2 px-6 rounded-lg text-lg transition ease-in-out hover:bg-blue-600 hover:text-gray-200">
//                 Github
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="flex justify-center md:justify-end w-full md:w-1/2 mb-10 md:mb-0 mr-">
//           <img
//             className="rounded-full w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]  border-8 border-black transition-transform duration-300 hover:scale-105"
//             src="professional.png"
//             alt="Siddiqa pic"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroContent;
