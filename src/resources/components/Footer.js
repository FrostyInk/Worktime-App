import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  function HandleClick() {
    props.history.goBack();
  }

  return (
    <div className="Footer">
      {props.location.pathname !== "/" ? (
        <button className="BackButton" onClick={HandleClick}>
          Back
        </button>
      ) : (
        <p className="FooterHomePageText"></p>
      )}
    </div>
  );
}

export default Footer;
