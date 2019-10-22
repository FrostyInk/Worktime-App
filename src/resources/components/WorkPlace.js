import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import DeleteConfirmation from "./DeleteConfirmation";
import LinkComponent from "./LinkComponent";

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

  function HandleInputOnClick(e) {
    e.target.value = "Viikko ";
  }

  function HandleClick(e) {
    e.target.previousSibling.value = "";
    props.AddWeekCallback(value, place, worker);
    setValue("");
  }

  function CalcTotalWeek(week) {
    let sum = 0;
    for (let day in week.days) {
      sum = sum + parseFloat(Object.values(week.days[day])[0]);
    }

    return sum;
  }

  function CalcTotalAllWeeks() {
    let sum = 0;
    for (const item in place.weeks) {
      sum = sum + CalcTotalWeek(place.weeks[item]);
    }

    SetTotal(sum);
  }

  function HandleDeleteClick(week) {
    props.SetShowPopUp(true);
    props.SetToDelete({
      user: worker,
      place: place,
      toDelete: week
    });
  }

  function HandleArchiveClick(week) {
    props.ArchiveWeek(worker, place, week);
  }

  return (
    <div className="HomeContent">
      <div className="Input">
        <input
          className="AddInput"
          placeholder="Lisää viikko >"
          onChange={HandleChange}
          onClick={HandleInputOnClick}
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
      <label className="WeeksLabelActive">Aktiiviset viikot</label>
      {typeof worker !== "undefined" && typeof place.weeks !== "undefined"
        ? place.weeks.map(week => (
            <LinkComponent
              worker={worker}
              week={week}
              place={place}
              HandleDeleteClick={HandleDeleteClick}
              HandleArchiveClick={HandleArchiveClick}
              CalcTotalWeek={CalcTotalWeek}
            />
          ))
        : null}
      <label className="WeeksLabelOld">Arkistoidut viikot</label>
      {typeof worker !== "undefined" && typeof place.oldweeks !== "undefined"
        ? place.oldweeks.map(week =>
            !Object.hasOwnProperty(week, "empty") ? (
              <LinkComponent
                worker={worker}
                place={place}
                week={week}
                HandleDeleteClick={HandleDeleteClick}
                HandleArchiveClick={HandleArchiveClick}
                CalcTotalWeek={CalcTotalWeek}
              />
            ) : null
          )
        : console.log("test false")}
      {props.showPopUp === true ? (
        <div className="DeleteConfirmationContainer">
          <DeleteConfirmation
            showPopUp={props.showPopUp}
            SetShowPopUp={props.SetShowPopUp}
            toDelete={props.toDelete}
            Delete={props.DeleteWeek}
          />
        </div>
      ) : null}
    </div>
  );
}

export default WorkPlace;
