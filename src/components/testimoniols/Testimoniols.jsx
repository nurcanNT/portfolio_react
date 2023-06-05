//import React from 'react'
import "./testimoniols.css";
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        id:1,
        title:"React Skeleton Nedir ve Nasıl Kullanılır?",
        subtitle: "React JS",
        comment: "React Skeleton tekniğini, kullanıcılara daha iyi bir deneyim sunmak için kullanılmalıdır. Buna birkaç neden sıralayarak daha iyi kavrayabiliriz. <button onClick={redirectToPage}>Hedef Sayfaya Git</button> ",
    },
    {
        id:2,
        title:"John Doe",
        subtitle: "Product designer at Dribble",
        comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interestingy. Good luck!",
    },
    {
        id:3,
        title:"John Doe",
        subtitle: "Product designer at Dribble",
        comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interestingy. Good luck!",
    },
    {
        id:4,
        title:"John Doe",
        subtitle: "Product designer at Dribble",
        comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interestingy. Good luck!",
    },
]

const Testimoniols = () => {
   
  return (
    <section className="testimonials container section">
        <h2 className="section__title">Content & Topics</h2>

        <Swiper className="testimonials__container grid"
         modules={[ Pagination]}
         spaceBetween={30}
         slidesPerView={1}
         loop={true}
         grabCursor={true}
         pagination={{ clickable: true }}
         >
            {data.map(({id, image, title, subtitle, comment}) => {
                return (
                    <SwiperSlide className="testimonial__item" key={id}>
                        <div className="thumb">
                            <img src={image} alt="" />
                        </div>
                        <h3 className="testimonials__title">{title}</h3>
                        <span className="subtitle">{subtitle}</span>
                        <div className="comment">{comment}</div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Testimoniols
