"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Total, InitialCost, Profit, PL } from "../InvestmentIcons";

export const Header: React.FC = () => {
  return (
    <section className="flex justify-evenly w-full gap-4">
      <Card className="flex-row basis-1/4 py-4 pe-0 ps-2">
        <Total />
        <CardBody className="flex-1 flex flex-col justify-center">
          <h4 className="text uppercase font-bold">Total Investment</h4>
          <p className="text-default-500">500,000 THB</p>
        </CardBody>
      </Card>
      <Card className="flex-row basis-1/4 py-4 pe-0 ps-2">
        <InitialCost />
        <CardBody className="flex-1 flex flex-col justify-center">
          <h4 className="text uppercase font-bold">Initial Cost</h4>
          <p className="text-default-500">500,000 THB</p>
        </CardBody>
      </Card>
      <Card className="flex-row basis-1/4 py-4 pe-0 ps-2">
        <Profit />
        <CardBody className="flex-1 flex flex-col justify-center">
          <h4 className="text uppercase font-bold">Profit</h4>
          <p className="text-default-500">500,000 THB</p>
        </CardBody>
      </Card>
      <Card className="flex-row basis-1/4 py-4 pe-0 ps-2">
        <PL />
        <CardBody className="flex-1 flex flex-col justify-center">
          <h4 className="text uppercase font-bold">Total P&L</h4>
          <p className="text-default-500">500,000 THB</p>
        </CardBody>
      </Card>
    </section>
  );
};
