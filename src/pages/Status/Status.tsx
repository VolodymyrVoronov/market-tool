import { useQuery } from "@tanstack/react-query";

import { getMarketStatus } from "@/services/apiMarketStatus";

import Spinner from "@/components/Spinner/Spinner";
import StatusCard from "@/components/StatusCard/StatusCard";
import { Separator } from "@/components/ui/separator";

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

  if (!marketStatus) return <div>No data</div>;

  console.log(marketStatus);

  const { endpoint, markets } = marketStatus;

  return (
    <div className="flex flex-col gap-5">
      <span className="flex flex-col gap-1">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
          {endpoint}
        </h1>
        <span>Last updated: {new Date().toLocaleString()}</span>
      </span>

      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {markets.map(
          ({
            market_type,
            region,
            primary_exchanges,
            local_open,
            local_close,
            current_status,
            notes,
          }) => (
            <StatusCard
              key={self.crypto.randomUUID()}
              market_type={market_type}
              region={region}
              primary_exchanges={primary_exchanges}
              local_open={local_open}
              local_close={local_close}
              current_status={current_status}
              notes={notes}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Status;
