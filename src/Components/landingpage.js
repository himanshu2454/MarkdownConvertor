import React from "react";
import { Link } from "react-router-dom";

export default function landingpage() {
  return (
    <div>
      <h1>Taking notes made easy !!</h1>
      <button tag={Link} to="/Editor">
        <Link to="/Editor">Take Note</Link>
      </button>

      <a href="google.com">
        <h4>Innterested in motivation behing this ?</h4>
      </a>
    </div>
  );
}
