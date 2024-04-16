import { format } from "date-fns";
import {
  RiCheckFill,
  RiCloseFill,
  RiRestTimeLine,
  RiTimeLine,
} from "react-icons/ri";

import { IMarketStatus } from "@/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface IStatusBarProps extends Required<IMarketStatus> {}

const StatusBar = ({
  exchange,
  holiday,
  isOpen,
  session,
  t,
  timezone,
}: IStatusBarProps) => {
  return (
    <Card className="w-full sm:w-[300px]">
      <CardHeader>
        <CardTitle className="text-lg">{exchange}</CardTitle>
        <CardDescription>
          {format(new Date(t * 1000), "yyyy-MM-dd HH:mm")}
        </CardDescription>
      </CardHeader>

      <Separator className="mb-[24px]" />

      <CardContent className="space-y-1">
        <div className="flex items-center justify-between">
          Open:{" "}
          {isOpen ? (
            <RiTimeLine className="text-green-500 text-2xl" />
          ) : (
            <RiRestTimeLine className="text-red-500 text-2xl" />
          )}
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <span>Session:</span> <span>{session}</span>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <span>Holiday:</span>
          <span>
            {holiday ? (
              <RiCheckFill className="text-green-500 text-2xl" />
            ) : (
              <RiCloseFill className="text-red-500 text-2xl" />
            )}
          </span>
        </div>
      </CardContent>

      <Separator className="mb-[24px]" />

      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <span>Timezone:</span>{" "}
          <span className="text-md font-semibold">{timezone}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StatusBar;
