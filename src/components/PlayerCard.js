import React from "react";
import styles from "../styles/PlayerCard.module.css";
import TrajectoryChart from "./TrajectoryChart";
import ComparablesContainer from "./ComparablesContainer";
import SkillsChart from "./SkillsChart";

export default function PlayerCard(props) {
  return (
    <div id={styles.container}>
      {props.player && (
        <div id={styles.cardContainer}>
          {/* {make player bio a component} */}
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
          <TrajectoryChart
            data={[1, 2, 3, 3, 3, 3, 3, 3]}
            labels={["20", "21", "22", "23", "24", "25", "26", "27"]}
          />
          <SkillsChart player={props.player} />
        </div>
      )}
    </div>
  );
}
