import GraphComponents from "./_components/GraphComponents";
import OrderRender from "./_components/orders/OrdersRender";
import PayementRender from "./_components/payement/PayementRender";
import Stat from "./_components/Stat";
import { Suspense } from "react";

export default async function page() {
    return (
        <>
           <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="font-semibold text-2xl">Hello Deen </h1>
                <p className="text-gray-500 font-light">Happy to see you grow up together</p>
            </div>
            <Stat />
            {/* <GraphComponents /> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <PayementRender />
                    <PayementRender />
            </div>

            <OrderRender />
           </div>
        </>
    )
}
