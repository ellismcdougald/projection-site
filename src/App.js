import "./App.css";
import PlayerSelect from "./components/playerSelect";
import { useState, useEffect } from "react";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [players, setPlayers] = useState(null);

  function toggleSelectedPlayer(player) {
    if (selectedPlayer === null) {
      setSelectedPlayer(player);
    } else if (selectedPlayer.id !== player.id) {
      setSelectedPlayer(player);
    } else {
      setSelectedPlayer(null);
    }
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
