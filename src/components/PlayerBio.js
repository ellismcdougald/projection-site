import React from "react";

// add a vertical line underneath (bottom border)
// remove the spacing between headers

export default function PlayerBio(props) {
  return (
    <div className="flex flex-col items-center justify-center border-b-2 border-black font-mono">
      <h1 className="text-2xl">{props.name}</h1>
      <h2 className="text-xl">
        {props.position}, {props.season}
      </h2>
    </div>
  );
}
