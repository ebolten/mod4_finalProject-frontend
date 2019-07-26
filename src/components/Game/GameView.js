// component-name-view.js is your stateless view Component. For the majority of cases, this Component should be able to be pure functional Component (no hooks!).
import React from 'react';

function GameView(props) {
  const {message, styles} = props

  return (
    <h1 className={styles.example}>{message}</h1>
  )
}

export default GameView