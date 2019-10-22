import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import DeleteConfirmation from "./DeleteConfirmation";

function HomeContent(props) {
  const [value, setValue] = useState("");
  const [workers, SetWorkers] = useState([]);

  function HandleChange(e) {
    setValue(e.target.value);
  }

  function HandleClick(e) {
    e.target.previousSibling.value = "";
    props.AddWorkerCallback(value);
    setValue("");
  }

  function HandleDeleteClick(worker) {
    props.SetShowPopUp(true);
    props.SetToDelete({
      user: worker,
      toDelete: worker
    });
  }

  return (
    <div className="HomeContent">
      <div className="Input">
        <input
          className="AddInput"
          placeholder="Lisää työntekijä >"
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
      {
        (props.SetTitle("Työntekijät"),
        props.workers.length > 0 ? (
          props.workers.map(worker => (
            <div key={worker.id} className="Links">
              <button
                onClick={() => HandleDeleteClick(worker)}
                className="HomeDeleteButton"
                worker={worker}
                id={worker.id}
              >
                X
              </button>
              <Link
                className="LinkButton"
                to={{ pathname: `${worker.id}`, worker }}
              >
                {worker.name}
              </Link>
            </div>
          ))
        ) : (
          <p className="LoadingText"> Ladataan tietoja...</p>
        ))
      }
      {props.showPopUp === true ? (
        <div className="DeleteConfirmationContainer">
          <DeleteConfirmation
            showPopUp={props.showPopUp}
            SetShowPopUp={props.SetShowPopUp}
            toDelete={props.toDelete}
            Delete={props.DeleteWorker}
          />
        </div>
      ) : null}
    </div>
  );
}

export default HomeContent;
