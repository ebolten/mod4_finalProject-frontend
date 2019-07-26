import React from 'react';
import './styles/App.scss';
import Game from './components/Game'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
