import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full border-t-2 bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <Link href="http://www.youtube.com/@Siddiqa-345"><p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p></Link>
            <Link href="https://github.com/Siddiqa77"><p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaGithub />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p></Link>
            <Link href="#"><p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaDiscord />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p></Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
           <Link href="https://www.instagram.com/siddiqa778899/?hl=en"> <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p></Link>
           <Link href="#"> <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaTwitter />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p></Link>
           <Link href="www.linkedin.com/in/siddiqa-badar-49a5692b5"> <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </p></Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                siddiqabadar421@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Portfolio is made by Siddiqa Badar
        </div>
      </div>
    </div>
  );
};

export default Footer;
