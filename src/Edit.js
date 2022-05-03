import React from "react";
import "./Edit.css";
import "./Form.css";
import Form from "./Form";

const Edit = (props) => {
  return (
    <div className="editForm">
      <Form
        {...props}
        // defaultfirstname={props.firstname}
        // defaultlastname={props.lastname}
        // defaultphone={props.phone}
        // defaultrole={props.role}
        // defaultmessage={props.message}
        submit={props.edit}
        button="EDIT"
      />
    </div>
  );
};

export default Edit;
