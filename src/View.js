import React from "react";
import "./View.css";

function View(props) {
  return (
    <div className="frame">
      <h2>Check your input</h2>
      <div className="output">
        <p>
          First name:&nbsp;&nbsp;&nbsp;<span>{props.firstname}</span>
        </p>
      </div>
      <div className="output">
        <p>
          Last name:&nbsp;&nbsp;&nbsp;<span>{props.lastname}</span>
        </p>
      </div>
      <div className="output">
        <p>
          Phone no:&nbsp;&nbsp;&nbsp;<span>{props.phone}</span>
        </p>
      </div>
      <div className="output">
        <p>
          Message:&nbsp;&nbsp;&nbsp;<span>{props.message}</span>
        </p>
      </div>
      <div className="output">
        <p>
          Role:&nbsp;&nbsp;&nbsp;<span>{props.role}</span>
        </p>
      </div>
    </div>
  );
}

export default View;
