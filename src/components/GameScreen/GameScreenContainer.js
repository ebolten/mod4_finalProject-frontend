// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Game.
import React, {Fragment} from 'react';
// import styles from './Game.module.scss';
import GameHeader from '../GameHeader'
import PancakeContainer from '../Pancake'
// import GameView from './GameView';

class GameScreenContainer extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <GameHeader /> */}
        <GameHeader game={this.props.game} />
        <PancakeContainer/>
        {/* <GameView message={this.props.game.id} styles={styles} /> */}
      </Fragment>
    )
  }
}

export default GameScreenContainer


