import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  demourl: string;
  codeurl: string;
}

const ProjectCard = ({ src, title, description, demourl, codeurl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 mx-auto w-full max-w-[95%] sm:max-w-[85%] md:max-w-md">
      <Image
        src={src}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 sm:h-56 object-cover"
      />
      <div className="relative p-4 md:p-6">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm sm:text-base text-gray-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href={demourl}>
            <button className="text-xs sm:text-sm lg:text-base text-black py-2 px-4 font-bold rounded-3xl bg-[#D105FF] hover:bg-purple-600 hover:text-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
              Demo
            </button>
          </Link>
          <Link href={codeurl}>
            <button className="text-xs sm:text-sm lg:text-base text-black py-2 px-4 font-semibold rounded-3xl bg-[#de7c3c] hover:bg-[#7613E8] hover:text-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
              Source Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
