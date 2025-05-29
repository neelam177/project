"use client";
import { nunito } from "../fonts/nunito ";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import html2canvas from "html2canvas";

const Page = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedImage = localStorage.getItem("preview");
    if (storedName) setName(storedName);
    if (storedImage) setImage(storedImage);
  }, []);

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    alert("In handle download");

    const canvas = await html2canvas(certificateRef.current, {
      backgroundColor: "#FFF",
      useCORS: true,
    });

    const link = document.createElement("a");
    link.download = `${name}_certificate.png`;
    link.href = canvas.toDataURL();
    link.click();
    localStorage.clear();
  };
  return (
    <>
      <div className="absolute right-0">
        <Image src="/7782706 2.png" alt="" width={530} height={415} />
      </div>

      <div className="px-[100px] py-[45px] bg-[#FFF7F8]">
        <Image src="/Logo 1.png" alt="" width={175} height={160} />
        <div className="text-[#F5BF81] border-[1px] opacity-50 max-w-[983px] mt-[70px]"></div>
        <div className="pt-[20px] flex items-center gap-[8px]">
          <div className="pt-[7px]">
            <Image src="/Icon.png" alt="Back" width={15} height={20} />
          </div>
          <div className="pt-[10px]">
            <span
              className={`font ${nunito.className}  font-normal text-[30px] text-[#D17710] pt-[10px]`}
            >
              Back
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <h1
            className={`font ${nunito.className} font-normal text-[160px] text-[#D17710]`}
          >
            Thank
          </h1>
          <span
            className={`font ${nunito.className} font-normal text-[160px] text-[#0E5A17]`}
          >
            {" "}
            You
          </span>
        </div>
        <div className="flex flex-col item-center">
          <p
            className={` justify-center font ${nunito.className} font-normal text-[41px] text-[#D17710]`}
          >
            Your commitment to
            <span
              className={`font ${nunito.className} font-normal text-[50px] text-[#0E5A17]`}
            >
              {" "}
              plant
            </span>{" "}
            the seeds for a
            <span
              className={`font ${nunito.className} font-normal text-[50px] text-[#0E5A17]`}
            >
              {" "}
              greener{" "}
            </span>
            tomorrow.
          </p>
          <p
            className={`text-center font ${nunito.className} font-normal text-[23px]`}
          >
            🌱 By taking the sustainability pledge, you've joined a global
            community striving to protect our planet through conscious choices
            and collective action. As a token of your contribution, your
            personalized certificate is now ready to download them below and
            share your pledge with pride. Every small step matters, and
            together, we’re growing a future rooted in purpose, care, and
            sustainability.
          </p>

          <div className="w-full flex justify-center p-[22px] mb-[97px]">
            <button
              onClick={handleDownload}
              className={` bg-[#F5BF81] text-[23px] rounded-[12px] pt-[10px] pr-[50px] pb-[10px] pl-[50px] gap-[10px] text-white font-medium  font ${nunito.className}`}
            >
              Download
            </button>
          </div>
        </div>
      </div>

      <div
        ref={certificateRef}
        className="bg-[#FFF7F8]  w-[700px] h-auto" style={{
          position:"absolute",
          left:"-9999px",
          top:0,
          pointerEvents:"none",
          zIndex:-1
        }}
      >
        <div className="absolute right-0 pt-[50px] px-[55px] z-50">
          <Image src="/Logo 1.png" alt="" width={157} height={143} />
        </div>
        <div className="relative ">
          <Image src="/7782706 1.png" alt="" width={495} height={384} />
        </div>
        <div className="flex justify-center mt-[-330px] z-20 relative">
          <Image
            src="/Vector.png"
            alt=""
            width={830}
            height={61}
            className="relative"
          />
          <div className="absolute top-[-20%] left-[49%] translate-x-[-50%] w-[700px] h-[700px] custom-radius overflow-hidden">
            {/* <Image src={image} alt="User" fill className="object-cover" /> */}
            <img
              src={image}
              alt="User"
              className="object-cover w-full h-full"
            />
          </div>

          <Image
            src="/Linked Path Group.png"
            alt=""
            width={600}
            height={30}
            className="absolute top-[380px]"
          />
        </div>

        <div className="flex flex-col items-center">
          <p
            className={`font ${nunito.className} tracking-[-0.4px] pt-28 font-normal text-[40px] text-[#0E5A17]`}
          >
            {name}
          </p>
          <p
            className={`font ${nunito.className}  font-normal text-[25px] text-[#D17710]`}
          >
            5th June ‘25
          </p>
        </div>
        <div className=" flex justify-end mt-[-609px]">
          <Image src="/bg.png" alt="" width={485} height={384} />
        </div>
      </div>
    </>
  );
};

export default Page;
