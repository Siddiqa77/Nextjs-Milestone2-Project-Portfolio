
"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";

const Milestones = () => {
  return (
    <div>
      <div className="container mx-auto flex px-10 py- md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {" "}
         
           <h1 className=' font-serif  sm:text-6xl text-3xl mb-4 text-gray-100 md:mt-2 md:ml-[400px] text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'
           >
              My
            <Typewriter
              options={{
                strings: ["Achievements", "Success", "Milestones"],
                autoStart: true,
                loop: true,
              }}
              />
                
            </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3xl:grid-cols-4 gap-4 p-4">
  {[
    { src: "/certificate/C1.jpg", alt: "HTML Certificate" },
    { src: "/certificate/C2.jpg", alt: "CSS Certificate" },
    { src: "/certificate/C3.png", alt: "JavaScript Certificate" },
    { src: "/certificate/C4.png", alt: "Certificate 4" },
    { src: "/certificate/C5.png", alt: "Data Certificate" },
    { src: "/certificate/C6.jpg", alt: "Certificate 6" },
    { src: "/certificate/C7.png", alt: "Certificate 7" },
    { src: "/certificate/C8.jpg", alt: "Certificate 8" },
    { src: "/certificate/C9.jpg", alt: "Certificate 9" },
    { src: "/certificate/C10.jpg", alt: "Certificate 10" },
    { src: "/certificate/C11.png", alt: "Certificate 11" },
  ].map((certificate, index) => (
    <div key={index} className="flex justify-center">
      <Image
        className="rounded-lg border-4 border-red-500 transition-transform ease-in-out duration-300 hover:scale-105"
        src={certificate.src}
        alt={certificate.alt}
        width={400}
        height={200}
      />
    </div>
  ))}
</div>


    </div>
  );
};

export default Milestones;
