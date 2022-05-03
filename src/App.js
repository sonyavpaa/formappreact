import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import List from "./List";
import Edit from "./Edit";

class App extends Component {
  state = {
    inputData: {
      id: null,
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
    persons: [],
    showPopup: false,
    showEdit: false,
    currentNote: {
      id: null,
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
  };

  closeFunk = () => {
    this.setState({ showPopup: false });
  };

  componentDidMount() {
    axios.get(`http://localhost:3001/notes`).then((res) => {
      const persons = res.data;

      this.setState({ persons: persons });
    });
  }

  deleteFunc = (id) => {
    axios.delete(`http://localhost:3001/notes/${id}`).then((res) => {
      const notes = this.state.persons.filter((item) => item.id !== id);
      this.setState({ persons: notes });
    });
  };

  editFunc = (e) => {
    console.log(this.state.currentNote);
    axios
      .put(`http://localhost:3001/notes/${e}`, this.state.currentNote)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    this.setState({ showEdit: false });
    window.location.reload();
  };

  updateFunc = (e) => {
    this.setState({
      currentNote: {
        ...this.state.currentNote,
        [e.target.name]: e.target.value,
      },
    });
  };

  inputFunc = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  modalFunc = (e) => {
    console.log(this.state.className);
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  showEdit = (e) => {
    this.setState({ showEdit: true, currentNote: e });
  };

  submitFunc = () => {
    axios
      .post("http://localhost:3001/notes", this.state.inputData)
      .catch((error) => console.log(error));
    this.setState({ showPopup: false });
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <header className="Appframe">
          {this.state.showEdit && (
            <Edit
              {...this.state.currentNote}
              // defaultfirstname={this.state.currentNote.firstname}
              // defaultlastname={this.state.currentNote.lastname}
              // defaultphone={this.state.currentNote.phone}
              // defaultrole={this.state.currentNote.role}
              // defaultmessage={this.state.currentNote.message}
              edit={() => this.editFunc(this.state.currentNote.id)}
              // this.editFunc}
              onChange={this.updateFunc}
            />
          )}
          {this.state.showPopup && (
            <Popup
              className="pop"
              close={this.modalFunc}
              {...this.state.inputData}
              submit={this.submitFunc}
            />
          )}
          <Form
            onChange={this.inputFunc}
            submit={this.modalFunc}
            button="SEND"
          ></Form>
          <View {...this.state.inputData} />
        </header>
        <main>
          <List
            data={this.state.persons}
            delete={this.deleteFunc}
            edit={this.showEdit}
          />
        </main>
      </div>
    );
  }
}

export default App;
