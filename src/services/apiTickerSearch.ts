import { alphavantageAPIKey, alphavantageURL } from "./alphavantage";

export interface ITicker {
  bestMatches: {
    symbol: string;
    name: string;
    type: string;
    region: string;
    marketOpen: string;
    marketClose: string;
    timezone: string;
    currency: string;
    matchScore: string;
  }[];
}

export const getTicker = async (query: string): Promise<ITicker> => {
  const response = await fetch(
    `${alphavantageURL}query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${alphavantageAPIKey}`
  );

  const data = await response.json();

  if (!data.bestMatches) {
    return {
      bestMatches: [],
    };
  }

  const convertedData: ITicker = {
    bestMatches: data?.bestMatches.map((item: { [key: string]: string }) => ({
      symbol: item["1. symbol"],
      name: item["2. name"],
      type: item["3. type"],
      region: item["4. region"],
      marketOpen: item["5. marketOpen"],
      marketClose: item["6. marketClose"],
      timezone: item["7. timezone"],
      currency: item["8. currency"],
      matchScore: item["9. matchScore"],
    })),
  };

  return convertedData;
};
