import React from "react";
import styles from "../styles/PlayerCard.module.css";
import TrajectoryChart from "./TrajectoryChart";
import ComparablesContainer from "./ComparablesContainer";
import SkillsChart from "./SkillsChart";
import PlayerBio from "./PlayerBio";

export default function PlayerCard(props) {
  return (
    <div id={styles.container}>
      {props.player && (
        <div id={styles.cardContainer}>
          <PlayerBio
            name={props.player.player}
            position={props.player.position}
            season={props.player.season}
          />
          <ComparablesContainer comparables={props.player.comparables} />
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
