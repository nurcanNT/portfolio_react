//import React from 'react'
import "./service.css";
import Image1 from "../../assetsservice-1.svg";
import Image2 from "../../assetsservice-2.svg";
import Image3 from "../../assetsservice-3.svg";


const data = [
    {
        id: 1,
        image: Image1,
        title: "UI/UX design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro, officia ipsam eveniet tempora unde adipisci dolore",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro, officia ipsam eveniet tempora unde adipisci dolore",
    },
    {
        id: 3,
        image: Image3,
        title: "Photography",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro, officia ipsam eveniet tempora unde adipisci dolore",
    },
]

const Services = () => {
  return (
    <section className="services container section" id="services">
        <h2 className="section__title">Services</h2>

        <div className="services__container grid">
        {data.map(({ id, image, title, description }) => (
        <div className="services__card" key={id}>
            <img src={image} alt="" className="services_img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
        </div>
        ))}
        </div>
    </section>
  )
}

export default Services
