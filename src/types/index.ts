export type NewsCategory = "general" | "forex" | "crypto" | "merger";

export interface INews {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

export interface IStockSearchResult {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}
