import { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IStockCardProps {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
  volume: string;

  children?: ReactNode;
}

const StockCard = ({
  ticker,
  price,
  change_amount,
  change_percentage,
  volume,

  children,
}: IStockCardProps) => {
  const isAmountPositive = Number(change_amount) > 0;
  const isPercentagePositive = Number(change_percentage.replace("%", "")) > 0;

  const amountColor = isAmountPositive ? "text-green-600" : "text-red-600";
  const percentageColor = isPercentagePositive
    ? "text-green-600"
    : "text-red-600";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{ticker}</CardTitle>
        <CardDescription className="text-lg">
          Price: <span className="font-bold">${price}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <span className="flex flex-row justify-between">
          <span>Change amount:</span>
          <span className={`font-bold ${amountColor}`}>{change_amount}</span>
        </span>

        <span className="flex flex-row justify-between">
          <span>Change percentage:</span>
          <span className={`font-bold ${percentageColor}`}>
            {change_percentage}
          </span>
        </span>

        <span className="flex flex-row justify-between">
          <span>Volume:</span>
          <span className="font-bold text-sky-600">{volume}</span>
        </span>
      </CardContent>

      {children ? <CardFooter>{children}</CardFooter> : null}
    </Card>
  );
};

export default StockCard;
