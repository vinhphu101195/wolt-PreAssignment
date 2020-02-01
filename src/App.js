import React from "react";
import "./App.css";
import ContextComponent from "./context/ContextComponent";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <ContextComponent>
        <Home></Home>
      </ContextComponent>
    </div>
  );
}

export default App;
