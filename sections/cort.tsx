"use client";
import React, { useState ,useEffect } from 'react';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

  const nurseQuotes: string[] = [
    "Nurses are the heart of healthcare.",
    "Saving lives is a daily job for nurses.",
    "Nursing is a work of heart.",
    "Every nurse was drawn to nursing because of a desire to care, to serve, or to help.",
    "Nurses: one of the few blessings of being ill.",
    "Compassion is the nurse's greatest tool.",
    "Nurses are angels in comfortable shoes.",
    "Caring is the essence of nursing.",
    "Behind every successful recovery is a nurse who cared.",
    "A nurse will always give us hope — an angel with a stethoscope.",
    "To do what nobody else will do, in a way that nobody else can, is to be a nurse.",
    "The character of the nurse is as important as the knowledge she possesses."
    ];



function getRandomQuote(): string {
  const index = Math.floor(Math.random() * nurseQuotes.length);
  return nurseQuotes[index];
} 


const cort = () => {
      const [quote, setQuote] = useState<string>("");
      


  useEffect(() => {
    const savedQuote = localStorage.getItem("nurseQuote");

    if (savedQuote) {
      // Agar pehle se localStorage me hai to wahi show karo
      setQuote(savedQuote);
    } else {
      // Nahi to random quote generate karke localStorage me save karo
      const random = getRandomQuote();
      localStorage.setItem("nurseQuote", random);
      setQuote(random);
    }
  }, []);



 return (
    <div style={{ padding: "20px", fontSize: "20px", fontStyle: "italic" }}>
      <h2>Quote of the Day</h2>
      <p>{quote}</p>
     
    </div>
  );
};
export default cort



