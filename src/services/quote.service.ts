import axios from "axios";
import { QuoteRequest, QuoteResponse } from "@/src/types/quote";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const quoteService = {
  async createQuote(
    data: QuoteRequest
  ): Promise<QuoteResponse> {
    const response = await api.post<QuoteResponse>(
      "/api/quotes",
      data
    );

    return response.data;
  },

  async getQuotes() {
    const response = await api.get("/api/quotes");

    return response.data;
  },
};