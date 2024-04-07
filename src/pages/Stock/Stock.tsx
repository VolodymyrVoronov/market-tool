import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";

import { getTicker } from "@/services/apiTickerSearch";

import Spinner from "@/components/Spinner/Spinner";
import { Input } from "@/components/ui/input";

const Stock = (): JSX.Element => {
  const queryClient = useQueryClient();

  const [query, setQuery] = useDebounceValue("", 500);

  const {
    data: ticker,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["ticker"],
    queryFn: () => getTicker(query),
  });

  useEffect(() => {
    if (query !== "") {
      queryClient.invalidateQueries({
        queryKey: ["ticker"],
      });
    }
  }, [query, queryClient]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[100%]">
        <Spinner />
      </div>
    );

  if (error) return <div>Error</div>;
  if (!ticker) return <div>No data</div>;

  console.log(ticker);

  if (ticker.bestMatches.length) return <div>No data available right now</div>;

  const onInputSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Input
        onChange={onInputSearchChange}
        type="text"
        placeholder="AAPL"
        className=""
      />
    </div>
  );
};

export default Stock;
