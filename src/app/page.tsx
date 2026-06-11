import Image from "next/image";
import QuoteForm from "@/src/components/QuoteForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Image
              src="/rootcode.jpeg"
              alt="Root Code"
              width={180}
              height={80}
              className="h-auto w-36 rounded-lg bg-white p-2 sm:w-44"
              priority
            />

            <div>
              <h1 className="text-base font-bold text-slate-900 sm:text-lg">
                Travel Insurance Quote Engine
              </h1>

              <p className="text-sm text-slate-500">
                Desafio Técnico Root Code
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-8">
        <QuoteForm />
      </div>
    </main>
  );
}