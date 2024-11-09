"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { slideInFromLeft } from "@/utils/motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo and Name */}
        <Link href="#about-me" className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 text-lg hidden md:block text-gray-100 hover:animate-spin">
            Siddiqa Badar
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-md font-normal text-gray-100">
          <Link
            href="/"
            className={
              pathname === "/" ? "text-cyan-500" : "hover:text-pink-300"
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about" ? "text-cyan-500" : "hover:text-pink-300"
            }
          >
            About Me
          </Link>
          <Link
            href="/milestones"
            className={
              pathname === "/milestones"
                ? "text-cyan-500"
                : "hover:text-pink-300"
            }
          >
            Milestones
          </Link>
          <Link
            href="/project"
            className={
              pathname === "/project" ? "text-cyan-500" : "hover:text-pink-300"
            }
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact" ? "text-cyan-500" : "hover:text-pink-300"
            }
          >
            Contact
          </Link>
        </nav>

        {/* Download CV Button for Desktop */}
        <Link href="/Cv.pdf.pdf">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Download CV
            <FaCloudDownloadAlt className="inline-block pb-1 ml-2" />
          </motion.a>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-cyan-500 p-2 rounded-md"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1e0e48] p-4 opacity-1">
          <a
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block text-cyan-500 p-2 "
          >
            Home
          </a>
          <a
            href="about"
            onClick={() => setIsMenuOpen(false)}
            className="block text-cyan-500 p-2 "
          >
            About
          </a>
          <a
            href="milestones"
            onClick={() => setIsMenuOpen(false)}
            className="block text-cyan-500 p-2 "
          >
            Milestones
          </a>
          <a
            href="project"
            onClick={() => setIsMenuOpen(false)}
            className="block text-cyan-500 p-2 "
          >
            Project
          </a>
          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-cyan-500 p-2 "
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
