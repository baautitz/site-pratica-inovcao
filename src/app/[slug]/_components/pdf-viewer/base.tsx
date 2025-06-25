"use client";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PDFViewer({ src }: { src: string }) {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={src}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={null}
      className="mx-auto h-full w-fit [&_canvas]:!size-full [&_canvas]:!object-scale-down [&>div]:h-full"
    >
      {Array.from({ length: numPages || 0 }, (_, index) => (
        <div key={`page_wrapper_${index + 1}`} className="mb-4">
          <Page
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            className="h-full"
          />
        </div>
      ))}
    </Document>
  );
}
