import React from 'react';
import Router, { useRouter } from 'next/router';
import Image from 'next/image';
import Netflix from "../public/images/netflix.png"

function PersonalProjects() {
  const router=useRouter();
  return  <div className='m-5' >
  <h1 className='mt-10 text-blue-900 text-2xl font-semibold'>Personal Projects</h1>
  <div className=' grid my-10 border-2 border-gray-400 bg-blue-900 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5'>
	  <div className='m-5 h-32 w-84  shadow-sm shadow-slate-400 hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <Image onClick={()=>{
			router.push(
				{pathname:"/clone/[clone]",
					query:{
						clone:"Netflix"
						}
				}
			)
		}
	}  layout='fill' src={Netflix} alt=""/>
		  
	  </div>
	  <div className='m-5 h-32 w-84 shadow-sm shadow-slate-400 hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
	  	
		  <Image  onClick={()=>{
			router.push(
				{pathname:"/clone/[clone]",
					query:{
						clone:"AirBnb"
						}
				}
			)
		}
	} 	 layout='fill'  src="/images/airbnb.png" alt="" />
	  </div>
	  <div className='m-5 h-32 w-84 rounded-xl  shadow-slate-400 shadow-sm hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
	  	<Image onClick={()=>{
			router.push(
				{pathname:"/clone/[clone]",
					query:{
						clone:"WhatsApp"
						}
				}
			)
		}
	}
	 layout='fill'  src={"/images/whatsapp.jpeg"} alt=""/>
	  </div>
	  <div className='m-5 h-32  w-84 shadow-sm shadow-slate-400 hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <Image  onClick={()=>{
			router.push(
				{pathname:"/clone/[clone]",
					query:{
						clone:"Uber"
						}
				}
			)
		}
	} layout='fill'   src={"/images/uber.jpeg"} alt=""/> 
	  </div>
	  <div className='m-5 h-32  w-84 shadow-sm shadow-slate-400 hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <Image onClick={()=>{
			router.push(
				{pathname:"/clone/[clone]",
					query:{
						clone:"Instagram"
						}
				}
			)
		}
	} layout='fill' src={"/images/instagram.png"} alt=""/>
	  </div>
  </div>
</div>;
}

export default PersonalProjects;
