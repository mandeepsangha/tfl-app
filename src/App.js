import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "https://api.tfl.gov.uk/Line/Meta/Modes";

  const [modes, Setmodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.tfl.gov.uk/Line/Meta/Modes`);
      Setmodes(result.data);
    };
    fetchData();
  }, []);

  //fetch(url).then((response) => response.json().then((data) => Setmodes(data)));

  console.log(modes.modeName);

  const SelectMode = ({ modes }) => (
    <select>
      {modes.map((el, key) => (
        <option key={key}>{el.modeName}</option>
      ))}
    </select>
  );

  return (
    <div className="App">
      <header>Transport for London Line Information</header>
      <div style={{ marginTop: "1rem" }}>
        <SelectMode modes={modes} />
      </div>
      <div style={{ marginTop: "1rem" }}>SearchBox</div>
      <div style={{ marginTop: "1rem" }}>Search Confirmation</div>
      <div style={{ display: "flex", padding: "100px" }}>
        <div style={{ padding: "7rem" }}>Start of Line</div>
        <div style={{ padding: "7rem" }}> End of Line</div>
      </div>
    </div>
  );
}

export default App;
