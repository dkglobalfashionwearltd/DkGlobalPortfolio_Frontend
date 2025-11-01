import React from "react";
import PdfFlipBookClient from "~/components/app-components/pdf-client";

const Outerwear = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <PdfFlipBookClient
        pdfUrl1="/Company-Profile.pdf"
        title="Outer Wear Profile"
      />
    </div>
  );
};

export default Outerwear;
