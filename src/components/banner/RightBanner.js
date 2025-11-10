import React from 'react'
import { bannerImg } from "../../assets/index";

// RightBanner component that displays an image and a gradient background
// This component is used to showcase a banner image with a gradient overlay
// The image is imported from the assets folder
const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {/* <img
        className="w-[200px] h-[200px] lgl:w-[500px] lgl:h-[380px] z-10 rounded-lg"
        src={bannerImg}
        alt="bannerImg"
      /> */}

            <video
        className="w-[200px] h-[200px] lgl:w-[500px] lgl:h-[380px] z-10 rounded-lg object-cover"
        src={bannerImg}
        autoPlay
        loop
        muted
        playsInline
      />


      
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner