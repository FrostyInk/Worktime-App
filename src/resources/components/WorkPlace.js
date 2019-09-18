import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function WorkPlace(props) {
  const [value, setValue] = useState("");
  useEffect(() => {});

  function HandleChange(e) {
    setValue(e.target.value);
  }

  function HandleClick(e) {
    props.AddWeekCallback(value, props.location.place, props.location.worker);
  }

  return (
    <div className="HomeContent">
      <Header
        title={`${props.location.worker.name}->${props.location.place.name}->Viikot`}
      />
      {props.location.place.weeks.map(week => (
        <div
          key={props.location.worker.id + props.location.place.name + week.name}
          className="Links"
        >
          <button className="HomeDeleteButton">X</button>
          <Link
            className="LinkButton"
            to={{
              pathname: `${props.location.place.name}/${week.name}`,
              worker: props.location.worker,
              place: props.location.place,
              week: week
            }}
          >
            {week.name}
          </Link>
        </div>
      ))}
      <input
        className="AddInput"
        placeholder="Lisää viikko"
        onChange={HandleChange}
        type="text"
      ></input>
      <button className="AddInputSubmit" onClick={HandleClick}>
        +
      </button>
    </div>
  );
}

export default WorkPlace;
