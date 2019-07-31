// component-name-view.js is your stateless view Game. For the majority of cases, this Game should be able to be pure functional Game (no hooks!).
import React from 'react';

//pseudocode for timer
/*
*1. per level, there will be a higher number of pancakes needed to
be created, user will have an amount of seconds to create all them
*2. update state for amount of pancakes user needs to make
*3. create a real time timer for the user
*4. if user does not complete the task in the time, the game ends
*/


function GameHeaderView(props) {
  const {game, username, restaurant, pancakes, cooked, burnt, raw} = props
  
  // TODO: All of these are causing errors and I don't know why
    // const foods = restaurant(game.restaurant_id) // for plural use
    // const food = foods.substring(0, foods.length -1) // for singular use
    // const building = ["House", "Shack", "Jaunt", "Cabana", "Emporium", "Buffet"].random()

  return (
    <div className="game__header">

      {/* <div className="game__header--scoreboard">
        <span> Restaurant Type: {restaurant(game.restaurant_id)} - </span>
        <span> You Are: {username} - </span>
        <span> Level {props.game.level} - </span>
        <span> Money: ${props.game.money} - </span>
        <span> Score: {props.game.score} - </span>
      </div> */}

      <div className="game__header--score">
        <span> Level {props.game.level || "1"}</span>
        <span>{username}'s <span className="nowrap">House of {restaurant(game.restaurant_id) || "Pancakes"}</span></span>
        <span> Earnings: <span className="nowrap">${props.game.money || "0.00"}</span></span>
        <span> Score: {props.game.score || 0}</span>
        <span>{restaurant(game.restaurant_id) || "Pancakes"} Served: <span className="nowrap">{cooked} of {pancakes.length}</span></span>
      </div>

      <div> Task: Create {props.game.level * 5} {restaurant(game.restaurant_id)} in 3.0 Second(s), Timer: </div>


      <div className="game__header--count">
        <div className="--cooked">Cooked<br />{cooked}</div>
        <div className="--burnt">Burnt<br />{burnt}</div>
        <div className="--raw">Raw<br />{raw}</div>
      </div>

    </div>
  )
}

export default GameHeaderView