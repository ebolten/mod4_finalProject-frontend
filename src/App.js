import React, {Component, Fragment} from 'react';
import { Route, withRouter, Link } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition';

import './styles/App.scss'

import StartScreen from './components/StartScreen'
import RestaurantScreen from './components/RestaurantScreen'
import GameScreen from './components/GameScreen'

class App extends Component {

  state = {
    game: {},
    user:null
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
        <div className="game-container">
            <div className="game-container_inner">

              {/* the switch to another screen animation */}
              <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-switcher">

                {/* take user to start screen */}
                <Route exact path="/" render={() => {
                  return <StartScreen message={"The Pancake Game!"} />
                }}/>

                {/* take user to choose restaurant page */}
                <Route exact path="/game" render={() => {
                  return <RestaurantScreen message={"Choose a Restaurant"} startGame={this.startGame} />
                }}/>

                {/* take user to their game */}
                <Route exact path={`/game/playing`} render={() => {
                  return <GameScreen game={this.state.game} />
                }} />

              </AnimatedSwitch>
            </div>
         
        </div>
      </Fragment>
    )
  }
}

export default withRouter(App)