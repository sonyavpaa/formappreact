import React from "react";
import "./Popup.css";

function Popup(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      <div className="boxframe">
        <div className="box frame">
          <h2 className="oneMoreh2">One more time:</h2>
          <div className="output box">
            <p>
              First name:&nbsp;&nbsp;&nbsp;<span>{props.firstname}</span>
            </p>
          </div>
          <div className="output box">
            <p>
              Last name:&nbsp;&nbsp;&nbsp;<span>{props.lastname}</span>
            </p>
          </div>
          <div className="output box">
            <p>
              Phone no:&nbsp;&nbsp;&nbsp;<span>{props.phone}</span>
            </p>
          </div>
          <div className="output box message">
            <p>
              Message:&nbsp;&nbsp;&nbsp;<span>{props.message}</span>
            </p>
          </div>
          <div className="output box">
            <p>
              Role:&nbsp;&nbsp;&nbsp;<span>{props.role}</span>
            </p>
          </div>
          <button onClick={props.submit}>Yes I am sure</button>
          <button onClick={props.close}>No thanks!</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
