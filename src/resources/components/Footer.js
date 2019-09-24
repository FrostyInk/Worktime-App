import React from "react";
import { Link } from "react-router-dom";
import Firebase from "firebase";

function Footer(props) {
  function HandleClick(e) {
    if (e.target.name === "back") {
      props.history.goBack();
    } else {
      localStorage.clear();
      Firebase.database()
        .ref("/")
        .remove();
      window.location.reload();
    }
  }

  return (
    <div className="Footer">
      {props.location.pathname !== "/" ? (
        <button className="BackButton" name="back" onClick={HandleClick}>
          Back
        </button>
      ) : (
        <button className="ResetButton" name="reset" onClick={HandleClick}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Footer;
