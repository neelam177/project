'use client';
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

const Welcome = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    const storedImage = localStorage.getItem('userImage');
    if (storedName) setName(storedName);
    if (storedImage) setImage(storedImage);
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Name
    doc.setFontSize(22);
    doc.text(`Welcome, ${name}!`, 20, 30);

    // Quote
    doc.setFontSize(16);
    doc.text('“Believe in yourself and all that you are.”', 20, 50);

    // Add image (x, y, width, height)
    if (image) {
      doc.addImage(image, 'JPEG', 20, 60, 60, 60); // adjust size as needed
    }

    // Save
    doc.save(`${name}-certificate.pdf`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {name}!</h1>
      {image && (
        <img src={image} alt="Selfie" style={{ width: '150px', borderRadius: '8px' }} />
      )}
      <p>Download your personalized certificate below</p>
      <button
        onClick={downloadPDF}
        style={{
          background: '#8e60f2',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '10px',
          border: 'none',
          marginTop: '20px',
          cursor: 'pointer',
        }}
      >
        ⬇ Download Your Certificate
      </button>
    </div>
  );
};

export default Welcome;
