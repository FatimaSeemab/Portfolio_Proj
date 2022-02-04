import React from 'react';
import Image from 'next/image';

function Skills() {
  return <div className='m-5' id="Skills">
	  <h1 className='mt-10 text-blue-900 text-2xl font-semibold'>Web Development Skills</h1>
	  <div className='grid my-10 border-2 border-gray-900  grid-cols-1 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6'>
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/React.png"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>React</p>
			</div>
		</div>	
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/Redux.jpeg"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>Redux</p>
			</div>
		</div>
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/firebase.png"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>Firebase</p>
			</div>
		</div>
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/HTML.png"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>HTML</p>
			</div>
		</div>
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/CSS.png"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>CSS</p>
			</div>
		</div>
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/tailwind.jpeg"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>Tailwind</p>
			</div>
		</div>
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/bootstrap.jpeg"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>Bootstrap</p>
			</div>
		</div>
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/js.png"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>Javascript</p>
			</div>
		</div>
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/node.png"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>Node</p>
			</div>
		</div>
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/download.png"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>PHP</p>
			</div>
		</div>
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/MYSQL.png"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>MYSQL</p>
			</div>
		</div>
		<div className='m-5 shadow-xl hover:shadow-2xl hover:shadow-gray-500  transition delay-150 hover:scale-105 bg-gray-300 text-black'>
			<div>
				<Image height={50} width={84} layout='responsive' src={"/images/github.png"} alt=""/>
			</div>
			<div>
				<p className='m-2 font-semibold text-center text-2xl '>Github</p>
			</div>
		</div>
	  </div>
  </div>;
} 

export default Skills;
