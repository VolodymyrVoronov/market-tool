import { ICompanyProfile } from "@/types";

import { finnhubAPIKey, finnhubURL } from "./finnhub";

export const getCompanyProfile = async (
  symbol: string = ""
): Promise<ICompanyProfile> => {
  const res = await fetch(
    `${finnhubURL}/stock/profile2?symbol=${symbol}&token=${finnhubAPIKey}`
  );

  const data = await res.json();

  return data;
};
