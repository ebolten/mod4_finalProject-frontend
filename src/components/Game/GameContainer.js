// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Component.
import React, {Component, Fragment} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import styles from './Game.module.scss';
import StartScreen from '../StartScreen'
import RestaurantChooser from '../RestaurantChooser'

class GameContainer extends Component {

  newGame = () => {
    console.log("new game")
  }

  render() {
    return (
      <Fragment>
        <div className={styles.gameContainer}>
          <div className={styles.outerGameContainer}>
            <div className={styles.innerGameContainer}>
              <Switch>
                <Route exact path="/" render={() => {
                  return <StartScreen message={"Pancake Game!"} newGame={this.newGame} />
                }}/>
                <Route exact path="/game" render={() => {
                  return <RestaurantChooser />
                }}/>
              </Switch>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(GameContainer)


