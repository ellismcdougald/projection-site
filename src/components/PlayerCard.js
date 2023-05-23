import React from "react";
import styles from "../styles/PlayerCard.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function PlayerCard(props) {
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
      {props.player && (
        <div id={styles.cardContainer}>
          <div id={styles.playerBio}>
            <h1 className={styles.headerText}>{props.player.player}</h1>
            <h2 className={styles.headerText} id={styles.positionSeasonText}>
              {props.player.position}, {props.player.season}
            </h2>
            <div>
              <h3 className={styles.headerText} id={styles.statsHeader}>
                Statistics:
              </h3>
            </div>
          </div>
          <div id={styles.projectionChartContainer}>
            <Line data={data} options={options}></Line>
          </div>
        </div>
      )}
    </div>
  );
}
