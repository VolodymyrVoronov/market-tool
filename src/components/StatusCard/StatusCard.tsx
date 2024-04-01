import { ReactNode } from "react";
import { RiRestTimeFill, RiTimerFlashFill } from "react-icons/ri";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";

interface IStatusCard {
  market_type: string;
  region: string;
  primary_exchanges: string;
  local_open: string;
  local_close: string;
  current_status: string;
  notes?: string;

  children?: ReactNode;
}

const StatusCard = ({
  market_type,
  region,
  primary_exchanges,
  local_open,
  local_close,
  current_status,
  notes,

  children,
}: IStatusCard): JSX.Element => {
  const isOpen = current_status === "open";

  const statusColor = isOpen ? "text-green-600" : "text-red-600";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{region}</CardTitle>
        <CardDescription className="text-md">
          Type: {market_type}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="flex flex-row justify-between gap-5">
          <span>Primary exchanges:</span>
          <span className="font-bold text-right">{primary_exchanges}</span>
        </span>

        <span className="flex flex-row justify-between gap-5">
          <span>Local open:</span>
          <span className="font-bold text-right">{local_open}</span>
        </span>

        <span className="flex flex-row justify-between gap-5">
          <span>Local close:</span>
          <span className="font-bold text-right">{local_close}</span>
        </span>

        <span className="flex flex-row justify-between gap-5">
          <span>Status:</span>
          <span
            className={`flex flex-row items-center gap-1 font-bold text-right ${statusColor}`}
          >
            {isOpen ? (
              <RiTimerFlashFill className="w-5 h-5" />
            ) : (
              <RiRestTimeFill className="w-5 h-5" />
            )}
            {current_status}
          </span>
        </span>

        {notes ? (
          <>
            <Separator />
            <span className="flex flex-row justify-between gap-5">
              <span>Notes:</span>
              <span className="font-medium text-right">{notes}</span>
            </span>
          </>
        ) : null}
      </CardContent>

      {children ? <CardFooter>{children}</CardFooter> : null}
    </Card>
  );
};

export default StatusCard;
