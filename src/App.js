import "./App.css";
import PlayerSelect from "./components/playerSelect";
import PlayerCard from "./components/PlayerCard";
import { useState, useEffect } from "react";

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedView, setSelectedView] = useState("All");
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
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <PlayerSelect
        playerOptions={players}
        selectedPlayer={selectedPlayer}
        toggleSelectedPlayer={toggleSelectedPlayer}
        selectedView={selectedView}
        toggleSelectedView={setSelectedView}
      />
      {selectedPlayer && (
        <PlayerCard player={selectedPlayer} view={selectedView} />
      )}
    </div>
  );
}

export default App;
