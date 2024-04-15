import { IMarketStatus, IHoliday } from "@/types";

import { finnhubAPIKey, finnhubURL } from "./finnhub";

export const getMarketStatus = async (): Promise<IMarketStatus> => {
  const res = await fetch(
    `${finnhubURL}stock/market-status?exchange=US&token=${finnhubAPIKey}`
  );

  const data = await res.json();

  return data;
};

interface IHolidaysResponse {
  data: IHoliday[];
}

export const getMarketHolidays = async (): Promise<IHolidaysResponse> => {
  const res = await fetch(
    `${finnhubURL}stock/market-holiday?exchange=US&token=${finnhubAPIKey}`
  );

  const data = await res.json();

  return data;
};
