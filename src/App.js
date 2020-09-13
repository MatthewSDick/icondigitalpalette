import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <header className="App-header">
        <center>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            <i>Iconic Digital Palette.</i>
          </h1>
        </center>
      </header>
    </div>
  );
}

export default App;
