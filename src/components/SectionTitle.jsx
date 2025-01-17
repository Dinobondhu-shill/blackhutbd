import React from 'react';

const SectionTitle = ({heading}) => {
  return (
    <div>
      <h2 className='capitalize text-2xl font-semibold'>{heading}</h2>
    </div>
  );
};

export default SectionTitle;