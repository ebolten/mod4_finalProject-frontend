// component-name-view.js is your stateless view Game. For the majority of cases, this Game should be able to be pure functional Game (no hooks!).
import React, {Fragment} from 'react';

function GameHeaderView(props) {
  const {game, username, restaurant} = props

  return (
    <Fragment> 
        
        <h6> Restaurant Type: {restaurant(game.restaurant_id)} </h6>
 
        <h6> You Are: {username} </h6>
        
        <h6> Level {game.level} </h6>
       
        <h6> Money: ${game.money} </h6>

      </Fragment>
  )
}

export default GameHeaderView