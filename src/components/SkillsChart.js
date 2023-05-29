import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, BarElement);

export default function SkillsChart(props) {
  const options = {
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

  const data = {
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
  return <Bar data={data} options={options} />;
}
