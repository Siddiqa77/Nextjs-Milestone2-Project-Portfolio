"use client";

import { useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Milestones = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    { src: "/certificate/C1.jpg", alt: "HTML Certificate" },
    { src: "/certificate/C2.jpg", alt: "CSS Certificate" },
    { src: "/certificate/C3.png", alt: "JavaScript Certificate" },
    { src: "/certificate/C4.png", alt: "Certificate 4" },
    { src: "/certificate/C5.png", alt: "Data Certificate" },
    { src: "/certificate/C6.jpg", alt: "Certificate 6" },
    { src: "/certificate/C7.png", alt: "Certificate 7" },
    { src: "/certificate/C8.jpg", alt: "Certificate 8" },
    { src: "/certificate/C10.jpg", alt: "Certificate 10" },
    { src: "/certificate/C11.png", alt: "Certificate 11" },
  ];

  return (
    <div>
      <div className="container mx-auto flex px-10 py- md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-serif sm:text-6xl text-3xl mb-4 text-gray-100 md:mt-2 md:ml-[400px] text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {certificates.map((certificate, index) => (
          <div key={index} className="flex justify-center">
            <Image
              className="rounded-lg border-4 border-red-500 transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer"
              src={certificate.src}
              alt={certificate.alt}
              width={350}
              height={250}
              onClick={() => setSelectedImage(certificate.src)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative max-w-3xl max-h-[90vh] w-full">
            <Image
              src={selectedImage}
              alt="Fullscreen Certificate"
              layout="responsive"
              width={800}
              height={600}
              className="rounded-lg object-contain w-full h-auto"
            />
            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Milestones;
