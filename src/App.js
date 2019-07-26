import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import Game from './components/Game'
//import Component from './components/Component';

function App() {
  return (
    <div className="App">
      <Game />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Component />
      </header> */}
    </div>
  );
}

export default App;
