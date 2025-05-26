'use client'; // For app directory — remove if you're using pages directory

import React, { useState } from 'react';

export default function ShareSelfieForm() {
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !file) {
      alert('Please enter your name and upload a selfie.');
      return;
    }

    // Handle file submission logic (e.g., upload to server)
    console.log('Name:', name);
    console.log('File:', file);
    alert('Selfie submitted successfully!');
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 rounded-xl border border-purple-200 shadow-md">
      <h2 className="text-xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
        📸 Share Your Selfie
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Selfie</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full px-4 py-6 border-2 border-dashed border-purple-300 rounded-lg cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-400 text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold py-2 rounded-lg hover:opacity-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
}





//  <h1 className='top=[103px]'><span className={`text-[80px] tracking-[-0.4px] text-[#D17710]  leading-[100px] font ${annie.className}`}>Environment</span>
//            <div className='flex ml-65'>
//              <h1> 
//               <span className={` text-[50px] tracking-[-0.4px] text-[#0E5A17] leading-[0px] font ${annie.className}`}> Day </span>         
//             </h1>
//            </div>
//           </h1>
//           <h1 className={`text-[25px] font-medium text-[#D17710] font ${nunito.className}`}>5th June '25</h1>




  // <div className='w-1/2 border-[1px] rounded-[40px] pb-[30px]'>
  //          <h1 className={`text-[70px] text-[#D17710] font-normal font ${annie.className}`}>
  //           Share Your <span className="text-[#0E5A17] text-[70px]">Selfie</span>
  //         </h1>
  //         <form className='p-[30px]'>
  //             <div className='gap-[10px]'>
  //               <label className={`font ${nunito.className} font-medium text-[25px] text-[#D17710]`}>Your Name:</label><br/>
  //                 <input type='text' 
  //                 placeholder='Type here...'
  //                 className=' w-[580px] h-[73px]  rounded-[15px] border-[1px]  pt-[19px] pr-[30px] pb-[19px] pl-[30px] text-[#F5BF81]'>
  //                 </input>
  //             </div>
              
  //             <div>
  //               <label className={`font ${nunito.className} font-medium text-[25px] text-[#D17710]`}>Upload Your Image:</label><br/>
  //               <input type='file'   placeholder="JPG,PNG"   accept=".jpg,.png"
  //               className='w-[580px] h-[73px]  rounded-[15px] border-[1px]  pt-[19px] pr-[30px] pb-[19px] pl-[30px] text-[#F5BF81]'>
                  
  //               </input>
                
  //             </div>
  //             <div className='gap-[10px]'>
  //                 <button type='submit' className={`w-[148px] h-[50px] bg-[#F5BF81] text-[23px] rounded-[8px] pt-[10px] pr-[50px] pb-[10px] pl-[50px] gap-[10px] text-white font-medium  font ${nunito.className}`}>Next</button>
  //             </div>
              
              
  //         </form>
  //         </div>


  //  <hr className="border-[1px] my-6 text-[#F5BF81]"  />
  //               <h1 className={`text-[#F5BF81] text-[50px] font-normal font ${nunito.className}`}>  Our Shared 
  //                 <span className={`font-bold text-[50px] font ${nunito.className} text-[#0E5A17]`}> Responsibility</span>
  //               </h1>