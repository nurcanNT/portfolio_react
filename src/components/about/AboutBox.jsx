//import React from 'react'

const AboutBox = () => {
  return (
   <div className="about__boxes grid">
    <div className="about__box">
        <i className="about__icon fa-brands fa-html5"></i>

        <div>
            <h3 className="about__title">198</h3>
            <span className="about__subtitle">HTML</span>
        </div>
    </div>

    <div className="about__box">
    <i className="about__icon fa-brands fa-square-js"></i>

        <div>
            <h3 className="about__title">5670</h3>
            <span className="about__subtitle">JavaScript</span>
        </div>
    </div>

    <div className="about__box">
    <i className="about__icon fa-brands fa-react"></i>

        <div>
            <h3 className="about__title">427</h3>
            <span className="about__subtitle">React</span>
        </div>
    </div>

    <div className="about__box">
        <i className="about__icon fa-brands fa-bootstrap"></i>

        <div>
            <h3 className="about__title">35</h3>
            <span className="about__subtitle">Bootstrap</span>
        </div>
    </div>
   </div>
  )
}

export default AboutBox
