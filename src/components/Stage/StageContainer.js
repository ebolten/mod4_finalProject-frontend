// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Component.
import React, {Component, Fragment} from 'react';
import { Route, withRouter, Link } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition';

import style from './Stage.module.scss';
import StartScreen from '../StartScreen'
import RestaurantChooser from '../RestaurantChooser'
import Game from '../Game'

class StageContainer extends Component {

  state = {
    game: {}
  }

  startGame = (gameData) => {
    this.setState({game: gameData})
  }

  render() {
    function mapStyles(styles) {
      return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
      };
    }

    function bounce(val) {
      return spring(val, {
        stiffness: 330, damping: 22,
      });
    }
    
    const bounceTransition = {
      atEnter: { opacity: 0, scale: 0.8 },
      atLeave: { opacity: bounce(0), scale: bounce(1.2) },
      atActive: { opacity: bounce(1), scale: bounce(1) },
    };

    return (
      <Fragment>
        <div className={style.gameContainer}>
          <div className={style.outerStageContainer}>
            <div className={style.innerStageContainer}>

              {/* the switch to another screen animation */}
              <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="switch-wrapper">

                {/* take user to start screen */}
                <Route exact path="/" render={() => {
                  return <StartScreen message={"Pancake Game!"} />
                }}/>

                {/* take user to choose restaurant page */}
                <Route exact path="/game" render={() => {
                  return <RestaurantChooser startGame={this.startGame} />
                }}/>

                {/* take user to their game */}
                <Route exact path={`/game/playing`} render={() => {
                  return <Game game={this.state.game} />
                }} />

              </AnimatedSwitch>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(StageContainer)