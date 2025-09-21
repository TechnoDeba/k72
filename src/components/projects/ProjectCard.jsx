import React from "react";

const ProjectCard = ({ image1, image2 }) => {
  return (
   
      <>
      <div className="lg:w-1/2 group h-full relative  transition-all rounded-none hover:rounded-[70px] overflow-hidden">
        <img className="h-full w-full object-cover" src={image1} alt="" />
        <div className="opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/20 h-full w-full flex items-center justify-center">
          <h2 className="uppercase lg:text-6xl font-[font1] lg:border-4 border-2 rounded-full pt-4 px-8 text-white">
            Voir le Projet
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2 group h-full relative  transition-all rounded-none hover:rounded-[70px] overflow-hidden">
        <img className="h-full w-full object-cover" src={image2} alt="" />
        <div className="opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/20 h-full w-full flex items-center justify-center">
          <h2 className="uppercase lg:text-6xl font-[font1] lg:border-4 border-2 rounded-full pt-4 px-8 text-white">
            Voir le Projet
          </h2>
        </div>
      </div>

      </>
  );
};

export default ProjectCard;
