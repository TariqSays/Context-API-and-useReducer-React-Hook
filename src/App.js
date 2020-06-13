import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';


function App() {
  let value = 81;
  return (
    <ValueContext.Provider value={value}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Parent></Parent>
          Learn React
        </a>
      </header>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
