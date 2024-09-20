"use client";

import { DonutChart } from "@/components/tremor/DonutChart";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import DonutTable from "./DonutTable";
const chartdata = [
  {
    name: "SolarCells",
    amount: 4890,
  },
  {
    name: "Glass",
    amount: 2103,
  },
  {
    name: "JunctionBox",
    amount: 2050,
  },
  {
    name: "Adhesive",
    amount: 1300,
  },
  {
    name: "BackSheet",
    amount: 1100,
  },
  {
    name: "Frame",
    amount: 700,
  },
  {
    name: "Encapsulant",
    amount: 200,
  },
];

export const DonutChartSample = () => (
  <Card className="py-4 mt-8">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="text-tiny uppercase font-bold">Asset Allocation</h4>
      <small className="text-default-500">As of September 17, 2024</small>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <DonutChart
        className="mx-auto h-48 w-48"
        data={chartdata}
        category="name"
        value="amount"
        showLabel={true}
        valueFormatter={(number: number) =>
          `$${Intl.NumberFormat("us").format(number).toString()}`
        }
      />
      <DonutTable />
    </CardBody>
  </Card>
);
