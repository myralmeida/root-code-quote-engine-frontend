export type DestinationZone = "NACIONAL" | "AMERICAS" | "EUROPA";

export type AddonType = "BAGAGEM" | "ESPORTES_AVENTURA";

export interface Traveler {
  nome: string;
  data_nascimento: string;
  adicionais: AddonType[];
}

export interface QuoteRequest {
  destino: DestinationZone;
  data_inicio: string;
  data_fim: string;
  viajantes: Traveler[];
}

export interface CalculatedTraveler {
  nome: string;
  idade: number;
  subtotal: number;
  adicionais_aplicados: AddonType[];
}

export interface QuoteResponse {
  dias_cobrados: number;
  viajantes: CalculatedTraveler[];
  avisos: string[];
  desconto_grupo_percentual: number;
  total_final: number;
}