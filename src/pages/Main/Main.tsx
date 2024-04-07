import { useQuery } from "@tanstack/react-query";
import {
  RiArrowRightDownLine,
  RiArrowRightUpLine,
  RiBarChartFill,
} from "react-icons/ri";

import { getTopGainersLosers } from "@/services/apiMain";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Spinner from "@/components/Spinner/Spinner";
import StockCard from "@/components/StockCard/StockCard";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Main = (): JSX.Element => {
  const {
    data: topGainersLosers,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["topGainersLosers"],
    queryFn: getTopGainersLosers,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[100%]">
        <Spinner />
      </div>
    );

  if (error) return <div>Error</div>;
  if (!topGainersLosers) return <div>No data</div>;

  console.log(topGainersLosers);

  const {
    metadata,
    last_updated,
    top_gainers,
    top_losers,
    most_actively_traded,
  } = topGainersLosers;

  if (!top_gainers || !top_losers || !most_actively_traded)
    return <div>No data available right now</div>;

  return (
    <div className="flex flex-col gap-5">
      <span className="flex flex-col gap-1">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
          {metadata}
        </h1>
        <span>Last updated: {last_updated}</span>
      </span>

      <Separator />

      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <SectionHeader>
              Top Gainers{" "}
              <span className="text-green-600 text-lg md:text-2xl">
                <RiArrowRightUpLine />
              </span>
            </SectionHeader>
          </AccordionTrigger>

          <AccordionContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {top_gainers.map(
                ({
                  ticker,
                  price,
                  change_amount,
                  change_percentage,
                  volume,
                }) => (
                  <StockCard
                    key={ticker}
                    ticker={ticker}
                    price={price}
                    change_amount={change_amount}
                    change_percentage={change_percentage}
                    volume={volume}
                  />
                )
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <SectionHeader>
              Top Losers{" "}
              <span className="text-red-600 text-lg md:text-2xl">
                <RiArrowRightDownLine />
              </span>
            </SectionHeader>
          </AccordionTrigger>

          <AccordionContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {top_losers.map(
                ({
                  ticker,
                  price,
                  change_amount,
                  change_percentage,
                  volume,
                }) => (
                  <StockCard
                    key={ticker}
                    ticker={ticker}
                    price={price}
                    change_amount={change_amount}
                    change_percentage={change_percentage}
                    volume={volume}
                  />
                )
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            <SectionHeader>
              Most Actively Traded{" "}
              <span className="text-blue-600 text-lg md:text-2xl">
                <RiBarChartFill />
              </span>
            </SectionHeader>
          </AccordionTrigger>

          <AccordionContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {most_actively_traded.map(
                ({
                  ticker,
                  price,
                  change_amount,
                  change_percentage,
                  volume,
                }) => (
                  <StockCard
                    key={ticker}
                    ticker={ticker}
                    price={price}
                    change_amount={change_amount}
                    change_percentage={change_percentage}
                    volume={volume}
                  />
                )
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Main;
