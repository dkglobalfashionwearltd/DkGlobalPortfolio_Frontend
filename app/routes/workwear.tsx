import React from "react";
import PdfFlipBookClient from "~/components/app-components/pdf-client";

const Workwear = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <PdfFlipBookClient
        pdfUrl1="/Company-Profile.pdf"
        title="Work Wear Profile"
      />
    </div>
  );
};

export default Workwear;
