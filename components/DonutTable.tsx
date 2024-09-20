import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function DonutTable() {
  return (
    <Table
      removeWrapper
      hideHeader
      aria-label="Example static collection table"
      className="mt-4">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Assets</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>% Change</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>BTC</TableCell>
          <TableCell>60,000</TableCell>
          <TableCell>+5.0%</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>GOLD</TableCell>
          <TableCell>4,000</TableCell>
          <TableCell>-7.5%</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>ETH</TableCell>
          <TableCell>2,5000</TableCell>
          <TableCell>+3.5%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
