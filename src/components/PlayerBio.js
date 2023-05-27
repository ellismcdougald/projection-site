import React from "react";

// add a vertical line underneath (bottom border)
// remove the spacing between headers

export default function PlayerBio(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>
        {props.position}, {props.season}
      </h2>
    </div>
  );
}
