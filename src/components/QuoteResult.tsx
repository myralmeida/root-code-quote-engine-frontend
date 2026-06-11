import { QuoteResponse } from "@/src/types/quote";

interface QuoteResultProps {
  quote: QuoteResponse;
}

export default function QuoteResult({ quote }: QuoteResultProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-6 md:p-8">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
            Resultado
          </p>

          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Cotação detalhada
          </h2>
        </div>

        <div className="w-full rounded-full bg-[#0b2f4a] px-6 py-3 text-center text-lg font-bold text-white sm:w-auto">
          R$ {quote.total_final.toFixed(2)}
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm font-medium text-slate-500">
            Dias cobrados
          </p>

          <p className="mt-1 text-3xl font-bold text-slate-900">
            {quote.dias_cobrados}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm font-medium text-slate-500">
            Desconto de grupo
          </p>

          <p className="mt-1 text-3xl font-bold text-slate-900">
            {quote.desconto_grupo_percentual}%
          </p>
        </div>

        <div className="rounded-2xl bg-cyan-50 p-5">
          <p className="text-sm font-medium text-cyan-700">
            Total final
          </p>

          <p className="mt-1 text-3xl font-bold text-cyan-700">
            R$ {quote.total_final.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {quote.viajantes.map((traveler, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="break-words text-lg font-bold text-slate-900">
                  {traveler.nome}
                </h3>

                <p className="text-sm text-slate-500">
                  {traveler.idade} anos
                </p>
              </div>

              <p className="text-xl font-bold text-slate-900">
                R$ {traveler.subtotal.toFixed(2)}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {traveler.adicionais_aplicados.length === 0 ? (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-500">
                  Nenhum adicional aplicado
                </span>
              ) : (
                traveler.adicionais_aplicados.map((addon) => (
                  <span
                    key={addon}
                    className="break-words rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700"
                  >
                    {addon}
                  </span>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      {quote.avisos.length > 0 && (
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="mb-2 font-bold text-amber-800">Avisos</h3>

          <ul className="list-disc space-y-1 pl-5 text-amber-700">
            {quote.avisos.map((warning, index) => (
              <li key={index} className="break-words">
                {warning}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}