import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from "./components/Grid";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Grid>Demo</Grid>
      <Counter />
    </div>
  );
}

export default App;
