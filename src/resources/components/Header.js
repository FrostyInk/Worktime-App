import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [value, setValue] = useState("");

  return (
    <div className="Header">
      <Link to="/">
        <h1>{props.title}</h1>
      </Link>
    </div>
  );
}

export default Header;
