import React from "react";

function DeleteConfirmation(props) {
  function HandleClick(e) {
    if (e.target.name === "no") {
      props.SetShowPopUp(false);
    }

    if (e.target.name === "yes") {
      props.Delete(props.toDelete);
    }
  }

  return (
    <div className="DeleteConfirmation">
      <p className="DeleteConfirmationText">
        Poistetaan {props.toDelete.toDelete.name}?
      </p>
      <div className="DeleteConfirmationButtons">
        <button
          className="DeleteConfirmationYes"
          name="yes"
          onClick={HandleClick}
        >
          Kyllä
        </button>
        <button
          className="DeleteConfirmationNo"
          name="no"
          onClick={HandleClick}
        >
          Peruuta
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
