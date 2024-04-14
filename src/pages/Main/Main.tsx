import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { RiArrowUpLine, RiMoreFill } from "react-icons/ri";

import { AMOUNT_NEWS_VISIBLE } from "@/constants";
import useWindowPosition from "@/hooks/useWindowPosition";
import { getMarketNews } from "@/services/news";
import { NewsCategory } from "@/types";

import NewsCard from "@/components/NewsCard/NewsCard";
import Spinner from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Main = (): JSX.Element => {
  const queryClient = useQueryClient();

  const {
    data: news,
    error,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: ["market-news"],
    queryFn: () => getMarketNews(newsCategory),
    refetchOnWindowFocus: false,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const [newsCategory, setNewsCategory] = useState<NewsCategory>("general");
  const [newAmountVisible, setNewAmountVisible] = useState(AMOUNT_NEWS_VISIBLE);

  useEffect(() => {
    if (newsCategory) {
      queryClient.invalidateQueries({
        queryKey: ["market-news"],
      });
    }
  }, [newsCategory, queryClient]);

  const scrollPosition = useWindowPosition();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[100%]">
        <Spinner />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  const onNewsCategoryChange = (value: NewsCategory): void => {
    setNewsCategory(value);
  };

  const onMoreButtonClick = (): void => {
    setNewAmountVisible((prev) => prev + AMOUNT_NEWS_VISIBLE);

    const timerId = setTimeout(() => {
      window.scrollBy({
        top: 500,
        behavior: "smooth",
      });

      clearTimeout(timerId);
    }, 500);
  };

  const onToTopButtonClick = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  console.log(news, isLoading, isRefetching);

  console.log(scrollPosition);

  return (
    <div ref={containerRef} className="flex flex-col gap-5 pb-5">
      <div className="sticky top-0 flex flex-col md:flex-row items-center gap-3 md:gap-5 backdrop-blur-2xl z-10 rounded-lg p-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-nowrap">
          Market news by category
        </h1>
        <Select
          value={newsCategory}
          onValueChange={onNewsCategoryChange}
          disabled={isRefetching}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select news category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="forex">Forex</SelectItem>
            <SelectItem value="crypto">Crypto</SelectItem>
            <SelectItem value="merger">Merger</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isRefetching ? (
        <div className="flex justify-center items-center h-[100%]">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {news?.slice(0, newAmountVisible).map((news, index) => (
              <NewsCard key={news.id} keyIndex={index} {...news} />
            ))}
          </div>

          {news && news.length > newAmountVisible && (
            <>
              {scrollPosition >= 100 && (
                <div className="sticky bottom-0 flex justify-center items-center gap-5 backdrop-blur-2xl z-10 rounded-lg p-2 w-max m-auto">
                  <Button
                    className="text-sm sm:text-base font-bold text-nowrap"
                    onClick={onMoreButtonClick}
                  >
                    Show more <RiMoreFill className="ml-2 h-5 w-5" />
                  </Button>

                  <Button
                    className="text-sm sm:text-base font-bold text-nowrap"
                    onClick={onToTopButtonClick}
                    variant="ghost"
                  >
                    To top <RiArrowUpLine className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Main;
