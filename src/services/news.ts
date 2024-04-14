import { INews, NewsCategory } from "@/types";

import { finnhubAPIKey, finnhubURL } from "./finnhub";

export const getMarketNews = async (
  category: NewsCategory = "general"
): Promise<INews[]> => {
  const res = await fetch(
    `${finnhubURL}news?category=${category}&token=${finnhubAPIKey}`
  );

  const data = await res.json();

  return data;
};
