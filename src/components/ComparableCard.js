import React from "react";
import styles from "../styles/ComparableCard.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function ComparableCard(props) {
  const data = {
    labels: ["20", "21", "22", "23", "24", "25", "26", "27"],
    datasets: [
      {
        labels: "Projection",
        data: [
          1.95, 2.46, 3.84, 3.03928268, 2.9608289127, 2.9737694739,
          3.1355211395, 3.3008620495,
        ],
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
  return (
    <div id={styles.container}>
      <div>
        <h1 id={styles.nameText}>{props.playerArr[0]}</h1>
        <h2 id={styles.subText}>
          {props.playerArr[2]}, {`Similarity: ${props.playerArr[3].toFixed(2)}`}
        </h2>
      </div>
      <div id={styles.rightContainer}>
        <div id={styles.chartContainer}>
          <Line data={data} options={options}></Line>
        </div>
      </div>
    </div>
  );
}
