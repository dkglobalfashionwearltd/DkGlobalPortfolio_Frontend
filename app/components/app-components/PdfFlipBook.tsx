import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type PdfFlipBookProps = { fileUrl: string };

const PdfFlipBook: React.FC<PdfFlipBookProps> = ({ fileUrl }) => {
  const [Document, setDocument] = useState<any>(null);
  const [Page, setPage] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      setPdfUrl(`${window.location.origin}${fileUrl}`); // absolute URL for fetch

      (async () => {
        const reactPdf = await import("react-pdf");
        setDocument(() => reactPdf.Document);
        setPage(() => reactPdf.Page);

        const { pdfjs } = reactPdf;
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      })();
    }
  }, [fileUrl]);

  if (!mounted || !Document || !Page || !pdfUrl) {
    return <div className="text-center text-gray-500 py-10">Loading PDF…</div>;
  }

  const nextPage = () => {
    if (pageNumber < numPages) setPageNumber((p) => p + 1);
  };
  const prevPage = () => {
    if (pageNumber > 1) setPageNumber((p) => p - 1);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3]">
        <Document
          file={pdfUrl}
          onLoadSuccess={(pdf: any) => setNumPages(pdf.numPages)}
          loading={<div className="text-gray-400">Loading document…</div>}
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="max-h-full object-contain"
          />
        </Document>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={pageNumber <= 1}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
        >
          ◀
        </button>
        <span className="text-sm text-gray-600">
          Page {pageNumber} of {numPages}
        </span>
        <button
          onClick={nextPage}
          disabled={pageNumber >= numPages}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default PdfFlipBook;
