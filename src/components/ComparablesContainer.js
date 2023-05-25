import React from "react";
import ComparableCard from "./ComparableCard";

const testArr = [
  "Sidney Crosby",
  "F",
  "2013-14",
  36.82617669,
  [5.46, 4.42, 3.55],
  [3.27, 3.12, 3.58, 3.15, 3.62],
];

export default function ComparablesContainer(props) {
  return (
    <div>
      Comparables:
      {props.comparables.map((comp) => {
        return <ComparableCard playerArr={comp} />;
      })}
    </div>
  );
}
