import { IHoliday } from "@/types";

import { Badge } from "@/components/ui/badge";

interface ITodayHolydayProps extends IHoliday {}

const TodayHolyday = ({
  eventName,
  atDate,
  tradingHour,
}: ITodayHolydayProps): JSX.Element => {
  return (
    <Badge className="w-full flex flex-col justify-center bg-orange-400 text-lg">
      <span className="font-bold text-xl">{eventName}</span>
      <span className="text-sm">{atDate}</span>
      <span className="text-sm italic">{tradingHour}</span>
    </Badge>
  );
};

export default TodayHolyday;
