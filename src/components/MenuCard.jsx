import React from 'react';

const MenuCard = ({image, name}) => {
  return (
    <div className='space-y-3 py-4 px-3 rounded-md bg-slate-200 hover:bg-[#FFEDF4] transition-colors flex flex-col justify-center items-center'>
      <img src={image} className='' />
      <h3>{name}</h3>
    </div>
  );
};

export default MenuCard;