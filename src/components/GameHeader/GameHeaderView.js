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

  return (
    <div className="game__header">

      {/* <span>Pancake shop opened at: {time ? time.toString() : ''}</span> */}

      <div className="game__header--scoreboard">
        <span> Restaurant Type: {restaurant(game.restaurant_id)} - </span>
        <span> You Are: {username} - </span>
        <span> Level {props.game.level} - </span>
        <span> Money: ${props.game.money} - </span>
        <span> Score: {props.game.score} </span>
      </div>

      <div>Pancakes Served: {cooked} of {pancakes.length}</div>

      <div> Task: Create {props.game.level * 5} Pancakes in 3.0 Second(s), Timer: </div>

      <div className="game__score">
        <div className="--cooked">Cooked: {cooked}</div>
        <div className="--burnt">Burnt: {burnt}</div>
        <div className="--raw">Raw: {raw}</div>
      </div>

    </div>
  )
}

export default GameHeaderView