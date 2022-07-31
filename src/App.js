import logo from "./logo.svg";
import "./App.css";
import React from "react";

import TopMenu from "./TopMenu";

function App() {
  return (
    <div className="App">
      <header>Transport for London Line Information</header>
      <div style={{ marginTop: "1rem" }}>
        <TopMenu />
      </div>
    </div>
  );
}

export default App;
