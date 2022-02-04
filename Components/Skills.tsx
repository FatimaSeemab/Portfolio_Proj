import React from 'react';

function Skills() {
  return <div className='m-5' id="Skills">
	  <h1 className='mt-10 text-blue-900 text-2xl font-semibold'>Web Development Skills</h1>
	  <div className='grid my-10 border-2 border-gray-900  grid-cols-1 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6'>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			  
			  <img className="h-24  w-full" src={"../images/React.png"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>React </p>
		  </div>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			  <img className="h-24 w-full" src={"../images/Redux.jpeg"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>Redux </p>
		  </div>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			  <img className="h-24 w-full" src={"../images/firebase.png"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>Firebase </p>
		  </div>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			  <img className="h-24 w-full" src={"../images/HTML.png"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>HTML </p>
		  </div>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500 transition delay-150 hover:scale-105 bg-gray-300  text-black'>
			  <img className="h-24 w-full" src={"../images/CSS.png"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>CSS </p>
		  </div>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500 transition delay-150 hover:scale-105 bg-gray-300  text-black'>
			  <img className="h-24 w-full" src={"../images/tailwind.jpeg"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>Tailwind </p>
		  </div>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500 transition delay-150 hover:scale-105 bg-gray-300  text-black'>
			  <img className="h-24 bg-black-900 w-full" src={"../images/bootstrap.jpeg"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>BootStrap </p>
		  </div>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500 transition delay-150 hover:scale-105 bg-gray-300  text-black'>
			  <img className="h-24 w-full" src={"../images/js.png"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>Javascript </p>
		  </div>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500 transition delay-150 hover:scale-105 bg-gray-300  text-black'>
			  <img className="h-24 w-full" src={"../images/node.png"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>Node </p>
		  </div>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300  text-black'>
			  <img className="h-24 w-full bg-black-900" src={"../images/download.png"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>PHP </p>
		  </div>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500 transition delay-150 hover:scale-105 bg-gray-300  text-black'>
			  <img className="h-24 w-full bg-black-900" src={"../images/MySQL.png"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>MYSQL </p>
		  </div>
		  <div className='m-5 h-36 shadow-xl hover:shadow-2xl hover:shadow-gray-500 transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			  <img className="h-24 w-full bg-black-900" src={"../images/github.png"} alt=""/>
			  <p className='mt-2 text-center text-2xl font-semibold'>Github </p>
		  </div>
	  </div>
  </div>;
} 

export default Skills;
