import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";

// ✅ Set up the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfFlipBookClient() {
  const [fileUrl, setFileUrl] = useState<string>("");
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [error, setError] = useState<string>("");

  // ✅ Client-only: safely set the absolute URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFileUrl(
        `https://localhost:7274/profile-images/4f89c91b-f4e6-46c4-b0e6-2013dd24edc5.pdf`
      );
      // setFileUrl(`${window.location.origin}/fire-report.pdf`);
    }
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setError("");
  };

  const goToPrevPage = () =>
    setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  const goToNextPage = () =>
    setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));

  return (
    <div className="flex flex-col items-center justify-center w-full py-10 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Fire Safety Compliance Report
      </h2>

      {!fileUrl && <p>Loading PDF...</p>}

      {fileUrl && (
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => {
            console.error("PDF Load Error:", err);
            setError("Failed to load PDF. Try downloading instead.");
          }}
        >
          <motion.div
            key={pageNumber}
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6 }}
            className="shadow-lg bg-white rounded-xl overflow-hidden"
          >
            <Page
              pageNumber={pageNumber}
              width={600}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </motion.div>
        </Document>
      )}

      {error && (
        <div className="mt-4 text-center text-red-500">
          <p>{error}</p>
          <a
            href={fileUrl}
            download
            className="text-blue-600 underline hover:text-blue-800"
          >
            Download PDF
          </a>
        </div>
      )}

      {numPages > 1 && !error && (
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <p className="text-gray-700">
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={goToNextPage}
            disabled={pageNumber === numPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
