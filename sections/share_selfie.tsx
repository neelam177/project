'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
const ShareSelfie = () => {
   const router = useRouter();
  const [name, setName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageData, setImageData] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedImage = localStorage.getItem('userImage');
    if (storedName) {
      setName(storedName);
      setInputValue(storedName);
    }
    if (storedImage) {
      setImageData(storedImage);
    }
  }, []);

    // Convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!name && inputValue.trim() !== '') {
        localStorage.setItem('userName', inputValue);
        setName(inputValue);
      }
      if (imageFile) {
        try {
          const base64 = await fileToBase64(imageFile);
          localStorage.setItem('userImage', base64);
          setImageData(base64);
        } catch (error) {
          console.error('Error reading file', error);
        }
      }
      router.push('/welcome');
    };


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const file = e.target.files?.[0] || null;
     setImageFile(file);
     if (file) {
       const reader = new FileReader();
       reader.onloadend = () => {
         setImageData(reader.result as string);
       };
       reader.readAsDataURL(file);
     } else {
       setImageData(null);
     }
   };
  return (
    <div>
      <h1>Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input type='text'placeholder="Your name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  disabled={!!name} />
        <label htmlFor="selfie">Upload your selfie:</label><br />
        <input
          id="selfie"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginBottom: '15px' }}
        />
        <button type='submit' disabled={!!name}>Submit</button>
      </form>
       {imageData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Preview:</h3>
          <img
            src={imageData}
            alt="Your selfie"
            style={{ width: '200px', borderRadius: '8px', boxShadow: '0 0 5px rgba(0,0,0,0.3)' }}
          />
        </div>
      )}
    </div>
  );
};

export default ShareSelfie;
