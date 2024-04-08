import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";

import { getTicker } from "@/services/apiTickerSearch";

import Spinner from "@/components/Spinner/Spinner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

  const onInputSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-5">
        <Input
          className="max-w-[300px]"
          type="text"
          placeholder="AAPL"
          onChange={onInputSearchChange}
        />

        {ticker.bestMatches.map((item) => (
          <Button key={item.symbol} variant="outline">
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Stock;
