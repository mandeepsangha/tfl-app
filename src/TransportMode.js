import React from "react";

const TransportMode = ( { modes } ) => {
  return (
    <>
        <select>
          <option value="none"> Pick a Mode of Transport please</option>
          {modes.map((obj, id) => {
          return (
            <option key={id} value={obj.modeName}>
              {obj.modeName}
            </option>
          );
        })}
        </select>
        
      </>
  );
};


export default TransportMode;