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

export interface ICompanyProfile {
  country: string;
  currency: string;
  estimateCurrency: string;
  exchange: string;
  finnhubIndustry: string;
  ipo: string;
  logo: string;
  marketCapitalization: number;
  name: string;
  phone: string;
  shareOutstanding: number;
  ticker: string;
  weburl: string;
}
