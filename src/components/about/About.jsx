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
            <p className="about__description">Aktif olarak JavaScript ve React teknolojileri üzerine çalışmaktayım. Gerçekleştirdiğim projelerde ve iş
deneyimimde HTML, CSS, JavaScript, React kodlama, responsive tasarımların en iyi şekilde görünmelerini
sağlamak ve teknik destek gibi birçok farklı alanda katkı sağladım. Kendimi geliştirmeye devam ederken
öğrendiklerimden başkalarının da faydalanması için Medium da içerikler, Github`da ise projeler üretmekteyim.
Mesleki hayatımda yoluma profesyonel bir ekiple birlikte, kendini geliştirmiş bir yazılımcı kimliği kazanarak
Full Stack olarak devam etmeyi planlıyorum.
</p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number development">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">60%</span>
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
