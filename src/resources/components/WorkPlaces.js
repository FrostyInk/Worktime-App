import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import DeleteConfirmation from "./DeleteConfirmation";

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
    setValue("");
  }

  function HandleDeleteClick(place, worker) {
    props.SetShowPopUp(true);
    props.SetToDelete({
      user: worker,
      toDelete: place
    });
  }

  function CalcTotal(place) {
    if (typeof place.weeks !== "undefined") {
      let sum = 0;
      place.weeks.forEach(week => {
        sum = sum + CalcTotalWeek(week);
      });
      // sum.toFixed(1)
      return sum;
    }

    return 0;
  }

  function CalcTotalWeek(week) {
    let sum = 0;
    for (let day in week.days) {
      sum = sum + parseFloat(Object.values(week.days[day])[0]);
    }
    // sum.toFixed(1)
    return sum;
  }

  function CalcTotalAllActiveWeeks() {
    let sum = 0;
    if (typeof worker.places !== "undefined") {
      worker.places.forEach(place => {
        sum = sum + CalcTotal(place);
      });
    }

    return sum;
  }

  return (
    <div className="HomeContent">
      <div className="Input">
        <input
          className="AddInput"
          placeholder="Lisää työkohde >"
          onChange={HandleChange}
          type="text"
        ></input>
        {value.length > 0 ? (
          <button className="AddInputSubmit" onClick={HandleClick}>
            +
          </button>
        ) : (
          ""
        )}
      </div>
      {typeof worker.places !== "undefined"
        ? worker.places.map((place, index) => (
            <div key={worker.id + place.name} className="Links">
              <button
                onClick={() => HandleDeleteClick(place, worker)}
                className="HomeDeleteButton"
              >
                X
              </button>
              <Link
                className="LinkButtonShort"
                to={{
                  pathname: `${worker.id}/${place.name}`,
                  worker: worker,
                  place: place,
                  index: index
                }}
              >
                {place.name}
              </Link>
              <label className="WeekTotalValue">{CalcTotal(place)}</label>
            </div>
          ))
        : null}
      <div>
        <label className="TotalWeekLabel">Aktiiviset Viikot Yhteensä</label>
        <label className="TotalValue">{CalcTotalAllActiveWeeks()}</label>
      </div>
      {props.showPopUp === true ? (
        <div className="DeleteConfirmationContainer">
          <DeleteConfirmation
            showPopUp={props.showPopUp}
            SetShowPopUp={props.SetShowPopUp}
            toDelete={props.toDelete}
            Delete={props.DeletePlace}
          />
        </div>
      ) : null}
    </div>
  );
}

export default WorkPlaces;
