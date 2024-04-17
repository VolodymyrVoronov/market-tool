import { IStockSearchResult } from "@/types";

import StockCard from "../StockCard/StockCard";
import { memo } from "react";

interface IStockCardsProps {
  count: number;
  result: IStockSearchResult[];
}

const StockCards = memo(({ count, result }: IStockCardsProps): JSX.Element => {
  return (
    <div>
      <h3 className="text-xl font-bold text-center mt-5">
        {count} {count === 1 ? "result" : "results"}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-5">
        {result.map((stock) => (
          <StockCard
            key={stock.symbol}
            description={stock.description}
            symbol={stock.symbol}
            displaySymbol={stock.displaySymbol}
          />
        ))}
      </div>
    </div>
  );
});

export default StockCards;
