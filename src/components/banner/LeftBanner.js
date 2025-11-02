import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

// LeftBanner component with typewriter effect and media integration
const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
        "Websites",
        "Apps",
        "CRMs",
        "Database",
        "Hosting",
        "Frontend",
        "Backend"
        
      ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 50,
      delaySpeed: 2000,
    });

    // Render the component
    // This component displays a welcome message, a typewriter effect for the title,
    // a brief introduction, and a media component.
    return (
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal">WELCOME TO OUR COMPANY</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, We're{" "}
            <span className="text-designColor capitalize">Syntellect AI</span>
          </h1>
          <h2 className="text-4xl font-bold text-pink">
            We design <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|*"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Syntellect AI is a dedicated team of web design and development experts, passionate about creating modern, responsive, and AI-powered websites that help businesses grow. We specialize in building user-friendly, visually stunning, and highly functional digital experiences tailored to your brand. From concept to deployment, we ensure every website reflects innovation, creativity, and cutting-edge technology.
          </p>
        </div>
        <Media />
      </div>
    );
}

export default LeftBanner