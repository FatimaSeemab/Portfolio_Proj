import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
function Clone() {
	const router=useRouter();
	// const data=localStorage.getItem("Data");
	// console.log(JSON.parse(data));
	const{name,img,description}=router.query;
	console.log({name,img,description});
  return <div>
	  <h1 className='m-5 text-blue-900 text-5xl font-bold'>{name}</h1>
	  	<div className='md:flex m-5 items-center justify-between'>
			<div className=''>
			  <Image  width={500} height={500}   src={`${img}` }/>
		 	 </div> 
		  	<div className='text-white rounded-xl m-5 p-5 bg-blue-900'>
			  <h1>Description</h1>
			  <p>{description}</p>
		  	</div>
	  </div>
	  <div className=' flex items-center justify-center'>
		<button className=' hover:cursor-pointer hover:scale-105 hover:shadow-xl transform delay-150  m-3 w-full md:w-48 rounded-lg  p-4  flex items-center justify-center bg-gray-300 text-2xl font-semibold text-blue-900'>Visit the Site</button>
	  </div>


  </div>;
}

export default Clone;
