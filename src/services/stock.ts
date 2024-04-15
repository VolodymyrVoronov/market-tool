import { IStockSearchResult } from "@/types";

import { finnhubAPIKey, finnhubURL } from "./finnhub";

interface IStockSearchResultResponse {
  count: number;
  result: IStockSearchResult[];
}

export const searchStock = async (
  query: string = ""
): Promise<IStockSearchResultResponse> => {
  const res = await fetch(
    `${finnhubURL}search?q=${query}&token=${finnhubAPIKey}`
  );

  const data = await res.json();

  return data;
};
