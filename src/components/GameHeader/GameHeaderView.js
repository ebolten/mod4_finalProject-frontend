// component-name-view.js is your stateless view Game. For the majority of cases, this Game should be able to be pure functional Game (no hooks!).
import React from 'react';

function GameHeaderView(props) {
  const {game, username, restaurant, pancakes, cooked, burnt, raw} = props

  return (
    <div className="game__header">

      {/* <span>Pancake shop opened at: {time ? time.toString() : ''}</span> */}

      <div className="game__header--scoreboard">
        <span> Restaurant Type: {restaurant(game.restaurant_id)} - </span>
        <span> You Are: {username} - </span>
        <span> Level {game.level} - </span>
        <span> Money: ${game.money} - </span>
        <span> Score: {game.score} - </span>
      </div>

      <div>Pancakes Served: {cooked} of {pancakes.length}</div>

      <div className="game__score">
        <div className="--cooked">Cooked: {cooked}</div>
        <div className="--burnt">Burnt: {burnt}</div>
        <div className="--raw">Raw: {raw}</div>
      </div>

    </div>
  )
}

export default GameHeaderView