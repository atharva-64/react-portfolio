import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT OUR PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="More Info"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Background Removal Tool"
          des="We designed a powerful background removal tool that allows users to quickly and accurately remove backgrounds from images, making them ready for e-commerce, social media, and professional presentations."
          src={projectOne}
          // liveLink="" 
          // githubLink=""
        />
        <ProjectsCard
          title="Chat with PDF (RAG System)"
          des="We built an intelligent Chat with PDF system using Retrieval-Augmented Generation (RAG) to enable users to query PDFs and get accurate, context-aware responses instantly."
          src={projectTwo}
          // liveLink="" 
          // githubLink=""
        />
        <ProjectsCard
          title="Text to Image Generator"
          des="We developed a Text to Image Generator that converts textual descriptions into high-quality images, leveraging AI technologies to support creative and marketing projects."
          src={projectThree}
          // liveLink="" 
          // githubLink=""
        />
        <ProjectsCard
          title="Clothing E-commerce Website"
          des="We created a fully responsive and user-friendly clothing e-commerce website with secure payment integration, inventory management, and an intuitive shopping experience."
          src={projectOne}
          // liveLink="" 
          // githubLink=""
        />
        <ProjectsCard
          title="Internal Company Chatbot"
          des="We designed an internal company chatbot to improve team communication, automate repetitive tasks, and provide instant information access to employees."
          src={projectTwo}
          // liveLink="" 
          // githubLink=""
        />
      </div>
    </section>
  );
}

export default Projects;
