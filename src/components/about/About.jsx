//import React from 'react';
import "./about.css";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src="" alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am actively working on JavaScript and React technologies. In my projects and work
HTML, CSS, JavaScript, React coding, responsive designs look their best in my experience.
I have contributed in many different areas such as providing technical support and providing technical support. As I continue to improve myself
I produce content on Medium and projects on Github so that others can benefit from what I have learned.
In my professional life, with a professional team, I gained the identity of a self-developed software developer.
I plan to continue as Full Stack.
</p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number ">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    <AboutBox />
   </section>
  )
}

export default About
