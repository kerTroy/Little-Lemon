import React from 'react';
import './Main.css';

const Main = () => {
  return (
  <div className='grid-container'>
    <div className='grid-item-1'>
      <div className='grid-item-row-1'>Hero Section</div>
    </div>
    <div className='grid-item-2'>
      <div className='grid-item-row-2'>Highlight</div>
    </div>
    <div className='grid-item-3'>
      <div className='grid-item-row-3'>Testimonials</div>
    </div>
    <div className='grid-item-4'>
      <div className='grid-item-row-4'>About</div>
    </div>
  </div>
  )
}

export default Main