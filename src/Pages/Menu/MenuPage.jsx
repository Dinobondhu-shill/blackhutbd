import Menu from '../Home/Menu';
import veg from '../../../public/food/New/veg.png'
import non from '../../../public/food/New/non-veg.png'


const MenuPage = () => {
  return (
    <div>
   <Menu />
    <div className='flex gap-3 my-5'>
      <span className='flex items-center gap-1 bg-slate-300 rounded-3xl w-fit px-2 py-1'>
        <img src={veg} alt="" className='w-8 h-8'/>
        Veg
      </span>
      <span className='flex items-center gap-1 bg-slate-300 rounded-3xl w-fit px-2 py-1'>
        <img src={non} alt="" className='w-8 h-8' />
        Non-Veg
      </span>
    </div>

    </div>
  );
};

export default MenuPage;