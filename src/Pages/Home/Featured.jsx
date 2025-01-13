import FoodCard from '@/components/FoodCard';
import SectionTitle from '@/components/SectionTitle';

const Featured = () => {
  return (
    <div>
      <SectionTitle heading={'Featured Items'} />
     <div className='my-3 grid lg:grid-cols-4 gap-4'>
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     <FoodCard />
     </div>
    </div>
  );
};

export default Featured;