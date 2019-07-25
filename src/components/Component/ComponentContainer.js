// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Component.
import React from 'react';
import styles from './Component.module.scss';
import ComponentView from './ComponentView';

class ComponentContainer extends React.Component {

  render() {
    return (
      <ComponentView message={"Component!"} styles={styles} />
    )
  }
}

export default ComponentContainer


