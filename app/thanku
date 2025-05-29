'use client';
import { nunito } from '../app/fonts/nunito ';
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'; 

const ThankYou = () => {
     const router = useRouter();
  return (
    <>
      <div className='absolute right-0'>
        <Image src="/7782706 2.png" alt='' width={530} height={415} />
      </div>
       <div className='px-[100px] py-[45px] bg-[#FFF7F8]'> 
            <Image src="/Logo 1.png" alt=''  width={175} height={160}  />
            <div className='text-[#F5BF81] border-[1px] opacity-50 max-w-[983px] mt-[70px]'>
        
            </div>
           <div className='pt-[20px] flex items-center gap-[8px]' >
             <div className='pt-[7px]'>
                 <Image src="/Icon.png" alt="Back" width={15} height={20} />
             </div>
              <div className='pt-[10px]'>
                 <span className={`font ${nunito.className}  font-normal text-[30px] text-[#D17710] pt-[10px]`} onClick={() => router.back()}>Back</span>
              </div>    
           </div>
           <div className='flex justify-center'>
                <h1 className={`font ${nunito.className} font-normal text-[160px] text-[#D17710]`}>Thank</h1>
                <span className={`font ${nunito.className} font-normal text-[160px] text-[#0E5A17]`} >   You</span>
           </div>
           <div className=''>
                <p className={` justify-center font ${nunito.className} font-normal text-[50px] text-[#D17710]`}>Your commitment to 
                <span className={`font ${nunito.className} font-normal text-[50px] text-[#0E5A17]`}> plant</span> the seeds for a 
                <span className={`font ${nunito.className} font-normal text-[50px] text-[#0E5A17]`} > greener </span> 
                tomorrow.</p>
                <p>
                    🌱 By taking the sustainability pledge, you've joined a global community striving to protect our planet through conscious choices 
                    and collective action. As a token of your contribution, your personalized certificate is 
                    now ready to download them below and share your pledge with pride. Every small step matters,
                     and together, we’re growing a future rooted in purpose, 
                     care, and sustainability.
                </p>
           </div>

       </div>
        
    </>
  )
}

export default ThankYou
