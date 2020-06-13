import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';
import { useState } from 'react';


function App() {
  let value = useState(81);
  return (
    <ValueContext.Provider value={value}>
    <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
          <Parent></Parent>
          Learn React
        </a>
          </div>
    </ValueContext.Provider>
  );
}

export default App;
