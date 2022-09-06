import React, { useState, useEffect } from "react";
import axios from "axios";
import TransportMode from "./TransportMode";
import TransportLine from "./TransportLine";
import StartEndLine from "./StartEndLine";

const TopMenu = () => {
  const [modes, Setmodes] = useState([]);
  const [modeDestinations, SetModeDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.tfl.gov.uk/Line/Meta/Modes`);
      Setmodes(result.data);
    };
    fetchData();
  }, []);

  const SelectMode = ({ modes }) => (
    <select onChange={handleChange}>
      {modes.map((el, key) => (
        <option key={key}>{el.modeName} </option>
      ))}
    </select>
  );

  const SelectModeDestinations = ({ modes }) => (
    <select onChange={handleChange}>
      {modes.map((el, key) => (
        <option key={key}>{el.modeName} </option>
      ))}
    </select>
  );

  const handleChange = (el) => {
    console.log("clicked");
    const fetchDataPath = async () => {
      const result = await axios(`https://api.tfl.gov.uk/Line/Mode/${el}`);

      console.log(result);
      SetModeDestinations(result.data);
    };
    fetchDataPath();
  };

  return (
    <div className="App">
      <header>Transport for London Line Information</header>
      <TransportMode modes={modes} />
      <TransportLine modes={modes}/>
      <StartEndLine />
      <div style={{ marginTop: "1rem" }}>SearchBox</div>
      <div style={{ marginTop: "1rem" }}>Search Confirmation</div>
      <div style={{ display: "flex", padding: "100px" }}>
        <div style={{ padding: "7rem" }}>Start of Line</div>
        <div style={{ padding: "7rem" }}> End of Line</div>
      </div>
    </div>
  );
};
export default TopMenu;
