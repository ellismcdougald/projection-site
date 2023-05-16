import React from "react";
import DropDown from "./dropDown";

export default function playerSelect(props) {
  return (
    <div>
      <DropDown
        options={["Connor McDavid", "Leon Draisaitl"]}
        selectedOptionIndex={props.selectedPlayerIndex}
        toggleSelectedOption={props.toggleSelectedPlayerIndex}
      />
    </div>
  );
}
