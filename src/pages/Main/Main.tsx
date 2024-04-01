import { useQuery } from "@tanstack/react-query";
import {
  RiArrowRightDownLine,
  RiArrowRightUpLine,
  RiBarChartFill,
} from "react-icons/ri";

import { getTopGainersLosers, ITopGainersLosers } from "@/services/apiMain";

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

const mock: ITopGainersLosers = {
  metadata: "Top gainers, losers, and most actively traded US tickers",
  last_updated: "2024-03-28 16:15:58 US/Eastern",
  top_gainers: [
    {
      ticker: "AVTX",
      price: "21.75",
      change_amount: "17.0",
      change_percentage: "357.8947%",
      volume: "31416006",
    },
    {
      ticker: "LGVCW",
      price: "0.1",
      change_amount: "0.068",
      change_percentage: "212.5%",
      volume: "252605",
    },
    {
      ticker: "NLSPW",
      price: "0.0488",
      change_amount: "0.0288",
      change_percentage: "144.0%",
      volume: "1641",
    },
    {
      ticker: "SHPWW",
      price: "0.0092",
      change_amount: "0.0053",
      change_percentage: "135.8974%",
      volume: "15201",
    },
    {
      ticker: "PEGRW",
      price: "0.1499",
      change_amount: "0.0849",
      change_percentage: "130.6154%",
      volume: "188252",
    },
    {
      ticker: "APLMW",
      price: "0.0299",
      change_amount: "0.0166",
      change_percentage: "124.812%",
      volume: "5700",
    },
    {
      ticker: "FNVTW",
      price: "0.022",
      change_amount: "0.0119",
      change_percentage: "117.8218%",
      volume: "17",
    },
    {
      ticker: "FIACW",
      price: "0.0461",
      change_amount: "0.024",
      change_percentage: "108.5973%",
      volume: "32000",
    },
    {
      ticker: "SST+",
      price: "0.13",
      change_amount: "0.0642",
      change_percentage: "97.5684%",
      volume: "92556",
    },
    {
      ticker: "BFRIW",
      price: "0.0676",
      change_amount: "0.0325",
      change_percentage: "92.5926%",
      volume: "1197",
    },
    {
      ticker: "BDRX",
      price: "1.62",
      change_amount: "0.761",
      change_percentage: "88.5914%",
      volume: "87774220",
    },
    {
      ticker: "CERO",
      price: "3.07",
      change_amount: "1.44",
      change_percentage: "88.3436%",
      volume: "22719228",
    },
    {
      ticker: "CEROW",
      price: "0.089",
      change_amount: "0.041",
      change_percentage: "85.4167%",
      volume: "123154",
    },
    {
      ticker: "AREBW",
      price: "0.015",
      change_amount: "0.0067",
      change_percentage: "80.7229%",
      volume: "1600",
    },
    {
      ticker: "NXL",
      price: "1.4",
      change_amount: "0.62",
      change_percentage: "79.4872%",
      volume: "11421628",
    },
    {
      ticker: "XTKG",
      price: "0.99",
      change_amount: "0.4094",
      change_percentage: "70.5133%",
      volume: "2491367",
    },
    {
      ticker: "XLO",
      price: "1.08",
      change_amount: "0.441",
      change_percentage: "69.0141%",
      volume: "33363588",
    },
    {
      ticker: "KYCH",
      price: "12.3",
      change_amount: "4.95",
      change_percentage: "67.3469%",
      volume: "182295",
    },
    {
      ticker: "CCTSW",
      price: "0.05",
      change_amount: "0.02",
      change_percentage: "66.6667%",
      volume: "20000",
    },
    {
      ticker: "MSAIW",
      price: "0.051",
      change_amount: "0.0199",
      change_percentage: "63.9871%",
      volume: "22830",
    },
  ],
  top_losers: [
    {
      ticker: "PMEC",
      price: "1.29",
      change_amount: "-2.59",
      change_percentage: "-66.7526%",
      volume: "8010663",
    },
    {
      ticker: "OSAAW",
      price: "0.0172",
      change_amount: "-0.0218",
      change_percentage: "-55.8974%",
      volume: "120717",
    },
    {
      ticker: "DTSTW",
      price: "0.6039",
      change_amount: "-0.6861",
      change_percentage: "-53.186%",
      volume: "93554",
    },
    {
      ticker: "AGRIW",
      price: "0.0076",
      change_amount: "-0.0074",
      change_percentage: "-49.3333%",
      volume: "18768",
    },
    {
      ticker: "CTV+",
      price: "0.045",
      change_amount: "-0.0438",
      change_percentage: "-49.3243%",
      volume: "3500",
    },
    {
      ticker: "GBBKW",
      price: "0.011",
      change_amount: "-0.009",
      change_percentage: "-45.0%",
      volume: "144625",
    },
    {
      ticker: "TNXP",
      price: "0.186",
      change_amount: "-0.1409",
      change_percentage: "-43.1019%",
      volume: "21273136",
    },
    {
      ticker: "XBPEW",
      price: "0.04",
      change_amount: "-0.0292",
      change_percentage: "-42.1965%",
      volume: "17358",
    },
    {
      ticker: "INAQW",
      price: "0.0261",
      change_amount: "-0.0184",
      change_percentage: "-41.3483%",
      volume: "11225",
    },
    {
      ticker: "COEPW",
      price: "0.0255",
      change_amount: "-0.0166",
      change_percentage: "-39.4299%",
      volume: "256",
    },
    {
      ticker: "GMDA",
      price: "0.0361",
      change_amount: "-0.0231",
      change_percentage: "-39.0203%",
      volume: "85463200",
    },
    {
      ticker: "NBSTW",
      price: "0.0423",
      change_amount: "-0.0262",
      change_percentage: "-38.2482%",
      volume: "1750",
    },
    {
      ticker: "SLNA",
      price: "0.149",
      change_amount: "-0.0909",
      change_percentage: "-37.8908%",
      volume: "2840595",
    },
    {
      ticker: "GDSTR",
      price: "0.087",
      change_amount: "-0.053",
      change_percentage: "-37.8571%",
      volume: "147",
    },
    {
      ticker: "LIXTW",
      price: "0.0501",
      change_amount: "-0.0299",
      change_percentage: "-37.375%",
      volume: "3035",
    },
    {
      ticker: "MVLAW",
      price: "0.0063",
      change_amount: "-0.0036",
      change_percentage: "-36.3636%",
      volume: "60186",
    },
    {
      ticker: "AWINW",
      price: "0.0121",
      change_amount: "-0.0068",
      change_percentage: "-35.9788%",
      volume: "49071",
    },
    {
      ticker: "CRGOW",
      price: "0.087",
      change_amount: "-0.046",
      change_percentage: "-34.5865%",
      volume: "5",
    },
    {
      ticker: "GAQ+",
      price: "0.0945",
      change_amount: "-0.0483",
      change_percentage: "-33.8235%",
      volume: "1567",
    },
    {
      ticker: "CLDI+",
      price: "0.058",
      change_amount: "-0.027",
      change_percentage: "-31.7647%",
      volume: "3697",
    },
  ],
  most_actively_traded: [
    {
      ticker: "NKLA",
      price: "1.04",
      change_amount: "0.1309",
      change_percentage: "14.3989%",
      volume: "162207025",
    },
    {
      ticker: "SPY",
      price: "523.21",
      change_amount: "0.04",
      change_percentage: "0.0076%",
      volume: "91101164",
    },
    {
      ticker: "BDRX",
      price: "1.62",
      change_amount: "0.761",
      change_percentage: "88.5914%",
      volume: "87774220",
    },
    {
      ticker: "GMDA",
      price: "0.0361",
      change_amount: "-0.0231",
      change_percentage: "-39.0203%",
      volume: "85463200",
    },
    {
      ticker: "MARA",
      price: "22.58",
      change_amount: "0.51",
      change_percentage: "2.3108%",
      volume: "85136939",
    },
    {
      ticker: "AKAN",
      price: "0.1166",
      change_amount: "-0.0483",
      change_percentage: "-29.2905%",
      volume: "78576845",
    },
    {
      ticker: "TSLA",
      price: "175.79",
      change_amount: "-4.04",
      change_percentage: "-2.2466%",
      volume: "76899517",
    },
    {
      ticker: "SQQQ",
      price: "10.48",
      change_amount: "0.08",
      change_percentage: "0.7692%",
      volume: "74227389",
    },
    {
      ticker: "SOXS",
      price: "3.225",
      change_amount: "0.005",
      change_percentage: "0.1553%",
      volume: "72887195",
    },
    {
      ticker: "PLTR",
      price: "23.01",
      change_amount: "-1.5",
      change_percentage: "-6.12%",
      volume: "68944894",
    },
    {
      ticker: "CISS",
      price: "0.0346",
      change_amount: "-0.0036",
      change_percentage: "-9.4241%",
      volume: "65412571",
    },
    {
      ticker: "AAPL",
      price: "171.48",
      change_amount: "-1.83",
      change_percentage: "-1.0559%",
      volume: "64577773",
    },
    {
      ticker: "ROIV",
      price: "10.54",
      change_amount: "-0.3",
      change_percentage: "-2.7675%",
      volume: "64414017",
    },
    {
      ticker: "F",
      price: "13.275",
      change_amount: "0.215",
      change_percentage: "1.6462%",
      volume: "60751447",
    },
    {
      ticker: "AKBA",
      price: "1.83",
      change_amount: "-0.41",
      change_percentage: "-18.3036%",
      volume: "60565971",
    },
    {
      ticker: "CCL",
      price: "16.335",
      change_amount: "-0.855",
      change_percentage: "-4.9738%",
      volume: "59922075",
    },
    {
      ticker: "JAGX",
      price: "0.0899",
      change_amount: "0.017",
      change_percentage: "23.3196%",
      volume: "58419956",
    },
    {
      ticker: "AMD",
      price: "180.49",
      change_amount: "0.9",
      change_percentage: "0.5011%",
      volume: "56856730",
    },
    {
      ticker: "NIO",
      price: "4.505",
      change_amount: "-0.165",
      change_percentage: "-3.5332%",
      volume: "54711131",
    },
    {
      ticker: "RUN",
      price: "13.18",
      change_amount: "0.08",
      change_percentage: "0.6107%",
      volume: "54189393",
    },
  ],
};

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

  console.log(topGainersLosers);

  const {
    metadata,
    last_updated,
    top_gainers,
    top_losers,
    most_actively_traded,
  } = mock;

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
