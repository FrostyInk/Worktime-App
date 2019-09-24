import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Week(props) {
  const [week, SetWeek] = useState(0);

  useEffect(() => {
    SetWeek(props.location.week);
  }, []);

  useEffect(() => {
    props.SetWeek(
      props.location.worker,
      props.location.place,
      props.location.week,
      week
    );
  }, [week]);

  function HandleChange(e) {
    if (e.target.value < 0) {
      e.target.value = 0;
    } else if (e.target.value > 24) {
      e.target.value = 24;
    }

    const { name, value } = e.target;
    SetWeek({
      name: props.location.week.name,
      days: {
        ...week.days,
        [name]: value
      }
    });
  }

  function HandleClick(e) {
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
    for (var key in week.days) {
      if (week.days.hasOwnProperty(key)) {
        sum = sum + parseFloat(week.days[key]);
      }
    }

    return sum.toFixed(1);
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
          ? Object.keys(week.days).map(key => (
              <div key={key}>
                <label className="Key">{key}</label>
                <input
                  onChange={HandleChange}
                  name={key}
                  className="HourInput"
                  type="number"
                  max="24"
                  min="0"
                  step="0.01"
                  value={week.days[key]}
                  onClick={HandleClick}
                  onFocus={HandleFocus}
                  onBlur={HandleBlur}
                ></input>
              </div>
            ))
          : null)
      }
      <div>
        <label className="Total">Yhteensä</label>
        <label className="TotalValue">{CalcTotal()}</label>
      </div>
    </div>
  );
}

export default Week;
