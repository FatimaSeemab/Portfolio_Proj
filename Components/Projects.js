import React from 'react';

function Projects() {
  return <div className='m-5'>
  <h1 className='mt-10 text-blue-900 text-2xl font-semibold'>Semester Projects</h1>
  <div className='grid my-10 border-2 bg-gray-200 border-blue-900  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5'>
	  <div className='m-5 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-gray-500  hover:scale-105 bg-blue-900 text-white'>
		  <img src="" alt=""/>
		  <p>Netflix </p>
		  <p>description</p>
	  </div>
	  <div className='m-5 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-gray-500  hover:scale-105 bg-blue-900 text-white'>
		  <img className='text-center' src="" alt=""/>
		  <p className="text-center">Uber</p>
		  <p>description</p>
	  </div>
	  <div className='m-5 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-gray-500  hover:scale-105 bg-blue-900 text-white'>
		  <img src="" alt=""/>
		  <p>Air Bnb </p>
		  <p>description</p>
	  </div>
	  <div className='m-5 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-gray-500  hover:scale-105 bg-blue-900 text-white'>
		  <img src="" alt=""/>
		  <p>Whatsapp </p>
		  <p>description</p>
	  </div>
	  <div className='m-5 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-gray-500  hover:scale-105 bg-blue-900 text-white'>
		  <img src="" alt=""/>
		  <p>Instagram </p>
		  <p>description</p>
	  </div>
	
	  

  </div>
</div>;
}

export default Projects;
