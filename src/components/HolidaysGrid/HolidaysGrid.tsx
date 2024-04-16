import { ReactNode } from "react";

import { Separator } from "../ui/separator";

interface IHolidaysGridProps {
  year: number;
  children: ReactNode;
}

const HolidaysGrid = ({ year, children }: IHolidaysGridProps): JSX.Element => {
  return (
    <>
      <h3 className="w-full text-xl font-bold text-center sticky top-[5px] backdrop-blur-xl z-10 rounded-lg p-2">
        {year}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 [@media(min-width:1440px)]:grid-cols-4 [@media(min-width:1920px)]:grid-cols-5 gap-3 md:gap-4 w-full">
        {children}
      </div>

      <Separator className="my-10" />
    </>
  );
};

export default HolidaysGrid;
