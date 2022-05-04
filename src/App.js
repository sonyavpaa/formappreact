import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import List from "./List";
import Edit from "./Edit";

const App = () => {
  const [inputData, setInputData] = useState({
    id: null,
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showEdit, setshowEdit] = useState(false);
  const [persons, setData] = useState([]);
  const [currentNote, setcurrentNote] = useState({
    id: null,
    firstname: "",
    lastname: "",
    phone: "",
    role: "",
    message: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => setData(res.data));
  }, []);

  const deleteFunc = (id) => {
    axios.delete(`http://localhost:3001/notes/${id}`).then((res) => {
      const notes = persons.filter((item) => item.id !== id);
      setData(notes);
    });
  };

  const editFunc = (e) => {
    console.log(currentNote);
    axios
      .put(`http://localhost:3001/notes/${e}`, currentNote)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    setshowEdit(!showEdit);
    window.location.reload();
  };

  const updateFunc = (e) => {
    setcurrentNote({
      ...currentNote,
      [e.target.name]: e.target.value,
    });
  };

  const inputFunc = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const modalFunc = (e) => {
    e.preventDefault();
    setShowPopup(!showPopup);
  };

  const showEditFunc = (e) => {
    setshowEdit(!showEdit);
    setcurrentNote(e);
  };

  const submitFunc = () => {
    console.log(inputData);
    axios
      .post("http://localhost:3001/notes", inputData)
      .catch((error) => console.log(error));
    setShowPopup(!showPopup);
    window.location.reload();
  };

  return (
    <div className="App">
      <header className="Appframe">
        {showEdit && (
          <Edit
            {...currentNote}
            edit={() => editFunc(currentNote.id)}
            onChange={updateFunc}
          />
        )}
        {showPopup && (
          <Popup
            className="pop"
            close={modalFunc}
            {...inputData}
            submit={submitFunc}
          />
        )}
        <Form onChange={inputFunc} submit={modalFunc} button="SEND"></Form>
        <View {...inputData} />
      </header>
      <main>
        <List data={persons} delete={deleteFunc} edit={showEditFunc} />
      </main>
    </div>
  );
};

export default App;
