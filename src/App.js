import React from "react";
import GameCanvas from "./components/GameCanvas";
import GameControl from "./components/GameControl";

const App = () => (
  <div className="app">
    <GameCanvas />
    <GameControl />
  </div>
);

export default App;
