import { alphavantageAPIKey, alphavantageURL } from "./alphavantage";

export interface IInfo {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
  volume: string;
}

export interface ITopGainersLosers {
  metadata: string;
  last_updated: string;
  top_gainers: IInfo[];
  top_losers: IInfo[];
  most_actively_traded: IInfo[];
}

export const getTopGainersLosers = async (): Promise<ITopGainersLosers> => {
  const response = await fetch(
    `${alphavantageURL}query?function=TOP_GAINERS_LOSERS&apikey=${alphavantageAPIKey}`
  );

  const data = await response.json();

  return data;
};
