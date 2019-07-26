// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Game.
import React from 'react';
import styles from './Game.module.scss';
import GameView from './GameView';

class GameContainer extends React.Component {
  render() {
    return (
      <div>
        <GameView message={this.props.game.id} styles={styles} />
      </div>
    )
  }
}

export default GameContainer


