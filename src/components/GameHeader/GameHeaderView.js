// component-name-view.js is your stateless view Game. For the majority of cases, this Game should be able to be pure functional Game (no hooks!).
import React from 'react';

function GameHeaderView(props) {
  const {message, styles} = props

  return (
    <h1 className={styles.example}>{message}</h1>
  )
}

export default GameHeaderView