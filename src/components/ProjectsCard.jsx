import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ project }) => {
  const { img, url, github, title, text } = project;
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="h-64 w-full object-cover rounded-t-lg"
      />

      <div className="p-8">
        <h2 className="text-xl font-medium capitalize tracking-wide">
          {title}
        </h2>
        <p className="text-slate-700 mt-4 leading-loose">{text}</p>

        <div className="mt-4 flex gap-x-4">
          <a href={github}>
            <FaGithubSquare className="text-slate-500 h-8 w-8 hover:text-black duration-300" />
          </a>
          <a href={url}>
            <TbWorldWww className="text-slate-500 h-8 w-8 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
