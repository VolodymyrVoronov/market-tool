import { alphavantageAPIKey, alphavantageURL } from "./alphavantage";

export interface ITopGainersLosers {
  metadata: string;
  last_updated: string;
  top_gainers: {
    ticker: string;
    price: string;
    change_amount: string;
    change_percentage: string;
    volume: string;
  }[];
  top_losers: {
    ticker: string;
    price: string;
    change_amount: string;
    change_percentage: string;
    volume: string;
  }[];
  most_actively_traded: {
    ticker: string;
    price: string;
    change_amount: string;
    change_percentage: string;
    volume: string;
  }[];
}

export const getTopGainersLosers = async (): Promise<ITopGainersLosers> => {
  const response = await fetch(
    `${alphavantageURL}query?function=TOP_GAINERS_LOSERS&apikey=${alphavantageAPIKey}`
  );

  const data = await response.json();

  return data;
};
