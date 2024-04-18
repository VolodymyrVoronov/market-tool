import { useQuery } from "@tanstack/react-query";

import { getCompanyProfile } from "@/services/profile";
import { ICompanyProfile, IStockSearchResult } from "@/types";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Spinner from "../Spinner/Spinner";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface IStockCardProps
  extends Omit<IStockSearchResult, "displaySymbol" | "type"> {}

const StockCard = ({ description, symbol }: IStockCardProps): JSX.Element => {
  const {
    data: profile,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["profile", symbol],
    queryFn: () => getCompanyProfile(symbol),
    refetchOnWindowFocus: false,
  });

  console.log(profile);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[100%]">
        <Spinner />
      </div>
    );

  if (error) return <Badge variant="destructive">Error: {error.message}</Badge>;

  const {
    country,
    currency,
    estimateCurrency,
    exchange,
    finnhubIndustry,
    ipo,
    logo,
    marketCapitalization,
    name,
    phone,
    shareOutstanding,
    ticker,
    weburl,
  } = profile as ICompanyProfile;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={!profile?.country}
          className="flex flex-col gap-2 w-full h-auto p-2 md:p-3 lg:p-4"
          variant="outline"
        >
          {!profile?.country ? (
            <span className="text-sm lg:text-md text-balance text-red-500">
              Information is not available
            </span>
          ) : (
            <>
              <span className="text-md lg:text-lg font-bold text-balance">
                {description}
              </span>
              <span className="text-sm lg:text-md text-blue-500">{symbol}</span>
            </>
          )}
        </Button>
      </DialogTrigger>

      <DialogContent className="md:max-w-[768px]">
        <DialogHeader className="mt-5">
          <DialogTitle className="flex flex-row justify-between content-center items-start gap-2.5 text-2xl">
            {name} <img src={logo} alt={name} className="max-w-[50px]" />
          </DialogTitle>

          {weburl && (
            <DialogDescription className="text-md text-left">
              <a href={weburl} target="_blank">
                {weburl}
              </a>
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="flex flex-col gap-3 my-2.5">
          <Badge
            className="flex items-start px-3 py-2 text-xl text-left"
            variant="outline"
          >
            <span className="mr-2 text-slate-600 font-normal">Country:</span>{" "}
            {country}
          </Badge>
          <Badge
            className="flex items-start px-3 py-2 text-xl text-left"
            variant="outline"
          >
            <span className="mr-2 text-slate-600 font-normal">Ticker:</span>{" "}
            {ticker}
          </Badge>
          <Badge
            className="flex items-start px-3 py-2 text-xl text-left"
            variant="outline"
          >
            <span className="mr-2 text-slate-600 font-normal">IPO Date:</span>{" "}
            {ipo}
          </Badge>
          <Badge
            className="flex items-start px-3 py-2 text-xl text-left"
            variant="outline"
          >
            <span className="mr-2 text-slate-600 font-normal">Exchange:</span>{" "}
            {exchange}
          </Badge>
          <Badge
            className="flex items-start px-3 py-2 text-xl text-left"
            variant="outline"
          >
            <span className="mr-2 text-slate-600 font-normal">Industry:</span>{" "}
            {finnhubIndustry}
          </Badge>
          <Badge
            className="flex items-start px-3 py-2 text-xl text-left"
            variant="outline"
          >
            <span className="mr-2 text-slate-600 font-normal">Currency:</span>{" "}
            {currency}
          </Badge>
          <Badge
            className="flex items-start px-3 py-2 text-xl text-left"
            variant="outline"
          >
            <span className="mr-2 text-slate-600 font-normal">
              Market Capitalization:
            </span>{" "}
            {marketCapitalization?.toFixed(2)} $
          </Badge>
          <Badge
            className="flex items-start px-3 py-2 text-xl text-left"
            variant="outline"
          >
            <span className="mr-2 text-slate-600 font-normal">
              Share Outstanding:
            </span>{" "}
            {shareOutstanding}
          </Badge>
          <Badge
            className="flex items-start px-3 py-2 text-xl text-left"
            variant="outline"
          >
            <span className="mr-2 text-slate-600 font-normal">
              Estimate Currency:
            </span>{" "}
            {estimateCurrency}
          </Badge>
          <Badge
            className="flex items-start px-3 py-2 text-xl text-left"
            variant="outline"
          >
            <span className="mr-2 text-slate-600 font-normal">Phone:</span>{" "}
            {phone}
          </Badge>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StockCard;
