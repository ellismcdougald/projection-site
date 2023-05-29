import React from "react";
import styles from "../styles/ComparableCard.module.css";
import TrajectoryChart from "./TrajectoryChart";

export default function ComparableCard(props) {
  return (
    <div id={styles.container} className="flex justify-between font-mono">
      <div className="flex flex-col justify-center text-left">
        <h1 id={styles.nameText}>{props.playerArr[0]}</h1>
        <h2 id={styles.subText}>{props.playerArr[2]}</h2>
        <h3>Similarity: {props.playerArr[3].toFixed(2)}</h3>
      </div>
      <div id={styles.rightContainer}>
        <TrajectoryChart
          data={[
            1.95, 2.46, 3.84, 3.03928268, 2.9608289127, 2.9737694739,
            3.1355211395, 3.3008620495,
          ]}
          labels={["20", "21", "22", "23", "24", "25", "26", "27"]}
        />
      </div>
    </div>
  );
}
