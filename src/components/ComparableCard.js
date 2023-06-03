import React from "react";
import styles from "../styles/ComparableCard.module.css";
import TrajectoryChart from "./TrajectoryChart";

export default function ComparableCard(props) {
  return (
    <div id={styles.container} className="flex justify-between font-mono">
      <div className="flex flex-col justify-center text-left">
        <h1 id={styles.nameText}>{props.playerDict["player"]}</h1>
        <h2 id={styles.subText}>{props.playerDict["season"]}</h2>
        <h3>Similarity: {props.playerDict["similarity"].toFixed(2)}</h3>
      </div>
      <div id={styles.rightContainer}>
        <TrajectoryChart
          data={[
            ...Object.values(props.playerDict["last_3"]),
            ...Object.values(props.playerDict["next_5"]),
          ]}
          labels={[
            ...Object.keys(props.playerDict["last_3"]),
            ...Object.keys(props.playerDict["next_5"]),
          ].map((i) => "'" + i)}
        />
      </div>
    </div>
  );
}
