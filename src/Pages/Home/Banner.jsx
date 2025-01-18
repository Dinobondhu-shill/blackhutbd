
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import slide1 from '/cover.jpeg'
import slider1 from '/slide-cover.png'
import slider3 from '/slider_cover.png'

const Banner = () => {
  return (
    <Swiper
    slidesPerView={1}
    loop={true}
    autoplay={true}
     navigation={true} modules={[Navigation, Autoplay ]} className="mySwiper h-40 md:h-60 lg:h-96 w-full object-cover">
        <SwiperSlide><img className='w-full h-full rounded-md' src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full rounded-md' src={slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full rounded-md' src={slide1} alt="" /></SwiperSlide>
     
      </Swiper>
  );
};

export default Banner;