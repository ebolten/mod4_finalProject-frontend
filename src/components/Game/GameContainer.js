// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Game.
import React, {Fragment} from 'react';
// import styles from './Game.module.scss';
import PlayHeader from '../PlayHeader'
import PancakeContainer from '../Pancake'
// import GameView from './GameView';

class GameContainer extends React.Component {
  render() {
    return (
      <div> 

        <PlayHeader game={this.props.game} />

        <PancakeContainer/>
        {/* <GameView message={this.props.game.id} styles={styles} /> */}
      </div>
    )
  }
}

export default GameContainer


