import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    months: 150,
  },
  {
    name: "Feb",
    months: 199,
  },
  {
    name: "Mar",
    months: 149,
  },
  {
    name: "Apr",
    months: 208,
  },
  {
    name: "May",
    months: 135,
  },
  {
    name: "June",
    months: 301,
  },

  {
    name: "July",
    months: 130,
  },

  {
    name: "Aug",
    months: 210,
    fees: 8,
  },

  {
    name: "Sep",
    months: 335,
  },

  {
    name: "Oct",
    months: 290,
  },

  {
    name: "Nov",
    months: 210,
  },

  {
    name: "Dec",
    months: 310,
  },
];

function Chart() {
  return (
    <div className="chart-div">
      <LineChart width={650} height={255} data={data}>
        <CartesianGrid vertical={false} stroke="#EBE9F1" />

        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          stroke="#B9B9C3"
        />
        <YAxis
          axisLine={false} // Hide the Y-axis line
          tickLine={false}
          stroke="#B9B9C3"
        />

        <Tooltip
          contentStyle={{ backgroundColor: "#00b8a9", color: "#fff" }}
          itemStyle={{ color: "#fff" }}
          cursor={false}
        />

        <Line
          type="monotone"
          dataKey="months"
          stroke="#00b8a9"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </div>
  );
}

export default Chart;
