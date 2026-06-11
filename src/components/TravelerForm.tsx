"use client";

import { Traveler, AddonType } from "@/src/types/quote";

interface TravelerFormProps {
  traveler: Traveler;
  index: number;
  onChange: (index: number, traveler: Traveler) => void;
  onRemove: (index: number) => void;
}

export default function TravelerForm({
  traveler,
  index,
  onChange,
  onRemove,
}: TravelerFormProps) {
  const handleAddonChange = (addon: AddonType) => {
    const exists = traveler.adicionais.includes(addon);

    const updatedAddons = exists
      ? traveler.adicionais.filter((item) => item !== addon)
      : [...traveler.adicionais, addon];

    onChange(index, {
      ...traveler,
      adicionais: updatedAddons,
    });
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-600">
            Viajante
          </p>

          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
            Pessoa {index + 1}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => onRemove(index)}
          className="w-full rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50 sm:w-auto"
        >
          Remover
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Nome
          </label>

          <input
            type="text"
            value={traveler.nome}
            onChange={(e) =>
              onChange(index, {
                ...traveler,
                nome: e.target.value,
              })
            }
            placeholder="Ex: Myrela Almeida"
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Data de nascimento
          </label>

          <input
            type="date"
            value={traveler.data_nascimento}
            onChange={(e) =>
              onChange(index, {
                ...traveler,
                data_nascimento: e.target.value,
              })
            }
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-cyan-400"
          />
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-3 text-sm font-semibold text-slate-700">
          Adicionais
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-cyan-300">
            <input
              type="checkbox"
              checked={traveler.adicionais.includes("BAGAGEM")}
              onChange={() => handleAddonChange("BAGAGEM")}
              className="h-4 w-4 shrink-0 accent-cyan-500"
            />

            <span className="font-medium text-slate-800">Bagagem</span>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-cyan-300">
            <input
              type="checkbox"
              checked={traveler.adicionais.includes("ESPORTES_AVENTURA")}
              onChange={() => handleAddonChange("ESPORTES_AVENTURA")}
              className="h-4 w-4 shrink-0 accent-cyan-500"
            />

            <span className="font-medium text-slate-800">
              Esportes de aventura
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}