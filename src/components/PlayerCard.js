import React from "react";
import styles from "../styles/PlayerCard.module.css";
import TrajectoryChart from "./TrajectoryChart";
import ComparablesContainer from "./ComparablesContainer";
import SkillsChart from "./SkillsChart";
import PlayerBio from "./PlayerBio";

export default function PlayerCard(props) {
  return (
    <div
      id={styles.container}
      className="w-4/5 flex flex-col items-center justify-center p-10"
    >
      {props.player && (
        <div className="w-full" id={styles.cardContainer}>
          <PlayerBio
            name={props.player.player}
            position={props.player.position}
            season={props.player.season}
          />
          {props.view === "Projection" && (
            <div className="w-full pt-2">
              <h1 className="font-mono text-center">Points/60 Forecast:</h1>
              {console.log(props.player)}
              <TrajectoryChart
                data={[
                  ...Object.values(props.player.last_three),
                  ...Object.values(props.player.projection),
                ]}
                labels={[
                  ...Object.keys(props.player.last_three),
                  ...Object.keys(props.player.projection),
                ].map((i) => "'" + i)}
              />
            </div>
          )}
          {props.view === "Skills Breakdown" && (
            <div className="w-full pt-2">
              <h1 className="font-mono text-center">Skills Profile:</h1>
              <SkillsChart player={props.player} />
            </div>
          )}
          {props.view === "Comparables" && (
            <div className="w-full pt-2">
              <h1 className="font-mono text-center">Comparables:</h1>
              <ComparablesContainer comparables={props.player.comparables} />
            </div>
          )}
          {props.view === "All" && (
            <div className="container m-auto grid grid-cols-2 column-gap-10 pt-2">
              <div className="font-mono text-center">
                <h1>Skills Profile:</h1>
                <SkillsChart player={props.player} />
              </div>
              <div>
                <h1 className="font-mono text-center">Projection:</h1>
                <TrajectoryChart
                  data={[
                    ...Object.values(props.player.last_three),
                    ...Object.values(props.player.projection),
                  ]}
                  labels={[
                    ...Object.keys(props.player.last_three),
                    ...Object.keys(props.player.projection),
                  ].map((i) => "'" + i)}
                />
              </div>
              <div className="col-span-2 pt-2">
                <h1 className="font-mono text-center">Comparables:</h1>
                <ComparablesContainer comparables={props.player.comparables} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
