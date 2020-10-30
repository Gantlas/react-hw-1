import React from "react";
import "./App.css";
import Italic from "./components/Italic/Italic";
import Person from "./components/Person/Person";
import SignIn from "./components/SignIn/SignIn";
import Square from "./components/Square/Square";

function App() {
  return (
    <div className="App">
      <SignIn />
      <Italic />
      <div className="squares">
        <h1 className="header">Square types task</h1>
        <Square cssClass="small" label="First square" />
        <Square cssClass="medium" label="Second square" />
        <Square cssClass="large" label="Third square" />
      </div>
      <Person />
    </div>
  );
}

export default App;
