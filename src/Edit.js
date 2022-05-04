import React from "react";
import "./Edit.css";
import "./Form.css";
import Form from "./Form";

const Edit = (props) => {
  return (
    <div className="editForm">
      <Form {...props} submit={props.edit} button="EDIT" />
    </div>
  );
};

export default Edit;
