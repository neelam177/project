
// "use client";
// import React from 'react';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

// const Cort = () => {
//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text('Sample Table Report', 20, 20);

//     autoTable(doc, {
//       startX: 30,
//       startY: 40,
//       head: [['Name', 'City', 'Phone No.']],
//       body: [
//         ['Bambo', 'World', '07066279211'],
//         ['Rachel', 'Los Angeles', '7845521'],
//         ['Harvey', 'Chicago', '9865371'],
//       ],
//     });

//     doc.save('example.pdf');
//   };

//   return (
//     <div>
//       <h2>PDF Generator</h2>
//       <button onClick={downloadPDF}>Download PDF</button>
//     </div>
//   );
// };

// export default Cort;


