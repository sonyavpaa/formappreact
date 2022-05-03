import React from "react";

const List = (props) => {
  return (
    <div className="listFrame">
      <ol>
        {props.data.map((note) => (
          <li key={note.id}>
            Name: {note.firstname} {note.lastname}, phone: {note.phone}, role:{" "}
            {note.role} <p>{note.message}</p>
            <button key={note.id} onClick={() => props.delete(note.id)}>
              delete
            </button>
            <button onClick={() => props.edit(note)}>edit</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
