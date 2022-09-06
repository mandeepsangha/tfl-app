import React from "react";

const TransportLine = ({ modes }) => {
  return (
    <>
      <select >
      {modes.map((el, key) => (
        <option key={key}>{el.modeName} </option>
      ))}
    </select>
    </>
  );
};

export default TransportLine;
