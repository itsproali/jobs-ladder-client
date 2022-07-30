import React from 'react';
import { Link } from 'react-router-dom';
import ButtonDefault from '../../components/ButtonDefault/ButtonDefault';

const NotFound = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
     <div className='text-center'>
      <h1 className='text-9xl text-secondary'>4<span className='text-primary'>0</span>4</h1>
      <p className='font-bold '>page not found</p>
      <Link to='/' className='flex justify-center mt-5'>
      <ButtonDefault text='go home'></ButtonDefault></Link>
     </div>
    </div>
  );
};

export default NotFound;