"use server";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import VideoPlayer from "./_components/video-player";
import grupos from "../../../grupos";
import { notFound } from "next/navigation";
import PDFViewer from "./_components/pdf-viewer";

function getGrupoBySlug(slug: string) {
  return grupos.find((grupo) => grupo.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const grupo = getGrupoBySlug(slug);
  if (!grupo) return notFound();

  return {
    title: grupo.titulo,
  };
}

export default async function MaterialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = getGrupoBySlug(slug);
  if (!data) notFound();

  return (
    <main className="bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="mx-auto mb-8 w-full max-w-screen-2xl px-4 pt-12 pb-12">
        <Link
          href={"/"}
          className="relative flex w-fit gap-2 after:absolute after:-bottom-1 after:w-full after:bg-white after:py-[1px] after:opacity-0 after:transition-all after:content-[''] hover:after:opacity-100"
        >
          <ArrowLeft /> Voltar para o início
        </Link>
      </div>

      <section className="mx-auto mb-12 flex w-full max-w-screen-2xl flex-col px-4 text-center">
        <h1 className="mb-4 gap-4 text-4xl font-bold lg:text-6xl">
          {data.titulo}
        </h1>
        <h2 className="text-base lg:text-2xl">{data.descricao}</h2>
      </section>

      <section className="mx-auto mb-6 flex w-full max-w-screen-2xl flex-col px-4">
        <div className="mb-8 aspect-video w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">
          <VideoPlayer
            src={`https://assets.vnici.us/${slug}/videos/output.m3u8`}
          />
        </div>
      </section>

      <section className="lg:pb-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-8">
          <div className="mb-6 flex flex-col gap-1">
            <span className="text-2xl font-bold">Materiais</span>
            <span>Documentos em PDF e livros necessários para seu estudo.</span>
          </div>

          <div className="mb-6 aspect-[9/16] w-full overflow-x-auto rounded-xl border border-zinc-700 bg-zinc-900 lg:aspect-[16/10]">
            <PDFViewer src={`https://assets.vnici.us/${slug}/material.pdf`} />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-6 text-left text-white shadow-md">
              <h3 className="text-xl font-semibold text-white">
                Alunos participantes do grupo:
              </h3>
              <div className="flex flex-col gap-0 text-zinc-300">
                {[...data.alunos]
                  .sort((a, b) =>
                    a.localeCompare(b, "pt", { sensitivity: "base" }),
                  )
                  .map((aluno) => (
                    <span key={aluno}>{aluno}</span>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6 text-white shadow-lg lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h4 className="text-lg font-bold">{data.livro.titulo}</h4>
                <p className="text-zinc-300">
                  Autor: {data.livro.autor} <br />
                  Ano de lançamento: {data.livro.ano}
                </p>
              </div>
              <Button asChild size="lg" className="w-fit">
                <Link
                  href={`https://assets.vnici.us/${slug}/livro.pdf`}
                  target="_blank"
                  download={`${data.livro.titulo}.pdf`}
                >
                  <Download /> Baixar livro
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
