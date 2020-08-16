import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';
import "./style.scss";

export const WeightStatsGraph = () => {
    const data = [
        {
          name: '14.01', weight: 67.00,
        },
        {
          name: '15.01', weight: 66.50,
        },
        {
          name: '16.01', weight: 66.40,
        },
        {
          name: '19.01', weight: 65.00,
        },
        {
          name: '22.01', weight: 64.80,
        },
        {
          name: '29.01', weight: 64.90,
        },
        {
          name: '05.05', weight: 65.00,
        },
      ];

    const CustomizedLabel = () => {
           return (
            {fontSize: 10, value:12, dy:-10 }
           )
    }
    
    return (
        <div className="weightStatsGraph">
            <LineChart width={232} height={120} data={data}
                margin={{top: 0, right: 0, left: -20, bottom: -10}}>
                <XAxis  fontSize={10} interval={0} dataKey="name"/>
                <YAxis fontSize={10} tickCount={10} dataKey="weight" type="number" domain={['dataMin - 1.00', 'dataMax + 1.00']}  />
                <CartesianGrid strokeDasharray="3 3"  />
                <Tooltip/>
                <Line type="monotone" dataKey="weight" label={{fontSize: 10, value:12, dy:-10 }} stroke="#26a69a" />
                {/* <Line type="monotone" dataKey="weight" label={<CustomizedLabel />} stroke="#26a69a" /> */}
            </LineChart>
        </div>
    );
};