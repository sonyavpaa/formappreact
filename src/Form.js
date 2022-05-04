import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <form onChange={props.onChange} onSubmit={props.submit}>
      <div>
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          defaultValue={props.firstname}
          required
        ></input>
      </div>
      <div>
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          defaultValue={props.lastname}
          required
        ></input>
      </div>
      <div>
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          defaultValue={props.phone}
        ></input>
      </div>
      <div>
        <label htmlFor="roles">Role</label>
        <select
          name="role"
          id="roles"
          defaultValue={props.role}
          required
        >
          <option value="" onvalid="true" hidden>
            Choose a role
          </option>
          <option value="Teacher" name="role">
            Teacher
          </option>
          <option value="Destroyer" name="role">
            Destroyer
          </option>
          <option value="Baker" name="role">
            Baker
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          className="messageBox"
          name="message"
          id="message"
          defaultValue={props.message}
          required
        ></textarea>
      </div>
      <input className="button" type="submit" value={props.button} />
    </form>
  );
}

export default Form;
