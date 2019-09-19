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
    const { name, value } = e.target;
    if (e.target.value < 0) {
      e.target.value = 0;
    } else if (e.target.value > 24) {
      e.target.value = 24;
    }

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

  function CalcTotal() {
    let sum = 0;
    for (var key in week.days) {
      if (week.days.hasOwnProperty(key)) {
        sum = sum + parseInt(week.days[key]);
      }
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
          ? Object.keys(week.days).map(key => (
              <div>
                <label key={key} className="Key">
                  {key}
                </label>
                <input
                  onChange={HandleChange}
                  key={key + week.days[key]}
                  name={key}
                  className="HourInput"
                  type="number"
                  value={week.days[key]}
                  max="24"
                  min="0"
                  step="0.01"
                  onClick={HandleClick}
                ></input>
              </div>
            ))
          : console.log("test"))
      }
      <div>
        <label className="Total">Yhteensä</label>
        <label className="TotalValue">{CalcTotal()}</label>
      </div>
    </div>
  );
}

export default Week;
