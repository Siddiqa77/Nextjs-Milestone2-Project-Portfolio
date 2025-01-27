import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaBehance, FaFacebookF, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className=" text-gray-100 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-100">
            I am Frontend Developer and Graphic Designer Feel free to contact me
            to design any thing
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto ">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-900 "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#017ee0] focus:bg-white focus:ring-2 focus:ring-[#017ee0] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#017ee0] focus:bg-white focus:ring-2 focus:ring-[#017ee0] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-100 focus:border-[#017ee0] focus:bg-white focus:ring-2 focus:ring-[#017ee0] h-32 text-gray-100 outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div className="p-2 w-full">
            <Link href="https://mail.google.com/">
              <button className="flex mx-auto text-black font-bold bg-purple-400 border-0 py-2 px-8 focus:outline-none hover:bg-purple-950 hover:text-gray-100 rounded text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                Send Message
              </button>
            </Link>
          </div>
        </div>
        <div className="p-2 w-full pt-8 mt-8  border-gray-200 text-center">
          <a className="text-[#017ee0]">siddiqabadar421@gmail.com</a>
          <p className="leading-normal my-5">Follow Me</p>

          <nav className="list-none mb-4 inline-flex gap-2 justify-center">
            <li>
              <Link
                href="https://github.com/"
                className=" text-gray-100  hover:text-2xl  hover:text-gray-900"
              >
                <FaGithub className="  hover:text-blue-500" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/siddiqa-badar-49a5692b5/"
                className="text-gray-100  hover:text-2xl  hover:text-gray-900"
              >
                <CiLinkedin className=" hover:text-blue-500" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/"
                className="text-gray-100  hover:text-2xl  hover:text-gray-900"
              >
                <FaFacebookF className=" hover:text-blue-500" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.behance.net/siddiqa04"
                className="text-gray-100  hover:text-2xl  hover:text-gray-900"
              >
                <FaBehance className=" hover:text-blue-500" />
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Contact;
