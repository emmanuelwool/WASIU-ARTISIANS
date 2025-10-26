"use client";
import Stat from "./_components/Stat"

import { ChartLineInteractive } from "./_components/Chart";
import OrderRender from "./_components/earningsTable/OrdersRender";

export default function page() {
  return (
    <>
      <div className="flex flex-col gap-4 space-y-8">
        <ChartLineInteractive />
        <Stat />

        <OrderRender />
      </div>
    </>
  );
}
