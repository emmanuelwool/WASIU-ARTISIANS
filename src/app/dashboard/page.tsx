import GraphComponents from "./_components/GraphComponents";
import Stat from "./_components/Stat";

export default function page() {
    return (
        <>
           <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="font-semibold text-2xl">Hello Deen </h1>
                <p className="text-gray-500 font-light">Happy to see you grow up together</p>
            </div>
            <Stat />
            {/* <GraphComponents /> */}
           </div>
        </>
    )
}
