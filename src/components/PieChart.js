import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 100 },
  { name: "Group B", value: 500 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 300 },
];
const COLORS = ["#ddeceb", "#00b8a9", "#ddeceb", "#00b8a9"];

function Circle() {
  return (
    <div>
      <div className="pie-chart-container">
        <PieChart width={500} height={400}>
          {/* Single Pie */}
          <Pie
            data={data}
            cx={400} // Adjust cx to center the pie chart
            cy={200}
            innerRadius={40} // Adjust innerRadius to decrease the size
            outerRadius={60} // Adjust outerRadius to decrease the size
            fill="#fff"
            paddingAngle={5}
            dataKey="value"
            startAngle={90}
            endAngle={-270} // Adjust endAngle to make it a continuous pie
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default Circle;
