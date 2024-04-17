import { useQuery } from "@tanstack/react-query";

import { getCompanyProfile } from "@/services/profile";
import { IStockSearchResult } from "@/types";

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
              Information about{" "}
              <span className="font-semibold">{description}</span> is not
              available
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
        <DialogHeader>
          <DialogTitle>Stock details</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>

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
