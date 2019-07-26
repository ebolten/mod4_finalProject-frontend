// component-name-view.js is your stateless view Component. For the majority of cases, this Component should be able to be pure functional Component (no hooks!).
import React from 'react';

function StartScreenView(props) {
  const {message, styles} = props

  return (
    <React.Fragment>
      <h1>{message}</h1>
      <button onClick={props.newGame}>Start Game</button>
    </React.Fragment>
  )
}

export default StartScreenView