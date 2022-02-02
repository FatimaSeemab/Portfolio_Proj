import React from 'react';

function Projects() {
  return <div className='m-5'>
  <h1 className='mt-10 text-blue-900 text-2xl font-semibold'>Semester Projects</h1>
  <div className='grid my-10 border-2 bg-gray-200 border-blue-900  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5'>
  	 <div className='m-5  shadow-lg hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <img  className="h-36 w-full " src={"../images/library.jpeg"} alt=""/>
		  <p className='m-2 text-center text-xl '>Library Management System </p>
	  </div>
	  <div className='m-5  shadow-lg hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <img  className="h-36 w-full " src={"../images/train.jpg"} alt=""/>
		  <p className='m-2 text-center text-xl '>Railway Reservation System </p>
	  </div>
	  <div className='m-5  shadow-lg hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <img  className="h-36 w-full " src={"../images/inventory.jpeg"} alt=""/>
		  <p className='m-2 text-center text-xl '>Inventory Management System </p>
	  </div>
	  <div className='m-5  shadow-lg hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <img  className="h-36 w-full " src={"../images/tabletantrum.png"} alt=""/>
		  <p className='m-2 text-center text-xl '>Table Tantrum Game </p>
	  </div>
	  <div className='m-5  shadow-lg hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <img  className="h-36 w-full " src={"../images/dsa.jpeg"} alt=""/>
		  <p className='m-2 text-center text-xl '>Data Sets Organization </p>
	  </div>
	  <div className='m-5  shadow-lg hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <img  className="h-36 w-full " src={"../images/Remote-Sensing.jpeg"} alt=""/>
		  <p className='m-2 text-center text-xl '>Remote Sensing Research </p>
	  </div>
	
	  

  </div>
</div>;
}

export default Projects;
