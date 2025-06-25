"use client";

import dynamic from "next/dynamic";

const PDFViewerBase = dynamic(() => import("./base"), {
  ssr: false,
});

export default function PDFViewer({ src }: { src: string }) {
  return <PDFViewerBase src={src} />;
}
