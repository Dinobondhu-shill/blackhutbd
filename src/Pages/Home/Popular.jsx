import SectionTitle from '@/components/SectionTitle';
import SmallCard from '@/components/SmallCard';
import img1 from '../../../public/food/New/2024-10-15_022817-thumb.png'
import img2 from '../../../public/food/New/coke.jpg'
import img3 from '../../../public/food/New/Sprite-glass-thumb.jpg'


const Popular = () => {
  return (
    <div>
      <SectionTitle heading={'Most Popular Items'} />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
      <SmallCard image={img2} name={'coca cola'} price={220} description={'This is a sample description'} />
      <SmallCard image={img1} name={'coca cola'} price={220} description={'This is a sample description'} />
      <SmallCard image={img2} name={'coca cola'} price={220} description={'This is a sample description'} />
      <SmallCard image={img1} name={'coca cola'} price={220} description={'This is a sample description'} />
      <SmallCard image={img3} name={'coca cola'} price={220} description={'This is a sample description'} />
      </div>
    </div>
  );
};

export default Popular;