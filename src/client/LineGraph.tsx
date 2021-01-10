import React, {useEffect, useState} from "react";
import { ParentSize } from "@visx/responsive";
import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  TooltipData,
} from "@visx/xychart";

interface LineData {
  x: string;
  y: number;
}
  
const data1: LineData[] = [
  { x: "2020-01-01", y: 50 },
  { x: "2020-01-02", y: 10 },
  { x: "2020-01-03", y: 20 },
];
  
const data2: LineData[] = [
  { x: "2020-01-01", y: 30 },
  { x: "2020-01-02", y: 40 },
  { x: "2020-01-03", y: 80 },
  { x: "2020-01-04", y: 89 },
];
  
const accessors = {
  xAccessor: (d: LineData) => d.x,
  yAccessor: (d: LineData) => d.y,
};


const LineGraph = () => {

  const [d1, setData1] = useState(data1);

  const addRandomData = () => {
    setData1((oldD1) => {
      const lastDay = new Date(oldD1[oldD1.length - 1].x);
      console.log(lastDay);
      lastDay.setDate(lastDay.getUTCDate() + 1);
      console.log(lastDay);
  
  
      const formattedDay = lastDay.getUTCDate() > 10 ? lastDay.getUTCDate().toString() : `0${lastDay.getUTCDate()}`;
  
      const numberMonth = lastDay.getUTCMonth() + 1;
      const formattedMonth = numberMonth > 10 ? numberMonth.toString() : `0${numberMonth}`;
      const formattedYear = lastDay.getUTCFullYear();
  
      const formattedDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;
  
      console.log(formattedDate);
  
  
      const nextPoint:LineData = { x: formattedDate, y: Math.floor(Math.random() * 80)};
    
      console.log(nextPoint);
      

      return [...oldD1, nextPoint];
    });
    
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addRandomData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <ParentSize className="min-vh-100">
      {
        parent => (
          <XYChart height={300} width={parent.width} xScale={{ type: "band" }} yScale={{ type: "linear" }}>
            <AnimatedAxis orientation="bottom" />
            <AnimatedGrid numTicks={4} />
            <AnimatedLineSeries dataKey="Line 1" data={d1} {...accessors} />
            <AnimatedLineSeries dataKey="Line 2" data={data2} {...accessors} />
            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showVerticalCrosshair
              showSeriesGlyphs
              renderTooltip={({ tooltipData, colorScale }) => (
                <div>
                  <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
                    {tooltipData.nearestDatum.key}
                  </div>
                  {accessors.xAccessor((tooltipData as TooltipData<LineData>).nearestDatum.datum)}
                  {", "}
                  {accessors.yAccessor((tooltipData as TooltipData<LineData>).nearestDatum.datum)}
                </div>
              )}
            />
          </XYChart>
        )
      }
      
    </ParentSize>
  );

};

export default LineGraph;