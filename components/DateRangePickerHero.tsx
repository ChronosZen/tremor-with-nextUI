"use client";

import React from "react";

import { DateRange, DateRangePicker } from "./tremor/DatePicker";

export const DateRangePickerHero = () => {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    undefined
  );
  return (
    <div className="flex flex-col items-center gap-y-4">
      <DateRangePicker
        value={dateRange}
        onChange={setDateRange}
        className="w-60"
      />
    </div>
  );
};
