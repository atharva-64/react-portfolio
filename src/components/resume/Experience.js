import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-4xl font-bold">Exposure</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         <ResumeCard
  title="Mobile & Web Applications"
  subTitle="Syntellect AI - (2024 - Present)"
  result="Australia"
  des="Designed and developed multiple mobile and web applications for clients and internal projects, focusing on responsive design, seamless functionality, and user engagement."
/>

<ResumeCard
  title="Internal Company Tools"
  subTitle="Syntellect AI - (2024 - Present)"
  result="USA"
  des="Built internal tools to streamline company workflows, including dashboards, automation scripts, and management systems to improve productivity."
/>

<ResumeCard
  title="AI Image Editing & Background Removal"
  subTitle="Syntellect AI - (2025 - Present)"
  result="Nepal"
  des="Developed AI-powered image editing solutions, including background removal and image enhancement tools, helping clients create professional visual content efficiently."
/>

        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2024 - PRESENT{" "}
          </p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Ecommerce sites"
            subTitle="Built Clothing Ecommerce websites"
            result="USA"
            des="Designed and developed e-commerce websites, focusing on user experience, responsive layouts, and seamless functionality. Contributed to website architecture, UI/UX design, and implementing features that enhance customer engagement and conversions."
          />
         <ResumeCard
  title="Text to Image"
  subTitle="AI-Powered Text to Image Generator"
  result="Syntellect AI Project"
  des="Designed and developed an AI-powered Text-to-Image Generator that converts user input text into high-quality digital images. Implemented a responsive web interface, optimized performance, and ensured seamless user experience for creative content generation."
/>

        <ResumeCard
  title="Chat with PDF"
  subTitle="RAG System Project (2025 - Present)"
  result="SenerSolutions"
  des="Developed a PDF-based Retrieval-Augmented Generation (RAG) system that allows users to chat with documents. Implemented text extraction, chunking, vector embeddings, and AI-powered responses to provide accurate and context-aware answers from uploaded PDFs."
/>

        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
