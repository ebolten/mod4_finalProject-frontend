// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Component.
import React, {Component, Fragment} from 'react';
import { Route, withRouter } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition';

import style from './Game.module.scss';
import StartScreen from '../StartScreen'
import RestaurantChooser from '../RestaurantChooser'

class GameContainer extends Component {

  constructor() {
    super()
    this.state={
      game:{}
    }
  }

  //fetch current game
  componentDidMount(){
    fetch('http://localhost:3000/games/1')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        game:data
      })
    })
  }

  render() {
    // map the `scale` prop we define below to the transform style property
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
      atEnter: {
        opacity: 0, scale: 0.8,
      },
      atLeave: {
        opacity: bounce(0), scale: bounce(1.2),
      },
      atActive: {
        opacity: bounce(1), scale: bounce(1),
      },
    };

    return (
      <Fragment>
        <div className={style.gameContainer}>
          <div className={style.outerGameContainer}>
            <div className={style.innerGameContainer}>

              <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="switch-wrapper">

                <Route exact path="/" render={() => {
                  return <StartScreen message={"Pancake Game!"} newGame={this.newGame} />
                }}/>

                <Route exact path="/game" render={() => {
                  return <RestaurantChooser />
                }}/>

              </AnimatedSwitch>

            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(GameContainer)


