"use client";

import React from "react";
import { DateRange, DateRangePicker } from "./tremor/DatePicker";
import { AreaChart } from "./tremor/AreaChart";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { DateRangePickerHero } from "./DateRangePickerHero";
interface Row {
  date: string;
  assetName: string;
  price: number;
  volume: number;
}
interface ChartData {
  date: string;
  [key: string]: number | string; // To accommodate dynamic asset names and their prices
}
interface TransactionTableProps {
  rows: Row[];
  setRows: React.Dispatch<React.SetStateAction<Row[]>>;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
}
function convertToChartData(rows: Row[]): ChartData[] {
  const dataMap = new Map<string, any>();

  rows.forEach(({ date, assetName, price }) => {
    if (!dataMap.has(date)) {
      dataMap.set(date, { date }); // Initialize with the date
    }
    const entry = dataMap.get(date);
    entry[assetName] = price; // Set the asset price
  });

  return Array.from(dataMap.values()); // Convert map values to an array
}

export const AreaChartTypeExample: React.FC<TransactionTableProps> = ({
  rows,
  setRows,
  dateRange,
  setDateRange,
}) => {
  const chartdata = convertToChartData(rows);

  return (
    <Card className="flex flex-col w-full mt-8 px-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h2 className="uppercase font-bold text-xl m-4 ms-0">
          Investment Summary
        </h2>
        <DateRangePickerHero />
      </CardHeader>
      <CardBody className="flex flex-col gap-4 4 p-0 overflow-x-hidden">
        <AreaChart
          type="default"
          className="max-h-[50rem] min-h-52 my-auto"
          data={chartdata}
          index="date"
          categories={["BTC", "GOLD"]}
          showLegend={true}
        />
      </CardBody>
      <CardFooter className="p-0 mb-4">
        <p className="text-gray-400">
          *Past performance is not a reliable indicator of future results.
          Investment value can fluctuate, and investors may not get back the
          amount originally invested, potentially resulting in a loss of
          principal.
        </p>
      </CardFooter>
    </Card>
  );
};
