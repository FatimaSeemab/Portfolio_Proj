import React from 'react';
import { Icon } from '@iconify/react';
function Contact() {
  return <div className='m-auto  justify-center items-center'>
		<div className='flex justify-center items-center'>
		<h1 className='text-blue-900 font-semibold text-2xl'>Contact Info</h1>
		</div>
		<div className='flex  justify-center items-center'>
			<a href="https://www.linkedin.com/in/fatima-seemab-84a8b61b3/">
				<div className=' hover:shadow-lg rounded-md hover:scale-105  bg-gray-300 h-18 w-18 m-5'>
					<Icon className='p-1 hover:cursor-pointer' icon="brandico:linkedin" color="#000075"  width="70" height="" />
				</div>
			</a>
			<a href="https://github.com/FatimaSeemab">
				<div className='hover:shadow-lg rounded-md hover:scale-105 bg-gray-300 h-18 w-18 m-5'>
					<Icon href="https://github.com/FatimaSeemab" icon="icon-park-outline:github" color="#000075" width="70" className='p-1 hover:cursor-pointer' />
				</div>
			</a>

			<div  className='hover:shadow-lg rounded-md hover:scale-105 bg-gray-300 h-18 w-18 m-5'>
				<Icon icon="mdi:instagram"  width="70" color="#000075" className='hover:cursor-pointer'  />
			</div>
		</div>
  </div>;
}

export default Contact;
