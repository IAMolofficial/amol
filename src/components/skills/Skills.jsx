import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Computer from './Computer';
import Backend from './Backend';
const Skills = () => {
  return (
   <section className="skills section" id="skills">
     <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">"Highlighting Key Skills and Abilities"</span>
    <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
        <Computer/>
    </div>
   </section>
  )
}

export default Skills
