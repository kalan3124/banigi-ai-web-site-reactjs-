
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';


import f1 from "../../../assets/feedback1.png"
import f2 from "../../../assets/feedback2.png"
import f3 from "../../../assets/feedback3.png"
import avatarIcon from "../../../assets/avatar.png"
import prev from "../../../assets/prev.png"
import next from "../../../assets/next.png"
import { t } from 'i18next';
import TestimonialCard1 from './TestimonialCard';
let lang = localStorage.getItem("lang");

const Feedback = () => {
    return (
        <>

            <div className="feedback_div" id='feedback'>

                <h2>{lang == 'vt' ? "":t('what_our')} <span>{t("customers")}</span> {t("say_about_us")}</h2>

                <Swiper
                    modules={[Navigation, Pagination]}

                    spaceBetween={50}
                    slidesPerView={1}
                    navigation = {{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                      }}

                    className="mySwiper"

                >
                    
                    <SwiperSlide><TestimonialCard1 img={avatarIcon} text="Whether it’s interior redesign or landscaping, Banigi AI delivers high-quality results every time. It’s become an essential tool for our remodeling business." name = "Mark T" position = { t("builder")}></TestimonialCard1></SwiperSlide>
                    <SwiperSlide><TestimonialCard1 img={avatarIcon} text="The ease of uploading images and customizing designs with Banigi AI is incredible. I love how I can see multiple design options instantly." name = " Lisa M." position = { t("interior_designer")}></TestimonialCard1></SwiperSlide>
                    <SwiperSlide><TestimonialCard1 img={avatarIcon} text="Banigi AI transformed my living space with ease. The design options were varied and precisely what I needed. Highly recommended!" name = "Jane D." position = { t("home_owner")}></TestimonialCard1></SwiperSlide>
                    <SwiperSlide><TestimonialCard1 img={avatarIcon} text="As a builder, I’ve used Banigi AI for several projects. The results are consistently impressive and save us so much time." name = "Mark T." position = { t("builder")}></TestimonialCard1></SwiperSlide>
                    <SwiperSlide><TestimonialCard1 img={avatarIcon} text="The level of customization available with Banigi AI is fantastic. It’s become a go-to tool for all my AirBnB design projects." name = "Lisa M." position = { t("airbnb_owner")}></TestimonialCard1></SwiperSlide>
                    <SwiperSlide><TestimonialCard1 img={avatarIcon} text="Check out the incredible before-and-after of our latest landscaping project, all thanks to Banigi AI!" name = "David R." position = { t("home_renovator")}></TestimonialCard1></SwiperSlide>


                    <div className="swiper-button-next">
                        <img src={next} alt="" />
                    </div>
                    <div className="swiper-button-prev">
                        <img src={prev} alt="" />
                    </div>

                </Swiper>

            </div>

        </>
    )
}

export default Feedback
