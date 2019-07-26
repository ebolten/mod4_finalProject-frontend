// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Starter.
import React from 'react';
import styles from './Starter.module.scss';
import StarterView from './StarterView';

class StarterContainer extends React.Component {

  render() {
    return (
      <StarterView message={"Starter!"} styles={styles} />
    )
  }
}

export default StarterContainer


