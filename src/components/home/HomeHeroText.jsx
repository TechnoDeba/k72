import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] lg:mt-0 mt-40 pt-2.5 text-center">
      <div className="lg:text-[9.5vw] text-[12vw]  flex items-center justify-center  uppercase lg:leading-[8vw] leading-[10vw]">L'étincelle</div>
      <div className="lg:text-[9.5vw]  text-[12vw] flex items-start justify-center uppercase lg:leading-[8vw] leading-[10vw]">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full lg:-mt-1 mt-1 overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] flex items-center justify-center  uppercase lg:leading-[8vw] leading-[10vw]">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
