// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Component.
import React from 'react';
import styles from './StartScreen.module.scss';
import StartScreenView from './StartScreenView';

class StartScreenContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <StartScreenView message={this.props.message} styles={styles} newGame={this.props.newGame} />
      </React.Fragment>
    )
  }
}

export default StartScreenContainer


