import React from "react";
import Navbar from "./components/Navbar/Navbar";
import logo from "./idp_logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <center>
          <img class="logo" src={logo} className="App-logo" alt="logo" />
        </center>
      </header>
    </div>
  );
}

export default App;
