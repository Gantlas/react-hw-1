import React from "react";
import "./App.css";
import Italic from "./components/Italic/Italic";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <SignIn />
      <Italic />
    </div>
  );
}

export default App;
