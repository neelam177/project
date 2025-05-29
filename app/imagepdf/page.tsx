import React from "react";
import Image from "next/image";
const image = () => {
  return (
    <>
        <div className="absolute right-0 py-[50x] px-[10px]">
          <Image src="/Logo 1.png" alt="" width={157} height={143} />
        </div>
      <div className="relative">
        <Image src="/7782706 1.png" alt="" width={495} height={384} />
      </div>
     
    </>
  );
};

export default image;
