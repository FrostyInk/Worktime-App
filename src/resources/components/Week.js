import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Week(props) {
  const [week, SetWeek] = useState([]);

  useEffect(() => {
    SetWeek(props.location.week);
  }, []);

  useEffect(() => {
    if (props.location.week.type === "oldweek") return;
    props.SetWeek(
      props.location.worker,
      props.location.place,
      props.location.week,
      week
    );
  }, [week]);

  function HandleChange(e) {
    if (props.location.week.type === "oldweek") return;
    if (e.target.value < 0) {
      e.target.value = 0;
    } else if (e.target.value > 24) {
      e.target.value = 24;
    }

    const { name, value } = e.target;

    console.log(name);
    SetWeek({
      name: props.location.week.name,
      type: week.type,
      days: week.days.map(day =>
        Object.keys(day)[0] !== name ? day : { [name]: value }
      )
    });
  }

  function HandleClick(e) {
    if (props.location.week.type === "oldweek") return;
    e.target.value = "";
  }

  function HandleFocus(e) {}

  function HandleBlur(e) {
    if (e.target.value === "") {
      e.target.value = 0;
    }
  }

  function CalcTotal() {
    let sum = 0;
    for (const day in week.days) {
      console.log(Object.values(day)[0]);
      sum = sum + parseFloat(Object.values(week.days[day])[0]);
    }
    return sum;
  }

  return (
    <div className="HomeContent">
      {
        (props.SetTitle(
          props.location.worker.name +
            " -> " +
            props.location.place.name +
            " -> " +
            props.location.week.name
        ),
        typeof week.days !== "undefined"
          ? week.days.map(day => (
              <div key={Object.keys(day)[0]}>
                <label className="Key">{Object.keys(day)[0]}</label>
                <input
                  onChange={HandleChange}
                  name={Object.keys(day)[0]}
                  className="HourInput"
                  type="number"
                  max="24"
                  min="0"
                  step="0.01"
                  value={Object.values(day)[0]}
                  onClick={HandleClick}
                  onFocus={HandleFocus}
                  onBlur={HandleBlur}
                ></input>
              </div>
            ))
          : null)
      }
      <div>
        <label className="TotalWeekLabel">Yhteensä</label>
        <label className="TotalValue">{CalcTotal()}</label>
      </div>
    </div>
  );
}

export default Week;
