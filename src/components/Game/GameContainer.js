// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Component.
import React from 'react';
import styles from './Game.module.scss';
import StartScreen from '../StartScreen'
import RestaurantChooser from '../RestaurantChooser'

class GameContainer extends React.Component {

  newGame = () => {
    console.log("new game")
  }

  render() {
    return (
      <div className={styles.gameContainer}>
        <div className={styles.outerGameContainer}>
          <div className={styles.innerGameContainer}>
            {/* <StartScreen message={"Pancake Game!"} newGame={this.newGame} /> */}
            <RestaurantChooser />
          </div>
        </div>
      </div>
    )
  }
}

export default GameContainer


