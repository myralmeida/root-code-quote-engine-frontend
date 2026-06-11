"use client";

import { useState } from "react";
import TravelerForm from "./TravelerForm";
import QuoteResult from "./QuoteResult";
import { useQuoteStore } from "@/src/store/quote.store";
import { DestinationZone, Traveler } from "@/src/types/quote";

export default function QuoteForm() {
  const { quote, loading, error, createQuote } = useQuoteStore();

  const [destino, setDestino] = useState<DestinationZone>("EUROPA");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  const [viajantes, setViajantes] = useState<Traveler[]>([
    {
      nome: "",
      data_nascimento: "",
      adicionais: [],
    },
  ]);

  const handleTravelerChange = (index: number, updatedTraveler: Traveler) => {
    const updatedTravelers = [...viajantes];
    updatedTravelers[index] = updatedTraveler;
    setViajantes(updatedTravelers);
  };

  const handleAddTraveler = () => {
    setViajantes([
      ...viajantes,
      {
        nome: "",
        data_nascimento: "",
        adicionais: [],
      },
    ]);
  };

  const handleRemoveTraveler = (index: number) => {
    if (viajantes.length === 1) return;

    setViajantes(viajantes.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createQuote({
      destino,
      data_inicio: dataInicio,
      data_fim: dataFim,
      viajantes,
    });
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <section className="overflow-hidden rounded-3xl bg-[#0b2f4a] text-white shadow-xl">
        <div className="bg-gradient-to-br from-[#0b2f4a] via-[#0f4264] to-[#071d2e] px-5 py-8 sm:px-8 md:px-12 md:py-10">
          <span className="mb-4 inline-flex rounded-full bg-cyan-400/15 px-4 py-2 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-300/30 sm:text-sm">
            Motor de Cotação
          </span>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Cotação de Seguro Viagem
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            Calcule o valor final com base no destino, período da viagem,
            perfil dos viajantes e adicionais contratados.
          </p>
        </div>
      </section>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-6 md:p-8"
      >
        <h2 className="mb-6 text-xl font-bold text-slate-900 sm:text-2xl">
          Dados da viagem
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Destino
            </label>

            <select
              value={destino}
              onChange={(e) => setDestino(e.target.value as DestinationZone)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
            >
              <option value="NACIONAL">Nacional</option>
              <option value="AMERICAS">Américas</option>
              <option value="EUROPA">Europa</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Data início
            </label>

            <input
              type="date"
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Data fim
            </label>

            <input
              type="date"
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white"
            />
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Viajantes
            </h2>

            <button
              type="button"
              onClick={handleAddTraveler}
              className="w-full rounded-full bg-cyan-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 sm:w-auto"
            >
              + Adicionar viajante
            </button>
          </div>

          <div className="space-y-5">
            {viajantes.map((traveler, index) => (
              <TravelerForm
                key={index}
                traveler={traveler}
                index={index}
                onChange={handleTravelerChange}
                onRemove={handleRemoveTraveler}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-8 h-14 w-full rounded-full bg-[#10b8ee] text-base font-bold text-white shadow-xl shadow-cyan-500/25 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Calculando..." : "Calcular cotação"}
        </button>
      </form>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 font-medium text-red-600">
          {error}
        </div>
      )}

      {quote && <QuoteResult quote={quote} />}
    </div>
  );
}