import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";


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
    queryKey: ["data"],
    queryFn: () => {},
  });

  useEffect(() => {
    if (query !== "") {
      queryClient.invalidateQueries({
        queryKey: ["data"],
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

        
      </div>
    </div>
  );
};

export default Stock;
