import { useContext } from "react";

import Router from "./Router/Router";

import { PokemonContext } from "./state/PokemonContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <PokemonContext>
        <Router />
      </PokemonContext>
    </div>
  );
}

export default App;
