import React from "react";
import styles from "../styles/PlayerCard.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import ComparablesContainer from "./ComparablesContainer";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  BarElement
);

export default function PlayerCard(props) {
  const lineData = {
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
  const lineOptions = {
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

  const barOptions = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    scales: {
      x: {
        suggestedMax: 3,
        suggestedMin: -3,
      },
      y: {
        ticks: {
          autoSkip: false,
        },
      },
    },
  };
  const labels = [
    // bio
    "Height",
    "Weight",
    "Draft Pos.",
    // scoring
    "Goals",
    "Shots",
    "Sh%",
    "xGoals",
    "Scoring Chances",
    "High-Danger Shots",
    "Rebounds Created",
    // playmaking
    "First Assists",
    "Second Assists",
    "Rush Attempts",
    "Penalties Drawn",
    // usage
    "TOI",
    "TOI/GP",
  ];

  const barData = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [
          props.player["z_height"],
          props.player["z_weight"],
          props.player["z_draft_position"],
          props.player["z_goals/60"],
          props.player["z_shots/60"],
          props.player["z_sh%"],
          props.player["z_ixg/60"],
          props.player["z_iscf/60"],
          props.player["z_ihdcf/60"],
          props.player["z_rebounds_created/60"],
          props.player["z_first_assists/60"],
          props.player["z_second_assists/60"],
          props.player["z_rush_attempts/60"],
          props.player["z_penalties_drawn/60"],
          props.player["z_toi"],
          props.player["z_toi/gp"],
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
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
                <ComparablesContainer comparables={props.player.comparables} />
              </h3>
            </div>
          </div>
          <div id={styles.projectionChartContainer}>
            <Line data={lineData} options={lineOptions}></Line>
          </div>
          <div id={styles.statsContainer}>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      )}
    </div>
  );
}
