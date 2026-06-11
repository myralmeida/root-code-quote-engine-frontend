import { create } from "zustand";
import { QuoteRequest, QuoteResponse } from "@/src/types/quote";
import { quoteService } from "@/src/services/quote.service";

interface QuoteStore {
  quote: QuoteResponse | null;
  loading: boolean;
  error: string | null;

  createQuote: (data: QuoteRequest) => Promise<void>;
  clearQuote: () => void;
}

export const useQuoteStore = create<QuoteStore>((set) => ({
  quote: null,
  loading: false,
  error: null,

  createQuote: async (data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const quote = await quoteService.createQuote(data);

      set({
        quote,
        loading: false,
      });
    } catch {
      set({
        error: "Erro ao calcular cotação. Verifique os dados e tente novamente.",
        loading: false,
      });
    }
  },

  clearQuote: () => {
    set({
      quote: null,
      error: null,
    });
  },
}));