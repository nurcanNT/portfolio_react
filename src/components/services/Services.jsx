//import React from 'react'


const data = [
    {
        id: 1,
        title: "HTML",
    },
    {
        id: 2,
        title: "CSS",
    },
    {
        id: 3,
        title: "JavaScript",
    },
    {
        id: 4,
        title: "React",
    },
]

const Services = () => {
  return (
    <section className="services container section" id="services">
        <h2 className="section__title">Skills</h2>

        <div className="services__container grid">
        {data.map(({ id, title, description }) => (
        <div className="services__card" key={id}>
            <img src="" alt="" className="services_img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
        </div>
        ))}
        </div>
    </section>
  )
}

export default Services
