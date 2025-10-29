import React, { useEffect, useState } from "react";

type PdfFlipBookProps = { fileUrl: string };

const PdfFlipBook: React.FC<PdfFlipBookProps> = ({ fileUrl }) => {
  const [ClientComponent, setClientComponent] =
    useState<React.FC<PdfFlipBookProps> | null>(null);

  useEffect(() => {
    // Dynamically import the PDF component only in the browser
    import("./PdfFlipBook").then((mod) => {
      setClientComponent(() => mod.default);
    });
  }, []);

  if (!ClientComponent) {
    return (
      <div className="w-full max-w-3xl mx-auto p-4 text-center text-gray-500">
        Loading PDF viewer…
      </div>
    );
  }

  return <ClientComponent fileUrl={fileUrl} />;
};

export default PdfFlipBook;
