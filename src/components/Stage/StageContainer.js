// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Component.
import React, {Component, Fragment} from 'react';
import { Route, withRouter } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition';

import style from './Stage.module.scss';
import StartScreen from '../StartScreen'
import RestaurantChooser from '../RestaurantChooser'

class StageContainer extends Component {

  constructor() {
    super()
    this.state={
      game:{}
    }
  }

  //begin the game (make post request) and set state of game
  startStage = (restaurant) => {
    let {id,food} = restaurant
        
    fetch('http://localhost:3000/games',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body:JSON.stringify({
        user_id:1,
        restaurant_id:id,
        score:0,
        level:1,
        money:1
      })
    })
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
        opacity: 0, 
        scale: 0.8,
      },
      atLeave: {
        opacity: bounce(0), 
        scale: bounce(1.2),
      },
      atActive: {
        opacity: bounce(1), 
        scale: bounce(1),
      },
    };

    return (
      <Fragment>
        <div className={style.gameContainer}>
          <div className={style.outerStageContainer}>
            <div className={style.innerStageContainer}>

              <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="switch-wrapper">

                <Route exact path="/" render={() => {
                  return <StartScreen message={"Pancake Stage!"} newStage={this.newStage} />
                }}/>

                <Route exact path="/game" render={() => {
                  return <RestaurantChooser startStage={this.startStage} />

                }}/>

              </AnimatedSwitch>

            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(StageContainer)


