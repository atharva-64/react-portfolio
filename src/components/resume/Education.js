import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

// Portfolio section showcasing company projects and work
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one: Projects */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Projects</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Mobile & Web Applications"
            subTitle="Syntellect AI"
            result="Success"
            des="Designed and developed multiple mobile and web applications for clients and internal projects, focusing on responsive design, seamless functionality, and user engagement."
          />
          <ResumeCard
            title="Chat with PDF (RAG System)"
            subTitle="Syntellect AI"
            result="Success"
            des="Developed a PDF-based Retrieval-Augmented Generation system that allows users to chat with documents. Implemented text extraction, chunking, vector embeddings, and AI-powered responses for accurate and context-aware answers."
          />
          <ResumeCard
            title="Text-to-Image Generator"
            subTitle="Syntellect AI"
            result="Success"
            des="Built an AI-powered text-to-image generator that converts user input into high-quality images. Focused on UI/UX, performance optimization, and seamless integration into the company platform."
          />
          <ResumeCard
            title="AI Image Editing & Background Removal"
            subTitle="Syntellect AI"
            result="Success"
            des="Developed AI-powered image editing solutions, including background removal and image enhancement tools, helping clients create professional visual content efficiently."
          />
        </div>
      </div>

      {/* part two: Internal Tools */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Internal Tools</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Internal Dashboard"
            subTitle="Syntellect AI"
            result="Success"
            des="Built an internal dashboard for company workflow management, including analytics, task tracking, and team collaboration tools."
          />
          <ResumeCard
            title="Automation Tools"
            subTitle="Syntellect AI"
            result="Success"
            des="Developed scripts and applications to automate repetitive tasks within the company, improving productivity and efficiency."
          />
          <ResumeCard
            title="Client Management System"
            subTitle="Syntellect AI"
            result="Success"
            des="Designed and implemented an internal system for managing client projects, tracking progress, and centralizing communication and documentation."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
