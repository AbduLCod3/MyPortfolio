import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="skills__container container grid">
        <div className="md-px-20 ">
          <Frontend />
        </div>
        <div className="md-px-20">
          <Backend />
        </div>
      </div>
    </section>
  );
};

export default Skills;
