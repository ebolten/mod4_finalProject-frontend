// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Game.
import React, {Fragment} from 'react';
// import styles from './Game.module.scss';
import GameHeader from '../GameHeader'
import PancakeContainer from '../Pancake'
// import GameView from './GameView';

class GameScreenContainer extends React.Component {
  render() {
    return (
<<<<<<< HEAD:src/components/Game/GameContainer.js
      <div> 

        <PlayHeader game={this.props.game} />

=======
      <Fragment>
        {/* <GameHeader /> */}
        <GameHeader game={this.props.game} />
>>>>>>> fde4c2e71a67d99eb138184493388f9bc5cce2cb:src/components/GameScreen/GameScreenContainer.js
        <PancakeContainer/>
        {/* <GameView message={this.props.game.id} styles={styles} /> */}
      </div>
    )
  }
}

export default GameScreenContainer


