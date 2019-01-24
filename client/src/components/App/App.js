import React, { Component } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import TopBar from "../TopBar/TopBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <SignUpForm />
      </div>
    );
  }
}

export default App;
