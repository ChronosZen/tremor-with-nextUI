"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Pagination,
} from "@nextui-org/react";
import { ChevronDownIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import type { Selection } from "@nextui-org/react";

interface Row {
  date: string;
  assetName: string;
  price: number;
  volume: number;
}

interface TransactionTableProps {
  rows: Row[];
  setRows: React.Dispatch<React.SetStateAction<Row[]>>;
}
const columns = [
  {
    key: "date",
    label: "DATE",
  },
  {
    key: "assetName",
    label: "ASSET NAME",
  },
  {
    key: "price",
    label: "PRICE ($)", // Specify USD directly here
  },
  {
    key: "volume",
    label: "VOLUME ($)", // Specify USD directly here as well
  },
];

const AssetPriceTable: React.FC<TransactionTableProps> = ({
  rows,
  setRows,
}) => {
  const [page, setPage] = React.useState(1);

  const rowsPerPage = 5;
  const [pages, setPages] = React.useState(
    Math.ceil(rows.length / rowsPerPage)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>(
    new Set(["BTC", "GOLD"])
  );

  const filteredItems = React.useMemo(() => {
    let filteredRows = [...rows];
    const filterArr = Array.from(statusFilter);
    filteredRows = filteredRows.filter((item) =>
      filterArr.includes(item.assetName)
    );

    setPages(Math.ceil(filteredRows.length / rowsPerPage));

    return filteredRows;
  }, [rows, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  return (
    <Table
      aria-label="Table showing asset prices and volumes over time"
      className="mt-8"
      topContent={
        <div className="flex">
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<ChevronDownIcon className="text-small" />}
                size="sm"
                variant="flat">
                ASSETS
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Asset Filter"
              closeOnSelect={false}
              selectedKeys={statusFilter}
              selectionMode="multiple"
              onSelectionChange={setStatusFilter}>
              <DropdownItem key="BTC">BTC</DropdownItem>
              <DropdownItem key="GOLD">GOLD</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      }
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.date + item.assetName}>
            {(columnKey) => {
              let value = getKeyValue(item, columnKey);

              if (columnKey === "price" || columnKey === "volume") {
                value = `$${value.toLocaleString()}`; // Formats as currency for both fields
              }

              return <TableCell>{value}</TableCell>;
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default AssetPriceTable;
