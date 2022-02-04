import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
function Clone() {
	const router=useRouter();
	const data=[{name:"WhatsApp",image:"/images/whatsapp.jpeg",description:"A whatsapp clone followed by a youtube tutorial of clever programmer.React is used for front end.Tailwind css for styling and Firebase is used for database and development.",src:"https://whatsapp-clone-bf8f7.web.app/"},
	{name:"Instagram",image:"/images/instagram.png",description:"Instagram clone followed by youtube tutorial of clever programmer.React is used for front end and Redux for the state management.",src:""},
	{name:"Netflix",image:"/images/Netflix2.png",description:"Netflix clone followed by  youtube tutorial of sonny sangha,developed it using react for the front end and data is fetched using API. and deployed on vercel",src:"https://netflix-clone-eight-ivory.vercel.app/"},
	{name:"Uber",image:"/images/instagram.jpeg",description:"A youtube clone for uber riding app for React.Authentication is implemented using firebase.It is deployed using vercel.",src:"https://uber-clone-proj.vercel.app/"},
	{name:"AirBnb",image:"/images/ABnb.png",description:"AirBnb app clone is implemented using react js library.Data is fetched using faker.js.It is deployed on vercel.",src:"https://air-bnb-clone-dun.vercel.app/"},
	{name:"Railway",image:"/images/Railway.jpeg",description:"A Railway Reservation System using HTML,CSS and PHP.MySQL is used for fetching database.A database is created and managed."},
	{name:"Library",video:"/Library.mp4",description:"Library Management System is created using Angular.Connected with databases in PHP with MySQL.",src:"http://library-project.epizy.com/"},
	{name:"Table Tantrum",video:"/TableTantrum.mp4",description:"A game in java using the object oriented programming concept, we have implemented multithreading for computinng multiple actions at a time.JavaFx is used for creating GUI.It is a two member team project.Objective of the game to help students to learn mathematic tables with entertainment",src:""},
	{name:"Data Sets",image:"/images/dsa.jpeg",description:"Different data sets(imdb movie data set and data set of researcher) are designed using Data Structures and Algorithms to organize the data set and performed various functions on it"},
	{name:"Remote Sensing",image:"/images/Remote-Sensing.jpeg",description:"A research is conducted on aircraft recognition in remote sensing using digital image processing.Five research papers are read by each member and A comprehensive report is written describing which digital image technique is better than others."},
	{name:"Inventory",image:"/images/inventory.jpeg",description:"An inventory management system is used in C programming language"}
]

	const [clonerouted,setClonerouted]=useState({})

	
	useEffect(() => {
	  const {clone}=router.query;
	  if(clone)
     { setClonerouted(data.find(o=>o.name===clone))}
	},[router]);
	console.log(clonerouted);
  return <div>
	 <Link href="/">
		 <h1   className='cursor-pointer m-5 text-blue-900 text-5xl font-bold'>{clonerouted.name}</h1>
		</Link>
	  	<div className='md:flex m-5 items-center'>
		  
			<div className=''>
			  {(clonerouted.image)?
			  (<Image  width={250} height={250}   src={`${clonerouted.image}` }/>):(<video  controls 
			  width={900} height={700}
			   style={{}}>
			  <source src={`${clonerouted.video}` } />
			</video>)}
		 	 </div> 
		  	<div className='text-white rounded-xl m-5 p-5 bg-blue-900'>
			  <h1 className='text-2xl font-semibold'>Description</h1>
			  <p>{clonerouted.description}</p>
		  	</div>
	  </div>
	  <div className='flex items-center justify-center'>
       {(clonerouted.src)?(<a href={`${clonerouted.src}`}><button className=' hover:cursor-pointer hover:scale-105 hover:shadow-xl transform delay-150  m-3 w-full md:w-48 rounded-lg  p-4  flex items-center justify-center bg-gray-300 text-2xl font-semibold text-blue-900'>Visit the Site</button></a>):("")}

	  </div>


  </div>;
}

export default Clone;
