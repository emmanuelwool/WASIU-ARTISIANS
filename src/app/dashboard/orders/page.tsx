import OrderRender from "./_components/OrdersRender";
import Stat from "./_components/Stat";
import { ChartAreaInteractive } from "./charts";

export default function page(){
    return (
        <>
<div className="flex flex-col space-y-4 gap-4">
    <ChartAreaInteractive />
            <Stat />
                      <OrderRender /></div>          
        </>
    )
}