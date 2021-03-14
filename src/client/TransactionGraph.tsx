import React, { useMemo } from "react";
import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";
import { Transaction } from "../shared/Models";
import { RenderTooltipParams } from "@visx/xychart/lib/components/Tooltip";
import { timeFormat } from "d3-time-format";
import {min, max} from "d3-array";

// util
const formatDate = timeFormat("%b %d, %y");


// accessors
const getDate = (d: Transaction) => {
  const data = new Date(d.date + "/20");

  return data;
};
const getBalance = (d: Transaction) => {
  console.log({d});
  return d.balance;
};

const accessors = {
  xAccessor: getDate,
  yAccessor: getBalance,
};

export type AreaProps = {
  width: number;
  height: number;
};

export type TransactionGraph = {
  accountName: string;
  transactions: Transaction[];
};

export default function TransactionGraph({width, height, accountName, transactions}: AreaProps & TransactionGraph) {

  const tranctionMinAndMax = useMemo(() => {
    return {
      min: min(transactions, getBalance),
      max: max(transactions, getBalance),
    };
  }, [transactions]);

  const yDomain = [
    Math.abs(tranctionMinAndMax.min) < 500 ? 0: tranctionMinAndMax.min,
    tranctionMinAndMax.max
  ];

  return (
    <XYChart height={height} width={width} xScale={{ type: "time" }} yScale={{ type: "linear", domain: yDomain}}>
      <AnimatedAxis orientation="left" />
      <AnimatedAxis orientation="bottom" />
      <AnimatedGrid />
      <AnimatedLineSeries dataKey={accountName} data={transactions} {...accessors} />
      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }: RenderTooltipParams<Transaction>) => (
          <div>
            <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
              {tooltipData.nearestDatum.key}
            </div>
            ${accessors.yAccessor(tooltipData.nearestDatum.datum).toFixed(2)}
            {": "}
            {formatDate(accessors.xAccessor(tooltipData.nearestDatum.datum))}
          </div>
        )}
      />
    </XYChart>
  );
  
}