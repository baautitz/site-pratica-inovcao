import Image from "next/image";
import Link from "next/link";
import grupos from "../../grupos";

export const metadata = {
  title: "Linguagem C - Prática de Inovação 5",
};

export default async function Home() {
  return (
    <main>
      <section className="mx-auto">
        <div className="from-primary/30 relative flex h-58 items-center justify-center bg-gradient-to-b to-zinc-950 lg:h-96">
          <div className="absolute mx-auto flex w-full flex-col items-center justify-center p-4 text-center">
            <h1 className="mb-4 flex items-center gap-4 text-4xl font-bold lg:text-6xl">
              <Image
                src={"/logo-c.png"}
                height={48}
                width={48}
                alt="Logo Linguagem C"
              />{" "}
              Linguagem C
            </h1>
            <h2 className="max-w-4xl text-base lg:text-2xl">
              Conjunto de materias de introdução a Linguagem C. <br />
              Projeto criado para disciplina de Prática de Inovação 5.
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-zinc-950 to-zinc-900 py-6 lg:py-24">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col px-4 py-8">
          <div className="mb-8 flex flex-col">
            <span className="text-2xl font-bold">Módulos</span>
            <span>
              Os materiais são separados por módulos, no qual é apresentado por
              um grupo de alunos diferente.
            </span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] justify-center gap-4">
            {grupos.map((grupo, idx) => (
              <VideoCard
                key={grupo.slug}
                slug={grupo.slug}
                titulo={grupo.titulo}
                descricao={grupo.resumo}
                number={idx + 1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function VideoCard({
  slug,
  titulo,
  descricao,
  number,
}: {
  slug: string;
  titulo: string;
  descricao: string;
  number: number;
}) {
  return (
    <Link
      href={`/${slug}`}
      className="group grid aspect-square cursor-pointer grid-rows-[1fr_max-content] overflow-hidden rounded-xl border border-zinc-700 transition-all hover:border-zinc-500"
    >
      <div className="bg-primary/20 relative block">
        <Image
          src={`/thumbnails/${number}.png`}
          alt={titulo}
          className="object-cover"
          fill
          unoptimized
        />
      </div>
      <div className="bottom-0 flex w-full flex-col bg-zinc-950 p-4 transition-all group-hover:rounded-lg group-hover:pb-8">
        <span className="mb-2 font-bold text-white">{titulo}</span>
        <span className="h-[4lh] text-white">{descricao}</span>
      </div>
    </Link>
  );
}
