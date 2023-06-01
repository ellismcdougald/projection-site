import React from "react";
import DropDown from "./dropDown";

export default function playerSelect(props) {
  return (
    <div className="flex gap-x-10">
      <DropDown
        mode="player"
        options={props.playerOptions}
        selectedOption={props.selectedPlayer}
        toggleSelectedOption={props.toggleSelectedPlayer}
        emptyMessage="Select a player..."
        width={22.5}
      />
      <DropDown
        mode="view"
        options={["All", "Projection", "Skills Breakdown", "Comparables"]}
        selectedOption={props.selectedView}
        toggleSelectedOption={props.toggleSelectedView}
        emptyMessage="Select a view..."
        width={12.5}
      />
    </div>
  );
}
