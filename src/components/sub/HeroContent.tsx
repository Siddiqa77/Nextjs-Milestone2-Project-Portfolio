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
      className="flex flex-col object-cover md:flex-row items-center justify-center w-screen overflow-x-hidden px-5 md:px-10 mt-20 md:mt-40 z-[20]" // Added w-screen and overflow-x-hidden
    >
      <div className="w-full lg:ml-20 md:w-1/2 flex flex-col gap-5 justify-center text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box  py-2 px-3 border border-[#7042f88b] opacity-90 mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5 inline-block" />
          <h1 className="Welcome-text text-sm">Frontend Developer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4  mt-4 text-3xl md:text-5xl font-bold text-white"
        >
          <span>
            <h1 className="font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
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
          className="text-base md:text-lg text-gray-400 my-3 md:my-5 mx-auto md:mx-0 max-w-xs md:max-w-md"
        >
          I&apos;m a dedicated Frontend developer with a solid foundation in web
          technologies, currently advancing my AI Web3.0 expertise through a
          specialized program hosted at the Governor House.
        </motion.p>

        <Link href="/contact">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0"
          >
            Contact Me
          </motion.a>
        </Link>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="relative mt-10 h-[190px] w-[190px] sm:h-60 sm:w-60 md:h-80 md:w-80 lg:h-85 lg:w-85 border-8 border-[#de7c3c] rounded-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            className="object-cover"
            src="/professional.png"
            alt="Siddiqa pic"
            layout="fill"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
