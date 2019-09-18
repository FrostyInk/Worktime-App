import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function HomeContent(props) {
  const [value, setValue] = useState("");
  const [workers, SetWorkers] = useState([]);

  function HandleChange(e) {
    setValue(e.target.value);
  }

  function HandleClick(e) {
    props.AddWorkerCallback(value);
  }

  return (
    <div className="HomeContent">
      <Header title="Työntekijät" />
      {props.workers.map(worker => (
        <div key={worker.id} className="Links">
          <button className="HomeDeleteButton">X</button>
          <Link
            className="LinkButton"
            to={{ pathname: `${worker.id}`, worker }}
          >
            {worker.name}
          </Link>
        </div>
      ))}

      <input
        className="AddInput"
        placeholder="Lisää työntekijä"
        onChange={HandleChange}
        type="text"
      ></input>
      <button className="AddInputSubmit" onClick={HandleClick}>
        +
      </button>
    </div>
  );
}

export default HomeContent;
