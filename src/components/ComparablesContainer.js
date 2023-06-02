import React from "react";
import ComparableCard from "./ComparableCard";

export default function ComparablesContainer(props) {
  return (
    <div className="container m-auto grid grid-cols-2 gap-x-10 gap-y-2">
      {props.comparables.map((comp) => {
        return (
          <ComparableCard playerDict={comp} key={comp.player + comp.season} />
        );
      })}
    </div>
  );
}
