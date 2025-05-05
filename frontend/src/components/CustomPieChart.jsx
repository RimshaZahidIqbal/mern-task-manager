import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";
import CustomLegend from './CustomLegend';
import CustomTooltip from './CustomTooltip';

const CustomPieChart = ({ data, colors }) => {
    if (!Array.isArray(data) || data.length === 0) {
        return <p className="text-sm text-gray-400">No data available</p>;
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="count"
                    nameKey="status"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    innerRadius={100}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={colors[index % colors.length]}
                        />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} />

            </PieChart>
        </ResponsiveContainer>
    );
};

export default CustomPieChart;
