import { useQuery } from "@tanstack/react-query";

import { getMarketStatus, getMarketHolidays } from "@/services/status";

import Spinner from "@/components/Spinner/Spinner";

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

  console.log(marketStatus, holidays);

  return <div className="flex flex-col gap-5"></div>;
};

export default Status;
