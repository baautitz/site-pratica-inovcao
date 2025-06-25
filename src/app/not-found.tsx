import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main>
      <section className="mx-auto h-full">
        <div className="relative flex h-full items-center justify-center bg-gradient-to-b from-red-500/30 to-zinc-950">
          <div className="absolute mx-auto flex w-full flex-col items-center justify-center p-4 text-center">
            <h1 className="mb-4 flex items-center gap-4 text-4xl font-bold text-white lg:text-6xl">
              <Image
                src="/logo-c.png"
                height={48}
                width={48}
                alt="Logo Linguagem C"
              />
              Página não encontrada
            </h1>
            <h2 className="mb-4 block max-w-4xl text-base text-zinc-300 lg:text-2xl">
              Ops! A página que você está tentando acessar não existe ou foi
              movida.
              <br />
              Volte para a página inicial ou explore os módulos disponíveis.
            </h2>
            <Button asChild>
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
