// component-name-view.js is your stateless view Starter. For the majority of cases, this Starter should be able to be pure functional Starter (no hooks!).
import React from 'react';

function StarterView(props) {
  const {message, styles} = props

  return (
    <h1 className={styles.example}>{message}</h1>
  )
}

export default StarterView