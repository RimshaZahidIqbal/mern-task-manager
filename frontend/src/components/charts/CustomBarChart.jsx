import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";

const CustomBarChart = ({ data }) => {
    const getBarColor = (entry) => {
        switch (entry?.priority) {
            case 'Low':
                return '#00bc7d';
            case 'Medium':
                return '#fe9900';
            case 'High':
                return '#ff1f57';
            default:
                return '#00bc7d';
        }
    };
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const item = payload[0]?.payload;
            return (
                <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
                    <p className="text-xs font-semibold text-purple-800 mb-1">
                        {item?.priority}
                    </p>
                    <p className="text-sm text-gray-600">
                        Count:{" "}
                        <span className="text-sm font-medium text-gray-900">
                            {item?.count}
                        </span>
                    </p>
                </div>
            );
        }
        return null;
    };

    if (!data || data.length === 0) {
        return <p className="text-sm text-gray-400">No data available</p>;
    }

    return (
        <div className="bg-white mt-6">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="priority"
                        tick={{ fontSize: 12, fill: "#555" }}
                        stroke="#ccc"
                    />
                    <YAxis
                        tick={{ fontSize: 12, fill: "#555" }}
                        stroke="#ccc"
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,0,0,0.05)" }} />
                    <Bar
                        dataKey="count"
                        radius={[10, 10, 0, 0]}
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={getBarColor(entry)} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

};

export default CustomBarChart;



// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     ResponsiveContainer,
//     Cell,
// } from "recharts";

// const CustomBarChart = ({ data }) => {
//     const getBarColor = (entry) => {
//         switch (entry?.priority) {
//             case 'Low':
//                 return '#00bc7d';
//             case 'Medium':
//                 return '#fe9900';
//             case 'High':
//                 return '#ff1f57';
//             default:
//                 return '#00bc7d';
//         }
//     };

//     const CustomTooltip = ({ active, payload }) => {
//         if (active && payload && payload.length) {
//             return (
//                 <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
//                     <p className="text-xs font-semibold text-purple-800 mb-1">
//                         {payload[0].payload.priority}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                         Count:{" "}
//                         <span className="text-sm font-medium text-gray-900">
//                             {payload[0].payload.count}
//                         </span>
//                     </p>
//                 </div>
//             );
//         }
//         return null;
//     };
//     // if (!data || data.length === 0) {
//     if (!data) {
//         return <p className="text-sm text-gray-400">No data available</p>;
//     }

//     return (
//         <div className="bg-white mt-6">
//             <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={data}>
//                     <CartesianGrid stroke="none" />
//                     <XAxis
//                         dataKey="priority"
//                         tick={{ fontSize: 12, fill: "#555" }}
//                         stroke="none"
//                     />
//                     <YAxis
//                         tick={{ fontSize: 12, fill: "#555" }}
//                         stroke="none"
//                     />
//                     <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
//                     <Bar
//                         dataKey="count"
//                         nameKey="priority"
//                         fill="#ff8042"
//                         radius={[10, 10, 0, 0]}
//                         activeDot={{ r: 8, fill: "yellow" }}
//                         activeStyle={{ fill: "green" }}
//                     >
//                         {data.map((entry, index) => (
//                             <Cell key={index} fill={getBarColor(entry)} />
//                         ))}
//                     </Bar>
//                 </BarChart>
//             </ResponsiveContainer>
//         </div>
//     );
// };

// export default CustomBarChart;
