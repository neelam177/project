"use client";
import React, { useEffect, useState } from "react";

const CertificatePage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    const storedImage = localStorage.getItem("userImage");
    if (storedName) setName(storedName);
    if (storedImage) setImage(storedImage);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB] p-8">
      <h1 className="text-4xl font-bold text-[#0E5A17] mb-4">
        Your Certificate
      </h1>
      {image && (
        <img
          src={image}
          alt="User Selfie"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
      )}
      <h2 className="text-2xl text-[#D17710] font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 text-lg text-center max-w-md">
        Thank you for pledging to plant a greener tomorrow! 🌱
      </p>
    </div>
  );
};

export default CertificatePage;
