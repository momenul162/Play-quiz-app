import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Statistics = () => {
  const topics = useLoaderData();

  return (
    <div className="md:bg-sky-100 my-32 md:mx-16">
      <LineChart
        className=""
        width={800}
        height={300}
        data={topics.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="total" stroke="black" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default Statistics;
