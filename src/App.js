import "./App.css";
import PlayerSelect from "./components/playerSelect";
import { useState } from "react";

function App() {
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(null);

  function toggleSelectedPlayerIndex(playerIndex) {
    console.log("test");
    setSelectedPlayerIndex(playerIndex);
  }

  return (
    <div className="App">
      <PlayerSelect
        selectedPlayerIndex={selectedPlayerIndex}
        toggleSelectedPlayerIndex={toggleSelectedPlayerIndex}
      />
    </div>
  );
}

export default App;
