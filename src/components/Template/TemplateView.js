// component-name-view.js is your stateless view Template. For the majority of cases, this Template should be able to be pure functional Template (no hooks!).
import React from 'react';

function TemplateView(props) {
  const {message, styles} = props

  return (
    <h1 className={styles.example}>{message}</h1>
  )
}

export default TemplateView