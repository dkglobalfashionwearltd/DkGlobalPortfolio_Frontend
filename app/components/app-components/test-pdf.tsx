import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type PdfFlipBookProps = { fileUrl: string };

const PdfFlipBook: React.FC<PdfFlipBookProps> = ({ fileUrl }) => {
  const [Document, setDocument] = useState<any>(null);
  const [Page, setPage] = useState<any>(null);
  const [pdfjs, setPdfjs] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);

    // Only run on client side
    if (typeof window !== "undefined") {
      // Handle both relative and absolute URLs
      const absoluteUrl = fileUrl.startsWith("http")
        ? fileUrl
        : `${window.location.origin}${fileUrl.startsWith("/") ? fileUrl : `/${fileUrl}`}`;

      setPdfUrl(absoluteUrl);

      const loadPdfLibrary = async () => {
        try {
          setIsLoading(true);
          const reactPdf = await import("react-pdf");
          const { pdfjs } = reactPdf;

          // Set worker source
          pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

          setDocument(() => reactPdf.Document);
          setPage(() => reactPdf.Page);
          setPdfjs(pdfjs);
          setError(null);
        } catch (err) {
          console.error("Failed to load PDF library:", err);
          setError("Failed to load PDF viewer");
        } finally {
          setIsLoading(false);
        }
      };

      loadPdfLibrary();
    }
  }, [fileUrl]);

  const onDocumentLoadSuccess = (pdf: any) => {
    setNumPages(pdf.numPages);
    setIsLoading(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error("Failed to load PDF:", error);
    setError("Failed to load PDF document");
    setIsLoading(false);
  };

  const nextPage = () => {
    if (pageNumber < numPages) setPageNumber((p) => p + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) setPageNumber((p) => p - 1);
  };

  // Show loading state
  if (!mounted || isLoading) {
    return (
      <div className="w-full max-w-3xl mx-auto p-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3] flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-2"></div>
            Loading PDF…
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="w-full max-w-3xl mx-auto p-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3] flex items-center justify-center">
          <div className="text-center text-red-500">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            {error}
          </div>
        </div>
      </div>
    );
  }

  // Check if PDF components are available
  if (!Document || !Page) {
    return (
      <div className="w-full max-w-3xl mx-auto p-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3] flex items-center justify-center">
          <div className="text-center text-gray-500">
            PDF viewer not available
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={pageNumber}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3]">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-gray-400">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
                    Loading document…
                  </div>
                </div>
              }
              error={
                <div className="flex items-center justify-center h-full text-red-500">
                  Failed to load PDF
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="max-h-full object-contain"
                loading={
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-400">
                      Loading page {pageNumber}…
                    </div>
                  </div>
                }
              />
            </Document>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={pageNumber <= 1}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40 transition-colors"
          aria-label="Previous page"
        >
          ◀
        </button>

        <span className="text-sm text-gray-600 font-medium">
          Page {pageNumber} of {numPages}
        </span>

        <button
          onClick={nextPage}
          disabled={pageNumber >= numPages}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40 transition-colors"
          aria-label="Next page"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default PdfFlipBook;
