import React from 'react';

function Goals() {
  return <div className='m-5'>
  <h1 className='mt-10 text-blue-900 text-2xl font-semibold'>Goals And Interests</h1>
  <div className='grid bg-gray-200 my-10 border-2 border-blue-900  grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
	  <div className='m-5 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-gray-500  hover:scale-105 bg-blue-900 text-white'>
		  <img src="" alt=""/>
		  <p>Web Development</p>
		  <p>description</p>
	  </div>
	  <div className='m-5 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-gray-500  hover:scale-105 bg-blue-900 text-white'>
		  <img className='text-center' src="" alt=""/>
		  <p className="text-center">Mobile App Development</p>
		  <p>description</p>
	  </div>
	  <div className='m-5 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-gray-500  hover:scale-105 bg-blue-900 text-white'>
		  <img src="" alt=""/>
		  <p>BlockChain Development</p>
		  <p>description</p>
	  </div>
	
	  

  </div>
</div>;
}

export default Goals;
