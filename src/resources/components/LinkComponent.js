import React from "react";
import { Link } from "react-router-dom";

function LinkComponent(props) {
  let className = "LinkButtonActiveWeek";

  if (props.week.type === "oldweek") {
    className = "LinkButtonArchivedWeek";
  }

  return (
    <div className="Links">
      <button
        onClick={() => props.HandleDeleteClick(props.week)}
        className="HomeDeleteButton"
      >
        X
      </button>
      {props.week.type !== "oldweek" ? (
        <button
          onClick={() => props.HandleArchiveClick(props.week)}
          className="Archive"
        >
          A
        </button>
      ) : null}
      <Link
        className={className}
        to={{
          pathname: `${props.place.name}/${props.week.name}`,
          worker: props.worker,
          place: props.place,
          week: props.week
        }}
      >
        {props.week.name}
      </Link>
      <label className="WeekTotalValue">
        {props.CalcTotalWeek(props.week)}
      </label>
    </div>
  );
}

export default LinkComponent;
