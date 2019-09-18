import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function WorkPlaces(props) {
  const [value, setValue] = useState("");
  const [worker, SetWorker] = useState([]);

  useEffect(() => {});

  function HandleChange(e) {
    const v = e.target.value;
    setValue(v);
  }

  function HandleClick(e) {
    props.AddPlaceCallback(value, props.location.worker);
  }

  return (
    <div className="HomeContent">
      <Header title={`${props.location.worker.name}->Työkohteet`} />
      {props.location.worker.places.map(place => (
        <div key={props.location.worker.id + place.name} className="Links">
          <button className="HomeDeleteButton">X</button>
          <Link
            className="LinkButton"
            to={{
              pathname: `${props.location.worker.id}/${place.name}`,
              worker: props.location.worker,
              place: place
            }}
          >
            {place.name}
          </Link>
        </div>
      ))}
      <input
        className="AddInput"
        placeholder="Lisää työkohde"
        onChange={HandleChange}
        type="text"
      ></input>
      <button className="AddInputSubmit" onClick={HandleClick}>
        +
      </button>
    </div>
  );
}

export default WorkPlaces;
