import "./App.css";
import PlayerSelect from "./components/playerSelect";
import { useState, useEffect } from "react";

const PLAYERS = [
  {
    name: "Connor McDavid",
    position: "C",
    season: "2021-22",
    id: 1,
  },
  {
    name: "Leon Draisaitl",
    position: "C",
    season: "2021-22",
    id: 2,
  },
];

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [players, setPlayers] = useState(null);

  function toggleSelectedPlayer(playerIndex) {
    setSelectedPlayer(playerIndex);
  }

  useEffect(() => {
    fetch("data.csv").then((response) =>
      response.text().then((text) =>
        setPlayers(
          text
            .split("\n")
            .map((i) => i.split(","))
            .map((i) => {
              return { name: i[0], position: i[1], season: i[2], id: i[3] };
            })
        )
      )
    );
  }, [players]);

  return (
    <div className="App">
      <PlayerSelect
        options={players}
        selectedPlayer={selectedPlayer}
        toggleSelectedPlayer={toggleSelectedPlayer}
      />
    </div>
  );
}

export default App;
