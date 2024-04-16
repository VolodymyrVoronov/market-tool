import { Badge } from "../ui/badge";

import { IHoliday } from "@/types";

interface IHolidayProps extends IHoliday {}

const Holiday = ({
  eventName,
  atDate,
  tradingHour,
}: IHolidayProps): JSX.Element => {
  const isTodayHoliday = atDate === new Date().toISOString().split("T")[0];

  return (
    <Badge
      key={eventName}
      variant="secondary"
      className={`flex flex-col gap-1 bg-blue-50 border-2 border-blue-300 ${
        isTodayHoliday
          ? "bg-orange-400 border-orange-600 hover:bg-orange-500 hover:text-slate-100"
          : ""
      }`}
    >
      <span className="text-xl text-center">{eventName}</span>
      <span className="text-sm">{atDate}</span>
      <span className="text-xs italic">{tradingHour}</span>
    </Badge>
  );
};

export default Holiday;
