import { useQuery } from "@tanstack/react-query";

import Spinner from "@/components/Spinner/Spinner";
import StatusCard from "@/components/StatusCard/StatusCard";
import { Separator } from "@/components/ui/separator";

const Status = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["dat"],
    queryFn: () => {},
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[100%]">
        <Spinner />
      </div>
    );

  if (error) return <div>Error</div>;

  return <div className="flex flex-col gap-5"></div>;
};

export default Status;
