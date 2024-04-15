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

export interface IMarketStatus {
  exchange: string;
  holiday: null;
  isOpen: boolean;
  session: string;
  t: number;
  timezone: string;
}

export interface IHoliday {
  eventName: string;
  atDate: string;
  tradingHour: string;
}
