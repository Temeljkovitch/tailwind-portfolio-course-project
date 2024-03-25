import React from "react";
import about from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={about} className="w-full h-64" />

        <article>
          <SectionTitle text="code and coffee" />
          <p className=" text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            deleniti dolor saepe eaque provident quas cumque quisquam,
            doloribus, velit magnam in ut necessitatibus suscipit. Dicta libero
            optio sit quisquam deleniti.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
