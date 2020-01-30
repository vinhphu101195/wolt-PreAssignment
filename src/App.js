import React from 'react';
import './App.css';
import ContextComponent from './context/ContextComponent';
import Home from './components/Home';
import SmallRes from "./components/SmallRes";
function App() {
  return (
    <div className="App">
      <ContextComponent>
        <SmallRes></SmallRes>
      </ContextComponent>
    </div>
  );
}

export default App;
