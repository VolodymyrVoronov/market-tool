import { format } from "date-fns";
import parse from "html-react-parser";
import { RiErrorWarningLine, RiExternalLinkFill } from "react-icons/ri";

import { INews } from "@/types";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

const NewsCard = ({
  datetime,
  headline,
  image,
  source,
  summary,
  url,
  keyIndex,
}: INews & { keyIndex: number }): JSX.Element => {
  const onLinkButtonClick = (): void => {
    window.open(url, "_blank");
  };

  return (
    <Card className="hover:shadow-lg">
      <CardHeader>
        <CardTitle className="leading-5">
          <span className="md:text-lg text-blue-700">
            <Badge className="mr-2">{keyIndex + 1}</Badge>
            {headline}
          </span>
        </CardTitle>
        <CardDescription className="md:text-lg lg:text-xl">
          {parse(summary)}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between">
          <span className="font-bold">{source}</span>
          <span className="italic">{format(new Date(datetime * 1000), "dd.MM.yyyy HH:mm")}</span>
        </div>

        {image ? (
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img src={image} alt={headline} />
          </AspectRatio>
        ) : null}
      </CardContent>

      <Separator className="mb-5" />

      <CardFooter>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="link" className="md:text-xl px-0">
              Read more <RiExternalLinkFill className="ml-2 h-5 w-5" />
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogTitle className="flex justify-center">
              <RiErrorWarningLine className="text-4xl md:text-7xl text-red-500" />
            </AlertDialogTitle>
            <AlertDialogHeader>
              <span className="text-center text-red-500 text-xl md:text-2xl">
                You will be redirected to the news source
              </span>
            </AlertDialogHeader>
            <AlertDialogDescription className="md:text-lg text-center">
              Do you want to continue reading the news?
              <br />
              <span className="text-sm">(This will open a new tab)</span>
            </AlertDialogDescription>

            <AlertDialogFooter>
              <AlertDialogCancel>No, go back</AlertDialogCancel>
              <AlertDialogAction onClick={onLinkButtonClick}>
                Continue reading
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
