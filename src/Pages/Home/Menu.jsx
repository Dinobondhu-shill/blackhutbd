import MenuCard from '@/components/MenuCard';
import SectionTitle from '@/components/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from '../../../public/food/appetizers-cover.png'
import img2 from '../../../public/food/appetizers-cover.png'
import img3 from '../../../public/food/beef_entrees-cover-thumb.png'
import img4 from '../../../public/food/flame_grill_burgers-cover-thumb.png'
import img5 from '../../../public/food/hot_chicken_entrees-cover-thumb.png'
import img6 from '../../../public/food/house_special_salads-cover-thumb.png'
import img7 from '../../../public/food/sandwich_from_the_grill-cover-thumb.png'
import img8 from '../../../public/food/seafood_entrees-cover-thumb.png'
import img9 from '../../../public/food/veggie_&_plant_based_burgers-cover-thumb.png'

const Menu = () => {
  return (
    <div className='py-10'>
      <SectionTitle heading={'our menu'} />
      <Swiper
      spaceBetween={20}
      slidesPerView={8}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={true}
        className="mySwiper grid grid-cols-8 gap-2 py-3"
      >
        <SwiperSlide><MenuCard image={img1} name={'Appetizers'}/></SwiperSlide>
        <SwiperSlide><MenuCard image={img2} name={'Appetizers'}/></SwiperSlide>
        <SwiperSlide><MenuCard image={img3} name={'Appetizers'}/></SwiperSlide>
        <SwiperSlide><MenuCard image={img4} name={'Appetizers'}/></SwiperSlide>
        <SwiperSlide><MenuCard image={img5} name={'Appetizers'}/></SwiperSlide>
        <SwiperSlide><MenuCard image={img6} name={'Appetizers'}/></SwiperSlide>
        <SwiperSlide><MenuCard image={img7} name={'Appetizers'}/></SwiperSlide>
        <SwiperSlide><MenuCard image={img8} name={'Appetizers'}/></SwiperSlide>
        <SwiperSlide><MenuCard image={img9} name={'Appetizers'}/></SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default Menu;