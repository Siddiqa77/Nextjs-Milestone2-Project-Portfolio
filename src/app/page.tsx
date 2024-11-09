

import Hero from "@/components/main/Hero";
import Skill from "@/components/main/skill";
import Technology from "@/components/main/technology";



export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skill />
        <Technology/>
      
    
      </div>
    </main>
  );
}