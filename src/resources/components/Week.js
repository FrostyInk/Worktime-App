import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Week(props) {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(props);
  });

  return (
    <div className="HomeContent">
      <Header
        title={`${props.location.worker.name}->${props.location.place.name}->${props.location.week.name}`}
      />

      {Object.keys(props.location.week.days).map(key => (
        <div>
          <label className="Key">{key}</label>
          <label className="Value">{props.location.week.days[key]}</label>
        </div>
      ))}
      <div>
        <label className="Key">Yhteensä</label>
        <label className="Value">0</label>
      </div>
    </div>
  );
}

export default Week;
