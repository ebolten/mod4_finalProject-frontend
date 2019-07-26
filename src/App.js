import React from 'react';
import './styles/App.scss';
import Stage from './components/Stage'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Stage />
      </div>
    );
  }
}

export default App;
