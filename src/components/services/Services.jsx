//import React from 'react'


const data = [
    {
        id: 1,
        title: "UI/UX design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro, officia ipsam eveniet tempora unde adipisci dolore",
    },
    {
        id: 2,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro, officia ipsam eveniet tempora unde adipisci dolore",
    },
    {
        id: 3,
        title: "Photography",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro, officia ipsam eveniet tempora unde adipisci dolore",
    },
]

const Services = () => {
  return (
    <section className="services container section" id="services">
        <h2 className="section__title">Services</h2>

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
