import React from "react";
import styles from "../styles/ComparableCard.module.css";
import TrajectoryChart from "./TrajectoryChart";

export default function ComparableCard(props) {
  function generateLabelArr(season) {
    console.log(season);
    const seasonYear = season.substring(2, 4);
    return Array.from(
      { length: 7 },
      (x, i) => "'" + (i + parseInt(seasonYear)).toString()
    );
  }

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
          //data={[...props.playerArr[4], ...props.playerArr[5]]}
          //labels={generateLabelArr(props.playerArr[2])}
          //labels={["20", "21", "22", "23", "24", "25", "26", "27"]}
          labels={[
            ...Object.keys(props.playerDict["last_3"]),
            ...Object.keys(props.playerDict["next_5"]),
          ].map((i) => "'" + i)}
        />
      </div>
    </div>
  );
}
