import { alphavantageAPIKey, alphavantageURL } from "./alphavantage";

export interface IMarket {
  market_type: string;
  region: string;
  primary_exchanges: string;
  local_open: string;
  local_close: string;
  current_status: string;
  notes?: string;
}

export interface IMarketStatus {
  endpoint: string;
  markets: IMarket;
}

export const getMarketStatus = async (): Promise<IMarketStatus> => {
  const response = await fetch(
    `${alphavantageURL}query?function=MARKET_STATUS&apikey=${alphavantageAPIKey}`
  );

  const data = await response.json();

  return data;
};
