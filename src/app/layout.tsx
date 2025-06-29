import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Prática de Inovação 5",
    template: "%s - Prática de Inovação 5",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning>
        <head />
        <body className="grid min-h-dvh grid-rows-[1fr_max-content]">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

function Footer() {
  return (
    <div className="w-full border-t border-zinc-700">
      <div className="mx-auto flex h-full w-full max-w-screen-2xl flex-col items-center justify-between gap-12 px-4 py-16 md:flex-row md:gap-0 md:py-8">
        <div className="flex flex-col">
          <span className="mb-1 text-zinc-400">Desenvolvido por:</span>
          <span>Vinicius Bautitz Tengaten</span>
          <span>Andrey Teodoro Alves de Lima</span>
          <span>Bianca Eduarda França</span>
        </div>
        <Link href="https://udc.edu.br" target="_blank">
          <Image
            src={"/logo-udc.png"}
            alt="Logo UDC"
            title="Logo UDC"
            height={128}
            width={128}
            className="object-scale-down"
          />
        </Link>
      </div>
    </div>
  );
}
