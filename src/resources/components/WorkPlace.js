import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function WorkPlace(props) {
  console.log(props);
  const [value, setValue] = useState("");
  const [worker, SetWorker] = useState({});
  const [place, SetPlace] = useState({});
  useEffect(() => {
    const t = props.GetWorkerById(props.match.params.id);
    if (typeof t !== "undefined") {
      SetWorker(t);
    }
  });

  useEffect(() => {
    if (typeof worker !== "undefined") {
      const p = props.GetWorkplaceFrom(props.match.params.workplace, worker);
      if (typeof p !== "undefined") {
        console.log("Setting place to " + p.name);
        SetPlace(p);
        props.SetTitle(worker.name + " -> " + p.name);
      }
    }
  }, [worker]);

  function HandleChange(e) {
    setValue(e.target.value);
  }

  function HandleClick(e) {
    props.AddWeekCallback(value, place, worker);
  }

  return (
    <div className="HomeContent">
      {typeof worker !== "undefined" && typeof place.weeks !== "undefined"
        ? place.weeks.map(week => (
            <div key={worker.id + place.name + week.name} className="Links">
              <button className="HomeDeleteButton">X</button>
              <Link
                className="LinkButton"
                to={{
                  pathname: `${worker.id}/${place.name}`,
                  worker: worker,
                  place: place,
                  week: week
                }}
              >
                {week.name}
              </Link>
            </div>
          ))
        : console.log("Doesn't exist")}
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
