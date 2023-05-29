import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

export default function TrajectoryChart(props) {
  const data = {
    labels: props.labels,
    datasets: [
      {
        labels: "Projection",
        data: props.data,
        backgroundColor: "black",
        borderColor: "black",
        pointBorderColor: "black",
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Custom Chart Title",
      },
      legend: false,
    },
    scales: {
      y: {
        title: {
          display: false,
          text: "PTS / 60",
        },
        min: 0,
        max: 6,
      },
      x: {
        title: {
          display: false,
          text: "Season",
        },
      },
    },
  };

  return <Line data={data} options={options}></Line>;
}
