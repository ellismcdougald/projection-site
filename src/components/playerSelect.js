import React from "react";
import DropDown from "./dropDown";

export default function playerSelect(props) {
  return (
    <div>
      <DropDown
        options={props.options}
        selectedOption={props.selectedPlayer}
        toggleSelectedOption={props.toggleSelectedPlayer}
        emptyMessage="Select a player..."
      />
    </div>
  );
}
