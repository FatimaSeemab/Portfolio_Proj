import React from 'react';

function Main() {
  return <div className='h-screen bg-full  text-white ' style={{backgroundImage: `url("/images/background3.jpeg")`,
  backgroundSize: 'cover', 
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',}}>
	  <div className='font-serif md:h-[35rem] h-[25rem] flex justify-center items-center'>
		 <div>
		 <div className='text-center  lg:text-4xl sm:text-lg'>Hi! I am<span className='font-semibold'> Fatima Seemab </span></div>
		  <div className='text-center md:text-2xl sm:text-lg'>Student of Computer Science</div>
		  <div className="text-center md:text-2xl sm:text-lg">BS from National University of Science and Technology (NUST)</div>
		  <div className="text-center md:text-2xl sm:text-lg font-semibold">Frontend Developer</div></div>
		</div>
  </div>;
}

export default Main;


