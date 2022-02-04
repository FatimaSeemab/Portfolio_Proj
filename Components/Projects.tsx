import React from 'react';
import Router, { useRouter } from 'next/router';
import Image from 'next/image';
function Projects() {
  const router=useRouter();
  return <div className='m-5' id="projects">
  <h1 className='mt-10 text-blue-900 text-2xl font-semibold'>Semester Projects</h1>
  <div className='grid  my-10 border-2 bg-gray-200 border-blue-900  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
  	 <div className='m-5 shadow-lg hover:shadow-2xl hover:shadow-blue-300   hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		<div className=''>
			<Image  onClick={()=>{
				router.push(
					{pathname:"/clone/[clone]",
						query:{
							clone:"Library"
							}
					}
				)
			}}
			height={50} width={84} layout='responsive' src={"/images/library.jpeg"} alt=""/>
		</div>
		<div className='' >
			<p className='m-2 text-center text-xl '>Library Management System </p>
		</div>
	  </div>

	  <div className='m-5  shadow-lg hover:shadow-2xl hover:shadow-blue-300  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		 <div>
		  <Image onClick={()=>{
			router.push(
				{pathname:"/clone/[clone]",
					query:{
						clone:"Railway"
						}
				}
			)
		}}   height={50} width={84} layout='responsive' src={"/images/train.jpg"} alt=""/>
		 </div>
		  <div>
			  <p className='m-2 text-center text-xl '>Railway Reservation System </p>
		  </div>
	  </div>
	  <div className='m-5 shadow-lg hover:shadow-2xl hover:shadow-blue-300   hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <div>
			<Image  onClick={()=>{
				router.push(
					{pathname:"/clone/[clone]",
						query:{
							clone:"Inventory"
							}
					}
				)
			}} height={50} width={84} layout='responsive' src={"/images/inventory.jpeg"} alt=""/>
		 </div>
		 <div>
			<p className='m-2 text-center text-xl '>Inventory Management System </p>
		 </div>
	  </div>
	  <div className='m-5 shadow-lg hover:shadow-2xl hover:shadow-blue-300   hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <div>
			<Image  onClick={()=>{
				router.push(
					{pathname:"/clone/[clone]",
						query:{
							clone:"Table Tantrum"
							}
					}
				)
			}} height={50} width={84} layout='responsive' src={"/images/tabletantrum.png"} alt=""/>
		 </div>
		 <div>
			<p className='m-2 text-center text-xl '>Table Tantrum </p>
		 </div>
	  </div>
	  <div className='m-5 shadow-lg hover:shadow-2xl hover:shadow-blue-300   hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <div>
			<Image  onClick={()=>{
				router.push(
					{pathname:"/clone/[clone]",
						query:{
							clone:"Data Sets"
							}
					}
				)
			}} height={50} width={84} layout='responsive' src={"/images/dsa.jpeg"} alt=""/>
		 </div>
		 <div>
			<p className='m-2 text-center text-xl '>Data Sets Organization</p>
		 </div>
	  </div>
	  <div className='m-5 shadow-lg hover:shadow-2xl hover:shadow-blue-300   hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <div>
			<Image  onClick={()=>{
				router.push(
					{pathname:"/clone/[clone]",
						query:{
							clone:"Remote Sensing"
							}
					}
				)
			}} height={50} width={84} layout='responsive' src={"/images/Remote-Sensing.jpeg"} alt=""/>
		 </div>
		 <div>
			<p className='m-2 text-center text-xl '>Remote Sensing Research</p>
		 </div>
	  </div>
	  
  </div>
</div>;
}

export default Projects;
