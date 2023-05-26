import "./App.css";
import PlayerSelect from "./components/playerSelect";
import PlayerCard from "./components/PlayerCard";
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

    console.log(selectedPlayer);
  }

  useEffect(() => {
    fetch("data.csv").then((response) =>
      response.json().then((json) => setPlayers(json))
    );
    console.log(players);
  }, []);

  return (
    <div className="App">
      <PlayerSelect
        options={players}
        selectedPlayer={selectedPlayer}
        toggleSelectedPlayer={toggleSelectedPlayer}
      />
      {selectedPlayer && <PlayerCard player={selectedPlayer}></PlayerCard>}
    </div>
  );
}

export default App;
