"use client";

import { Bar, BarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Page A",
    office: 4000,
    wfh: 2400,
  },
  {
    name: "Page B",
    office: 3000,
    wfh: 1398,
  },
  {
    name: "Page C",
    office: 2000,
    wfh: 9800,
  },
  {
    name: "Page D",
    office: 2780,
    wfh: 3908,
  },
  {
    name: "Page E",
    office: 1890,
    wfh: 4800,
  },
  {
    name: "Page F",
    office: 2390,
    wfh: 3800,
  },
  {
    name: "Page G",
    office: 3490,
    wfh: 4300,
  },
];

export default function MonthActivity() {
  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart data={data}>
        <Bar dataKey="office" stackId={1} fill="#8884d8" />
        <Bar dataKey="wfh" stackId={1} fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
