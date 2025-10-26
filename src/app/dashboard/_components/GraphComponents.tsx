import React from 'react';
import { ChartPieInteractive } from './graphs/PieChart';
import { ChartPieSimple } from './graphs/ChartPieSimple';

const GraphComponents = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-3">
               <ChartPieInteractive />
               <ChartPieSimple />
            </div>
        </div>
    );
}

export default GraphComponents;
