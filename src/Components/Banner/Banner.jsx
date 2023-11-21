import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/home/01.jpg'
import img2 from '../../assets/home/02.jpg'
import img3 from '../../assets/home/03.png'
import img4 from '../../assets/home/04.jpg'
import img5 from '../../assets/home/05.png'
import img6 from '../../assets/home/06.png'



const Banner = () => {
    return (
        <div className='z-[-30]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div><img src={img1} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={img2} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={img3} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={img4} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={img5} alt="" /></div></SwiperSlide>
                <SwiperSlide><div><img src={img6} alt="" /></div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;