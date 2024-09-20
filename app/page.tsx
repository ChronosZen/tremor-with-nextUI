"use client";
import React, { useEffect, useState } from "react";
import { DateRange } from "@/components/tremor/DatePicker";

import randomData from "@/utils/randomData";
import Sidebar from "@/components/SideBar";
import { Header } from "@/components/dashboard/Header";
import { AreaChartTypeExample } from "@/components/AreaChartTypeExample";
import { DonutChartSample } from "@/components/DonotChartSample";
import TransactionTable from "@/components/TransactionTable";
interface Row {
  date: string;
  assetName: string;
  price: number;
  volume: number;
}

export default function Home() {
  const [rows, setRows] = useState<Row[]>([]);
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    undefined
  );
  const assets = [
    { name: "BTC", price: 20000, volume: 1200000 },
    { name: "GOLD", price: 1800, volume: 1500000 },
  ];

  const startDate = "2022-09-01";
  const days = 120;

  useEffect(() => {
    const generatedRows = randomData(startDate, days, assets);
    setRows(generatedRows);
  }, []);

  return (
    <>
      <Sidebar />
      <main className="pl-72">
        <div className="flex flex-col basis-3/4 p-8">
          <Header />
          <div className="flex gap-8 w-full">
            <AreaChartTypeExample
              rows={rows}
              setRows={setRows}
              dateRange={dateRange}
              setDateRange={setDateRange}
            />
            <div className="flex">
              <DonutChartSample />
            </div>
          </div>
          <TransactionTable rows={rows} setRows={setRows} />
        </div>
      </main>
    </>
  );
}
