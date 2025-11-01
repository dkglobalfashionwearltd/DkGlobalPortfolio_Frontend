import { useEffect, useState } from "react";

// Lazy load your real viewer only in browser
export default function PdfFlipBookClient() {
  const [ClientComponent, setClientComponent] = useState<React.FC | null>(null);

  useEffect(() => {
    // Run only on browser
    if (typeof window !== "undefined") {
      import("./pdf-viewer").then((mod) => {
        setClientComponent(() => mod.default);
      });
    }
  }, []);

  if (!ClientComponent) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-gray-50">
        <div className="text-gray-500 text-sm animate-pulse">
          Loading PDF Viewer...
        </div>
      </div>
    );
  }

  const Comp = ClientComponent;
  return <Comp />;
}
