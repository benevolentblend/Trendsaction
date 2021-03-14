import React, { useMemo } from "react";
import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";
import { ProcessedAccount, Transaction } from "../shared/Models";
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
  account: ProcessedAccount;
};

export default function TransactionGraph({width, height, account}: AreaProps & TransactionGraph) {
  const { transactions } = account;

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
    <XYChart height={height} width={width} xScale={{ type: "time" }} yScale={{ type: "linear", domain: yDomain, round: true}}>
      <AnimatedAxis orientation="left" />
      <AnimatedAxis orientation="bottom" />
      <AnimatedGrid />
      <AnimatedLineSeries dataKey={account.name} data={transactions} {...accessors} />
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