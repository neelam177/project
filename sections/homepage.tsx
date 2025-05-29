'use client';
import Image from 'next/image'
// import { annie } from '../app/fonts/fonts';
import { nunito } from '../app/fonts/nunito ';
import { inter } from '../app/fonts/mens';
import React, { useEffect, useState } from 'react'
const home = () => {

   const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

 
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedPreview = localStorage.getItem("preview");

    if (savedName) setName(savedName);
    if (savedPreview) setPreview(savedPreview);
  }, []);

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    alert("Data saved to localStorage!");
  };


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setPreview(imageData);
        localStorage.setItem("preview", imageData);
      };
      reader.readAsDataURL(file);
    }
  };
const data  = [
  {
    title: "Energy",
    subtitle: "Efficiency",
    paragraph:
      "We pledge to actively reduce our energy consumption and transition to cleaner energy habits.",
    points: [
      "Switch off lights and electronics when not in use.",
      "Maximize the use of natural daylight.",
      "Unplug devices and adopt energy-saving settings.",
      "Advocate for and adopt renewable energy wherever feasible in our workspaces.",
    ],
      image: {
      src: "/Group 6 (8).png",
      width: 150,
      height: 150,
      top: -55,
      right: -40,
    },
  },
  {
    title: "Waste",
    subtitle: "Minimization",
    color: "#0E5A17",
    paragraph:
      "We pledge to minimize waste generation and embrace a circular mindset.",
    points: [
      "Segregate and recycle waste diligently.",
      "Prioritize reusable and recyclable products.",
      "Say no to single-use plastics and opt for eco-friendly alternatives.",
      "Participate in Meril’s waste management programs and initiatives.",
    ],
     image: {
      src: "/Group 6 (3).png",
      width: 100,
      height: 100,
      top: -44,
      right: -24,
    }, 
  },
  {
    title: "Water",
    subtitle: "Conservation",
    color: "#0E5A17",
    paragraph:
      "We pledge to conserve water, a precious and finite resource.",
    points: [
      "Adopt mindful water usage habits (e.g. shorter showers, turning off taps).",
      "Report and fix leaks promptly.",
      "Support water recycling initiatives in our facilities.",
    ],
    image: {
      src: "/Group 6 (1).png",
     width: 90,
      height: 90,
     top: -65,
      right: -15,
    },
  },
  {
    title: "Sustainable",
    subtitle: "Food Choices",
    color: "#0E5A17",
    paragraph:
      "We pledge to make conscious food choices that align with planetary health.",
    points: [
      "Opt for plant-forward meals where possible.",
      "Avoid food waste through thoughtful meal planning.",
      "Use eco-friendly packaging and cutlery.",
    ],
    image: {
      src: "/Group 6 (9).png",
     width: 150,
      height: 150,
      top: -55,
      right: -24,
    },
  },
  {
    title: "Culture of",
    subtitle: "Sustainability",
    color: "#0E5A17",
    paragraph:
      "We pledge to be advocates and role models for sustainability in action.",
    points: [
      "Actively participate in Meril’s sustainability workshops and awareness campaigns.",
      "Inspire peers by sharing knowledge, best practices, and global innovations.",
      "Lead by example, encouraging others to embrace sustainable habits both at work and at home.",
    ],
    image: {
      src: "/Group 6 (6).png",
       width: 150,
      height: 150,
      top: -65,
      right: -24,
    },
  },
];

  return (
    <>
      <div className='absolute right-0 '>
        <Image src="/7782706 2.png" alt=''  width={530} height={415}  />
      </div>
    <div className='px-[100px] py-[20px] bg-[#FFF7F8]'> 
        <div className='flex justify-between relative '>
         <div className='top-[32px]'>
           <span className={` text-[70px] tracking-[-0.4px] text-[#D17710] font-normal  font ${nunito.className}`}>
            Sustainability
          </span><br/>
          <span className={` text-[40px] tracking-[-0.4px]  font-normal font text-[#0E5A17] ${nunito.className}`}>
            Pledge
          </span>
          
        </div>
        <div>
           <Image src="/Logo 1.png" alt=''  width={175} height={160}  />
        </div>
      </div>
       <div className='text-[#F5BF81] border-[1px] opacity-50 max-w-[982px] mt-9.5'>
        
       </div>
       <div className=' w-full '>
          <div className='py-[80px]'>
              <h1 className={`text-[#F5BF81] text-[50px] font ${nunito.className}`}>Our Commitment to <br/>
                <span className={`text-[#0E5A17] text-[50px] font-bold font ${nunito.className}`}>Purpose, Planet,</span>
                <span className={`text-[#0E5A17] text-[50px] font-normal font ${nunito.className}`}> and</span>
                <span className={`text-[#0E5A17] text-[50px] font-bold font ${nunito.className}`}> People</span>
              </h1>
              <h1 className={` text-[22px] font-normal tracking-[-0.4px]  ${nunito.className}`}>At
                 <span className={`text-[22px] text-[#0E5A17] font-bold font ${nunito.className}`}> Meril, </span>
                 sustainability is not just a responsibility  - it’s integral to how we innovate, 
                  operate, and lead. As Merilians, we pledge to embed sustainable actions into our everyday choices to
                 create meaningful impact across our organization and the communities we serve.
              </h1>
             
          </div>

        

       </div>
       
        <div className='pt-[40px] grid  grid-cols-5  gap-4 relative'>
          { data.map((item,index) => (
          <div key={index}
              className=' relative w-full  rounded-[40px] border-[1px] text-[#F5BF81] p-[20px]'>
              <h1 className={`font ${inter.className} font-medium text-[22px] `}>
                {item.title} <br/>
                <span className={`font ${inter.className} font-medium text-[22px] text-[#0E5A17] `}>{item.subtitle}</span>
              </h1>
         
          <div
            className="absolute"
            style={{
              top: `${item.image.top}px`,
              right: `${item.image.right}px`,
              width: `${item.image.width}px`,
              height: `${item.image.height}px`,
            }} >
            <Image
              src={item.image.src}
              alt="decor"
              width={item.image.width}
              height={item.image.height} />
          </div>
          <p className={`font ${inter.className} font-normal text-[15px] text-[#616161]  pt-[15px] pb-[10px]`}>
            {item.paragraph}
          </p>
          <ul className={`font ${inter.className} font-normal text-[14px] text-[#616161] list-disc pl-6 space-y-3 `}>
            {item.points.map((point,i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
         ))}
       </div>


        <div className='flex pt-[50px]'>
          <div className='pr-[10px] pt-[4px]'>
              <input type='checkbox'></input>
          </div>
          <p className={`font ${nunito.className} font-normal text-[18px] tracking-[-0.4px] text-justify `}>
                By taking this pledge, I affirm my role as a sustainability ambassador at Meril.
                Together, through collective action and continuous learning, we will contribute to a 
                healthier planet and a legacy of responsible innovation.
          </p>
        </div> 


          
    </div>
        <div className='flex flex-row relative bg-[#FFF7F8]'>
          <div className='pl-[90px] pb-[94px]' >
            <div className='pt-[50px]'>
              <div className='border-[1px] rounded-[40px] pb-[30px] text-[#F5BF81] h-[690px]'>
                <h1 className={`text-[70px] text-[#D17710] p-[25px] font-normal font ${nunito.className}`}>
                    Share Your <span className="text-[#0E5A17] text-[70px]">Selfie</span>
                </h1>
                <form className='px-[30px]' onSubmit={handleSubmit}>
                  <div className=' pt-[20px] flex flex-col gap-[10px]'>
                    <label className={`font ${nunito.className} font-medium text-[25px] text-[#D17710] `}>Your Name:</label>
                      <input type='text' 
                      placeholder='Type here...'
                      onChange={(e) => setName(e.target.value)}
                      className='  rounded-[15px] border-[1px]  pt-[19px] pr-[30px] pb-[26px] pl-[30px] text-[#F5BF81]'>
                      </input>
                  </div>
                  
                  <div className=' pt-[40px]'>
                    <label className={`font ${nunito.className}  gap-[10px] font-medium text-[25px] text-[#D17710] `}>Upload Your Image:</label>
                    <div className="container mt-[13px]">
                      <div className="folder">
                        <div className="front-side">
                          <div className="tip"></div>
                          <div className="cover"></div>
                        </div>
                        <div className="back-side cover"></div>
                      </div>
                      <label className="custom-file-upload">
                        <input className="title" type="file"   accept="image/*" onChange={handleImageChange} />
                        Choose a file
                      </label>
                    </div>
                     {preview && (
                        <div className="mt-4 flex justify-center">
                          <img
                            src={preview}
                            alt="Preview"
                            className="w-[200px] h-auto rounded shadow-lg"
                          />
                        </div>
                      )}

                  </div>

                  <div className='gap-[10px] pt-[60px] pl-[205px] '>
                      <button type='submit' className={`w-[148px] h-[50px] bg-[#F5BF81] text-[23px] rounded-[8px] pt-[10px] pr-[50px] pb-[10px] pl-[50px] gap-[10px] text-white font-medium  font ${nunito.className}`}>Next</button>
                  </div> 
                </form>
              </div>
            </div>  
          </div>   

          <div className='pt-[50px] absolute right-0 bottom-0'>
               <Image src="/Group 13 (1).png" alt='' width={1000} height={1000}  />
          </div>  
        </div>

    </>
    
    
  )
}

export default home