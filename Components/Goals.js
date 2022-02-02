import React from 'react';

function Goals() {
  return <div className='m-5'>
  <h1 className='mt-10 text-blue-900 text-2xl font-semibold'>Goals And Interests</h1>
  <div className='grid bg-gray-200 my-10 border-2 border-blue-900  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
	  <div className='m-5 shadow-indigo-200 shadow-xl hover:shadow-2xl hover:scale-105  transform delay-150  bg-blue-900 text-white'>
		  <img className="h-40 w-full" src={"../images/webdev.jpeg"} alt=""/>
		  <p className='text-center p-1 text-2xl'>Web Development</p>
		
	  </div>
	  <div className='m-5 shadow-indigo-200 shadow-xl hover:shadow-2xl hover:scale-105  transform delay-150  bg-blue-900 text-white'>
		  <img className='h-40 w-full' src={"../images/mobile.jpeg"} alt=""/>
		  <p className='text-center p-1  text-2xl'>Mobile App Development</p>
		  
	  </div>
	  <div className='m-5 shadow-indigo-200 shadow-xl hover:shadow-2xl hover:scale-105  transform delay-150  bg-blue-900 text-white'>
		  <img className="h-40 w-full" src={"../images/blockchain.png"} alt=""/>
		  <p className='text-center p-1  text-2xl'>BlockChain Development</p>
		 
	  </div>
	
	  

  </div>
</div>;
}

export default Goals;
