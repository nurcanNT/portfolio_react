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
        comment: "React Skeleton tekniğini, kullanıcılara daha iyi bir deneyim sunmak için kullanılmalıdır. Buna birkaç neden sıralayarak daha iyi kavrayabiliriz. ",
    },
    {
        id:2,
        title:"jQuery Event Property",
        subtitle: "JavsaScript / jQuery",
        comment: "jQuery event metotlarını, bir olayın gerçekleşmesi için olaydan önce kullanırız. jQuery event propertylerini ise olay hakkında bilgi vermesi için olaydan sonra kullanırız. Event propertylerini incelerken bu aradaki farkı ve jQuery event propertylerini daha iyi kavracağız. ",
    },
    {
        id:3,
        title:"Bootstrap 4'te Flexbox Nedir?",
        subtitle: "Bootstrap",
        comment: "Flexbox sitelerimizin bir planıdır. Flexbox modeli, web sitemizin içeriğini düzenlememizi sağlar. Tüm modern tarayıcılar tarafından desteklenir ve doğru çalışması için önce bir flex container tanımlamak gerekir.",
    },
    {
        id:4,
        title:"JavaScript Fonksiyon Kullanımı",
        subtitle: "JavaScript",
        comment: "Fonksiyonlar, bir veya daha fazla işlevi yerine getirmesi için yazılmış olan kod bloklarıdır. Bir işlemi yapan fonksiyon yazılır ve bu işlem çalışması gerektiğinde sadece yazılan fonksiyon çağrılır. Defalara aynı kodu yazmamıza gerek kalmadan kod bloğumuz çalışır. Ve bu yöntem bize kod tasarrufu sağladığı gibi zaman tasarrufu da sağlamış olur.",
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
