import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import imgSlider1 from '../../assets/home/slide1.jpg'
import imgSlider2 from '../../assets/home/slide2.jpg'
import imgSlider3 from '../../assets/home/slide3.jpg'
import imgSlider4 from '../../assets/home/slide4.jpg'
import imgSlider5 from '../../assets/home/slide5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../SectionTital/SectionTitle';



// import required modules


const SwiperAp = () => {
    return (
        <>
            <div className='my-5 lg:my-10 px-10 lg:px-24 mx-auto'>
                <SectionTitle 
                subHeading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
                />
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='relative' src={imgSlider1} alt="" />
                        <h3 className="text-3xl absolute text-center top-[80%] left-[28%] text-white">SALADS</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSlider2} alt="" />
                        <h3 className="text-3xl absolute text-center top-[80%] left-[28%] text-white">PIJA</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSlider3} alt="" />
                        <h3 className="text-3xl absolute text-center top-[80%] left-[28%] text-white">SUPE</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSlider4} alt="" />
                        <h3 className="text-3xl absolute text-center top-[80%] left-[28%] text-white">CAKE</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSlider5} alt="" />
                        <h3 className="text-3xl absolute text-center top-[80%] left-[28%] text-white">SALADS</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSlider4} alt="" />
                        <h3 className="text-3xl absolute text-center top-[80%] left-[28%] text-white">CAKE</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSlider3} alt="" />
                        <h3 className="text-3xl absolute text-center top-[80%] left-[28%] text-white">SUPE</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSlider2} alt="" />
                        <h3 className="text-3xl absolute text-center top-[80%] left-[28%] text-white">PIJA</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgSlider1} alt="" />
                        <h3 className="text-3xl absolute text-center top-[80%] left-[28%] text-white">SALADS</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default SwiperAp;