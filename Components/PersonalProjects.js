import React from 'react';
import Router, { useRouter } from 'next/router';

function PersonalProjects() {
  const router=useRouter();
  return  <div className='m-5'>
  <h1 className='mt-10 text-blue-900 text-2xl font-semibold'>Personal Projects</h1>
  <div className='grid my-10 border-2 border-gray-400 bg-blue-900 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5'>
	  <div className='m-5  shadow-lg hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <img onClick={()=>{
			router.push(
				{pathname:"/clone",
					query:{
						name:"NetFlix",
						img:"/images/netflix.png",
						description:"I have made clone using react js, tailwind and css ",
						}
				}
			)
		}
	} className=" h-36 w-full" src={"../images/netflix.png"} alt=""/>
		  
	  </div>
	  <div className='m-5 shadow-lg hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
	  	<img onClick={()=>{
			router.push(
				{pathname:"/clone",
					query:{
						name:"AirBnb",
						img:"/images/airbnb.png",
						description:"I have made clone using react js, tailwind and css ",
						}
				}
			)
		}
	} className=' h-36 w-full' src={"../images/airbnb.png"} alt=""/>
	  </div>
	  <div className='m-5 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
	  	<img onClick={()=>{
			router.push(
				{pathname:"/clone",
					query:{
						name:"WhatsApp",
						img:"/images/whatsapp.jpeg",
						description:"I have made clone using react js, tailwind and css ",
						}
				}
			)
		}
	}
	    className=' h-36 w-full' src={"../images/whatsapp.jpeg"} alt=""/>
	  </div>
	  <div className='m-5  shadow-lg hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <img  onClick={()=>{
			router.push(
				{pathname:"/clone",
					query:{
						name:"Uber",
						img:"/images/uber.jpeg",
						description:"I have made clone using react js, tailwind and css ",
						}
				}
			)
			
			// localStorage.setItem({'name':"Uber", 'img':"/images/uber.jpeg","description":"I have made clone using react js, tailwind and css"});
		}
	} className="h-36 w-full " src={"../images/uber.jpeg"} alt=""/> 
	  </div>
	  <div className='m-5  shadow-lg hover:shadow-2xl hover:shadow-gray-100  hover:scale-105 transform delay-100 bg-blue-900 text-white'>
		  <img onClick={()=>{
			router.push(
				{pathname:"/clone",
					query:{
						name:"WhatsApp",
						img:"/images/whatsapp.jpeg",
						description:"I have made clone using react js, tailwind and css ",
						}
				}
			)
		}
	} className="h-36 w-full " src={"../images/instagram.png"} alt=""/>
	  </div>
  </div>
</div>;
}

export default PersonalProjects;
