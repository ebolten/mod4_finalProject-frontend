// component-name-view.js is your stateless view Game. For the majority of cases, this Game should be able to be pure functional Game (no hooks!).
import React from 'react';

function GameScreenView(props) {
  const {message, styles} = props

  return (
    <div>
      <h1 className={styles.example}>{message}</h1>
    </div>
  )
}
export default GameScreenView