import { useEffect, useState } from "react";
import SectionTitle from "../SectionTital/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


import 'swiper/css';
import 'swiper/css/navigation';
import iconI from '../../assets/icon/108-1081966_design-inverted-comma-png-removebg-preview.png'

const Testimonial = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('http://localhost:3100/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className=" w-4/5 mx-auto p-10">
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            />
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                history={{
                    key: 'slide',
                }}
                modules={[Navigation]}
                className="mySwiper mb-10"
            >
                <div>
                    {
                        reviews?.map(review => <SwiperSlide key={review._id}>
                            <div className="flex flex-col justify-center items-center text-center px-16 space-y-5">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img className="w-[10%]" src={iconI} alt="" />
                                <p>{review.details}</p>
                                <h2 className="uppercase text-[#CD9003] text-3xl">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper >
        </div >
    );
};

export default Testimonial;