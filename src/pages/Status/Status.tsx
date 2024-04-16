import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";

import { getMarketHolidays, getMarketStatus } from "@/services/status";

import Holiday from "@/components/Holiday/Holiday";
import HolidaysGrid from "@/components/HolidaysGrid/HolidaysGrid";
import Spinner from "@/components/Spinner/Spinner";
import StatusBar from "@/components/StatusBar/StatusBar";
import { Badge } from "@/components/ui/badge";
import TodayHolyday from "@/components/TodayHolyday/TodayHolyday";

const Status = () => {
  const {
    data: marketStatus,
    error: marketStatusError,
    isLoading: marketStatusIsLoading,
  } = useQuery({
    queryKey: ["market-status"],
    queryFn: getMarketStatus,
  });

  const {
    data: holidays,
    error: holidaysError,
    isLoading: holidaysIsLoading,
  } = useQuery({
    queryKey: ["market-holidays"],
    queryFn: getMarketHolidays,
  });

  if (marketStatusIsLoading || holidaysIsLoading)
    return (
      <div className="flex justify-center items-center h-[100%]">
        <Spinner />
      </div>
    );

  if (marketStatusError || holidaysError)
    return (
      <div>
        Error: {marketStatusError?.message} {holidaysError?.message}
      </div>
    );

  const holidayYears = [
    ...new Set(holidays?.data.map((holiday) => +holiday.atDate.split("-")[0])),
  ];

  const holidaysByYear = (year: number) => {
    return holidays?.data
      .filter((holiday) => holiday.atDate.includes(year.toString()))
      .map((holiday, index) => (
        <Fragment key={holiday.eventName + index}>
          <Holiday {...holiday} />
        </Fragment>
      ));
  };

  const holidaysByYears = (years: number[]) => {
    return years.map((year, index) => (
      <Fragment key={index}>
        <HolidaysGrid year={year}>{holidaysByYear(year)}</HolidaysGrid>
      </Fragment>
    ));
  };

  const todaysHoliday = holidays?.data.find(
    (holiday) => holiday.atDate === new Date().toISOString().split("T")[0]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 w-full">
      <div className="flex flex-col items-center">
        <h2 className="mb-2 text-xl">Market Status</h2>

        {marketStatus ? (
          <StatusBar {...marketStatus} />
        ) : (
          <Badge variant="destructive">No information available</Badge>
        )}

        <div className="mt-5 w-full">
          {todaysHoliday ? (
            <TodayHolyday {...todaysHoliday} />
          ) : (
            <Badge className="w-full flex justify-center bg-green-400 text-lg">
              No holiday for today
            </Badge>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="mb-2 text-xl">Market Holidays</h2>

        {holidaysByYears(holidayYears)}
      </div>
    </div>
  );
};

export default Status;
