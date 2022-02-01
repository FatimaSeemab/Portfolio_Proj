import React from 'react';

function Contact() {
  return <div className='m-auto  justify-center items-center'>
		<div className='flex justify-center items-center'>
		<h1 className='text-blue-900 font-semibold text-2xl'>Contact Info</h1>
		</div>
		<div className='flex  justify-center items-center'>
			<div className='hover:shadow-lg rounded-md hover:scale-105 bg-gray-400 h-24 w-12 m-5'>
				{/* <img></img> */}
				<p>ghsd</p>
			</div>
			<div className='hover:shadow-lg rounded-md hover:scale-105 bg-gray-400 h-24 w-12 m-5'>
				<p>sdgh</p>
				{/* <img></img> */}
			</div>
			<div  className='hover:shadow-lg  rounded-md hover:scale-105 bg-gray-400 h-24 w-12 m-5'>
				<p>fgdgh</p>
			</div>
		</div>
  </div>;
}

export default Contact;
