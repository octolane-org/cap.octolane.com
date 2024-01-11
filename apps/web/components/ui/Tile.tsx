import {
  ArrowSmallDownIcon,
  ArrowSmallUpIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { useMemo } from "react";

import { cn } from "@/lib/utils/common";

import Heading from "./Heading";

const Tile: React.FCC<{ className?: string }> & {
  Header: typeof TileHeader;
  Heading: typeof TileHeading;
  Body: typeof TileBody;
  Figure: typeof TileFigure;
  Trend: typeof TileTrend;
  Badge: typeof TileBadge;
} = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col space-y-3 rounded-lg border border-gray-100" +
          " dark:border-dark-900 bg-background p-5",
        className,
      )}
    >
      {children}
    </div>
  );
};

function TileHeader(props: React.PropsWithChildren) {
  return <div className={"flex"}>{props.children}</div>;
}

function TileHeading(props: React.PropsWithChildren) {
  return (
    <Heading type={6}>
      <span className={"font-normal text-gray-500 dark:text-gray-400"}>
        {props.children}
      </span>
    </Heading>
  );
}

function TileBody(props: React.PropsWithChildren) {
  return <div className={"flex flex-col space-y-5"}>{props.children}</div>;
}

function TileFigure(props: React.PropsWithChildren) {
  return <div className={"text-3xl font-bold"}>{props.children}</div>;
}

function TileTrend(
  props: React.PropsWithChildren<{
    trend: "up" | "down" | "stale";
  }>,
) {
  const Icon = useMemo(() => {
    switch (props.trend) {
      case "up":
        return <ArrowSmallUpIcon className={"h-4 text-green-500"} />;
      case "down":
        return <ArrowSmallDownIcon className={"h-4 text-red-500"} />;
      case "stale":
        return <Bars2Icon className={"h-4 text-yellow-500"} />;
    }
  }, [props.trend]);

  return (
    <TileBadge trend={props.trend}>
      <span className={"flex items-center space-x-1"}>
        {Icon}
        <span>{props.children}</span>
      </span>
    </TileBadge>
  );
}

function TileBadge(
  props: React.PropsWithChildren<{
    trend: "up" | "down" | "stale";
  }>,
) {
  const className = `inline-flex items-center rounded-lg py-1 px-2.5 text-sm font-semibold justify-center`;

  if (props.trend === `up`) {
    return (
      <div
        className={`${className} bg-green-50 text-green-600 dark:bg-green-500/10`}
      >
        <span>{props.children}</span>
      </div>
    );
  }

  if (props.trend === `down`) {
    return (
      <div className={`${className} bg-red-50 text-red-600 dark:bg-red-500/10`}>
        <span>{props.children}</span>
      </div>
    );
  }

  return (
    <div
      className={`${className} bg-yellow-50 text-yellow-600 dark:bg-yellow-500/10`}
    >
      <span>{props.children}</span>
    </div>
  );
}

Tile.Header = TileHeader;
Tile.Heading = TileHeading;
Tile.Body = TileBody;
Tile.Figure = TileFigure;
Tile.Trend = TileTrend;
Tile.Badge = TileBadge;

export default Tile;
