import React from 'react';

function Programming () {
  return <div className="m-5">
	     <h1 className=' text-blue-900 font-semibold text-2xl capitalize'>Programming Languages</h1>
		 <div className='my-5 border-2 hover:shadow-gray-200 hover:shadow-inner  bg-gray-200 border-blue-900'>
			<div className="mb-1 mx-2 text-lg font-medium dark:text-white">C</div>
			<div className="m-1 mx-2 w-85 bg-gray-200 rounded-md h-4 dark:bg-gray-700">
				<div className="bg-blue-900 h-4  rounded-md dark:bg-gray-300" style={{width:"85%"}}>
				</div>
			</div>
			<div className="mb-1  mx-2 text-lg font-medium dark:text-white">C++</div>
			<div className="m-1  mx-2 w-85 bg-gray-200 rounded-md  h-4 dark:bg-gray-700">
				<div className="bg-blue-900 h-4 rounded-md dark:bg-gray-300" style={{width:"92%"}}>
				</div>
			</div>
			<div className="mb-1  mx-2 text-lg font-medium dark:text-white">Java</div>
			<div className="m-1  mx-2 w-85 bg-gray-200 rounded-md h-4 dark:bg-gray-700">
				<div className="bg-blue-900 h-4  rounded-md dark:bg-gray-300" style={{width:"80%"}}>
				</div>
			</div>
			<div className="mb-1  mx-2 text-lg font-medium dark:text-white">Python</div>
			<div className="m-1  mx-2 w-85 bg-gray-200 rounded-md h-4 dark:bg-gray-700">
				<div className="bg-blue-900 h-4  rounded-md dark:bg-gray-300" style={{width:"65%"}}>
				</div>
			</div>
		</div>
  </div>;
}

export default Programming;
