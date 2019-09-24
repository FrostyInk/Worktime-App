import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function WorkPlace(props) {
  const [value, setValue] = useState("");
  const [worker, SetWorker] = useState({});
  const [place, SetPlace] = useState({});
  const [total, SetTotal] = useState(0);

  useEffect(() => {
    const t = props.GetWorkerById(props.match.params.id);
    if (typeof t !== "undefined") {
      SetWorker(t);
    }
  });

  useEffect(() => {
    if (place.weeks !== "undefined") {
      CalcTotalAllWeeks();
    }
  }, [place]);

  useEffect(() => {
    if (typeof worker !== "undefined") {
      const p = props.GetWorkplaceFrom(props.match.params.workplace, worker);
      if (typeof p !== "undefined") {
        SetPlace(p);
        props.SetTitle(worker.name + " -> " + p.name);
      }
    }
  }, [worker]);

  function HandleChange(e) {
    setValue(e.target.value);
  }

  function HandleClick(e) {
    e.target.previousSibling.value = "";
    props.AddWeekCallback(value, place, worker);
  }

  function CalcTotalWeek(week) {
    let sum = 0;
    for (let key in week.days) {
      if (week.days.hasOwnProperty(key)) {
        sum = sum + parseFloat(week.days[key]);
      }
    }
    // sum.toFixed(1)
    return sum;
  }

  function CalcTotalAllWeeks() {
    let sum = 0;
    for (const item in place.weeks) {
      sum = sum + CalcTotalWeek(place.weeks[item]);
    }

    SetTotal(sum);
  }

  return (
    <div className="HomeContent">
      <div className="Input">
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
      {typeof worker !== "undefined" && typeof place.weeks !== "undefined"
        ? place.weeks.map(week => (
            <div key={worker.id + place.name + week.name} className="Links">
              <button className="HomeDeleteButton">X</button>
              <Link
                className="LinkButtonShort"
                to={{
                  pathname: `${place.name}/${week.name}`,
                  worker: worker,
                  place: place,
                  week: week
                }}
              >
                {week.name}
              </Link>
              <label className="WeekTotalValue">{CalcTotalWeek(week)}</label>
            </div>
          ))
        : null}
      <div>
        <label className="Total">Yhteensä</label>
        <label className="TotalValue">{total}</label>
      </div>
    </div>
  );
}

export default WorkPlace;
