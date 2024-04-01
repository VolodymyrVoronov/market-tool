import { useQuery } from "@tanstack/react-query";

import { getMarketStatus, IMarketStatus } from "@/services/apiMarketStatus";

import Spinner from "@/components/Spinner/Spinner";
import { Separator } from "@/components/ui/separator";

const mock: IMarketStatus = {
  endpoint: "Global Market Open & Close Status",
  markets: [
    {
      market_type: "Equity",
      region: "United States",
      primary_exchanges: "NASDAQ, NYSE, AMEX, BATS",
      local_open: "09:30",
      local_close: "16:15",
      current_status: "closed",
      notes: "",
    },
    {
      market_type: "Equity",
      region: "Canada",
      primary_exchanges: "Toronto, Toronto Ventures",
      local_open: "09:30",
      local_close: "16:00",
      current_status: "closed",
      notes: "",
    },
    {
      market_type: "Equity",
      region: "United Kingdom",
      primary_exchanges: "London",
      local_open: "08:00",
      local_close: "16:30",
      current_status: "open",
      notes: "",
    },
    {
      market_type: "Equity",
      region: "Germany",
      primary_exchanges: "XETRA, Berlin, Frankfurt, Munich, Stuttgart",
      local_open: "08:00",
      local_close: "20:00",
      current_status: "open",
      notes: "",
    },
    {
      market_type: "Equity",
      region: "France",
      primary_exchanges: "Paris",
      local_open: "09:00",
      local_close: "17:30",
      current_status: "open",
      notes: "",
    },
    {
      market_type: "Equity",
      region: "Spain",
      primary_exchanges: "Barcelona, Madrid",
      local_open: "09:00",
      local_close: "17:30",
      current_status: "open",
      notes: "",
    },
    {
      market_type: "Equity",
      region: "Portugal",
      primary_exchanges: "Lisbon",
      local_open: "08:00",
      local_close: "16:30",
      current_status: "open",
      notes: "",
    },
    {
      market_type: "Equity",
      region: "Japan",
      primary_exchanges: "Tokyo",
      local_open: "09:00",
      local_close: "15:00",
      current_status: "closed",
      notes: "Noon trading break from 11:30 to 12:30 local time",
    },
    {
      market_type: "Equity",
      region: "India",
      primary_exchanges: "NSE, BSE",
      local_open: "09:15",
      local_close: "15:30",
      current_status: "closed",
      notes: "",
    },
    {
      market_type: "Equity",
      region: "Mainland China",
      primary_exchanges: "Shanghai, Shenzhen",
      local_open: "09:30",
      local_close: "15:00",
      current_status: "closed",
      notes: "Noon trading break from 11:30 to 13:00 local time",
    },
    {
      market_type: "Equity",
      region: "Hong Kong",
      primary_exchanges: "Hong Kong",
      local_open: "09:30",
      local_close: "16:00",
      current_status: "closed",
      notes: "Noon trading break from 12:00 to 13:00 local time",
    },
    {
      market_type: "Equity",
      region: "Brazil",
      primary_exchanges: "Sao Paolo",
      local_open: "10:00",
      local_close: "17:30",
      current_status: "closed",
      notes: "",
    },
    {
      market_type: "Equity",
      region: "Mexico",
      primary_exchanges: "Mexico",
      local_open: "08:30",
      local_close: "15:00",
      current_status: "closed",
      notes: "",
    },
    {
      market_type: "Equity",
      region: "South Africa",
      primary_exchanges: "Johannesburg",
      local_open: "09:00",
      local_close: "17:00",
      current_status: "open",
      notes: "",
    },
    {
      market_type: "Forex",
      region: "Global",
      primary_exchanges: "Global",
      local_open: "00:00",
      local_close: "23:59",
      current_status: "open",
      notes:
        "The forex market is open 24 hours a day, EXCEPT between 16:00 EST on Friday and 17:00 EST on Sunday",
    },
    {
      market_type: "Cryptocurrency",
      region: "Global",
      primary_exchanges: "Global",
      local_open: "00:00",
      local_close: "23:59",
      current_status: "open",
      notes: "The cryptocurrency market is open 24 hours a day",
    },
  ],
};

const Status = () => {
  const {
    data: marketStatus,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["marketStatus"],
    queryFn: getMarketStatus,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[100%]">
        <Spinner />
      </div>
    );
  if (error) return <div>Error</div>;

  console.log(marketStatus);

  const {
    endpoint,
    markets: {
      market_type,
      region,
      primary_exchanges,
      local_open,
      local_close,
      current_status,
      notes,
    },
  } = mock;

  return (
    <div className="flex flex-col gap-5">
      <span className="flex flex-col gap-1">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Global Market Open & Close Status
        </h1>
        <span>Last updated: {new Date().toLocaleString()}</span>
      </span>

      <Separator />
    </div>
  );
};

export default Status;
