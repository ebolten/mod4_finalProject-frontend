// component-name-view.js is your stateless view Component. For the majority of cases, this Component should be able to be pure functional Component (no hooks!).
import React from 'react';
import { Link } from 'react-router-dom'

function StartScreenView(props) {
  const {message, styles} = props

  return (
    <React.Fragment>
      <h1>{message}</h1>
      <Link to="/game">Start Game</Link>
    </React.Fragment>
  )
}

export default StartScreenView