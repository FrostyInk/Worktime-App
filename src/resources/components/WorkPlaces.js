import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function WorkPlaces(props) {
  const [value, setValue] = useState("");
  const [worker, SetWorker] = useState([]);

  useEffect(() => {
    const t = props.GetWorkerById(props.match.params.id);
    if (typeof t !== "undefined") {
      SetWorker(t);
      props.SetTitle(t.name + " --> ");
      console.log("Setting worker to " + t.name);
    }
  });

  function HandleChange(e) {
    const v = e.target.value;
    setValue(v);
  }

  function HandleClick(e) {
    props.AddPlaceCallback(value, worker);
  }

  return (
    <div className="HomeContent">
      {typeof worker.name !== "undefined"
        ? worker.places.map(place => (
            <div key={worker.id + place.name} className="Links">
              <button className="HomeDeleteButton">X</button>
              <Link
                className="LinkButton"
                to={{
                  pathname: `${worker.id}/${place.name}`,
                  worker: worker,
                  place: place
                }}
              >
                {place.name}
              </Link>
            </div>
          ))
        : console.log("Worker not found...")}
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
