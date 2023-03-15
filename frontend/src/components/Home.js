import React from 'react';

const Home = () => {
  return (
    <div className='w-full bg-gray-100 py-16 px-4'>
      <div className='max-w-[1240px] h-[450px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] h-[400px] mx-3 my-auto inline-block rounded-xl' src='/rest2.jpg' alt='/restaurant' />
        <div className='flex flex-col justify-start mx-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-6xl font-bold py-1 text-[#5f5c6d]'>La Pinoz Pizza</h1>
          <div>
              Hello 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;