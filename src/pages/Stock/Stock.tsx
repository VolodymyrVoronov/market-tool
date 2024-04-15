import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import { searchStock } from "@/services/stock";

import Spinner from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Stock = (): JSX.Element => {
  const queryClient = useQueryClient();

  const [query, setQuery] = useState("Apple");

  const {
    data: stocks,
    error,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: ["data"],
    queryFn: () => searchStock(query),
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[100%]">
        <Spinner />
      </div>
    );

  if (error) return <div>Error</div>;
  if (!stocks) return <div>No data</div>;

  console.log(stocks);

  const onInputSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSearchButtonClick = (): void => {
    queryClient.invalidateQueries({
      queryKey: ["data"],
    });

    const timerId = setTimeout(() => {
      setQuery("");

      clearTimeout(timerId);
    }, 500);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <h2 className="text-xl hidden md:block">Search:</h2>
        <Input
          type="text"
          placeholder="Apple or AAPL"
          value={query}
          onChange={onInputSearchChange}
          disabled={isRefetching || isLoading}
        />
        <Button
          className="w-full md:w-auto"
          onClick={onSearchButtonClick}
          disabled={isRefetching || isLoading || !query}
        >
          <RiSearchLine className="h-6 w-6 md:h-4 md:w-4" />
          <span className="ml-2 block md:hidden text-xl">Search</span>
        </Button>
      </div>

      {isRefetching ? (
        <div className="flex justify-center items-center h-[100%] mt-5">
          <Spinner />
        </div>
      ) : null}
    </div>
  );
};

export default Stock;
