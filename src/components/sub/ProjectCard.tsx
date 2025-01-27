import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
    demourl:string;
    codeurl: string;
}

const ProjectCard = ({ src, title, description, demourl, codeurl }: Props) => {
    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  '>
            <Image
                src={src}
                alt={title}
                width={300}
                height={200}
                className='w-full object-contain'
            />
            <div className='relative p-4 '>
                <h1 className='text-2xl font-semibold text-white'>{title}</h1>
                <p className='mt-2 text-gray-300'>{description}</p>
                <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
       <Link href={demourl}> <button className="md:mt-10 text-black py-2  rounded-3xl px-3 text-sm md:text-lg md:py-2 md:px-4  font-bold  bg-[#D105FF] border-0 focus:outline-none hover:bg-purple-600 hover:text-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          Demo
        </button>
        </Link>
       <Link href={codeurl}> <button className="md:mt-10 text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 hover:bg-[#7613E8] font-semibold rounded-3xl bg-[#de7c3c] hover:text-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          Source Code
        </button>
        </Link>
      </div>
            </div>
        </div>
    )
}



export default ProjectCard
