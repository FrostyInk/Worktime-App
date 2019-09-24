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
    }
  });

  function HandleChange(e) {
    const v = e.target.value;
    setValue(v);
  }

  function HandleClick(e) {
    e.target.previousSibling.value = "";
    props.AddPlaceCallback(value, worker);
  }

  return (
    <div className="HomeContent">
      <div className="Input">
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
      {typeof worker.places !== "undefined"
        ? worker.places.map((place, index) => (
            <div key={worker.id + place.name} className="Links">
              <button className="HomeDeleteButton">X</button>
              <Link
                className="LinkButton"
                to={{
                  pathname: `${worker.id}/${place.name}`,
                  worker: worker,
                  place: place,
                  index: index
                }}
              >
                {place.name}
              </Link>
            </div>
          ))
        : null}
    </div>
  );
}

export default WorkPlaces;
