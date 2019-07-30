// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Game.
import React from 'react';
// import styles from './Game.module.scss';
import GameHeaderView from './GameHeaderView';

class GameHeaderContainer extends React.Component {

  constructor() {
    super()
    this.state={ 
      user:null
    }
  }

  //will return the type of the restaurant from the id
  type = (num) => {
    if (num === 1) {
      return "Pancakes"
    } else if (num === 2) {
      return "Eggs"
    } else if (num === 3) {
      return "Burgers"
    }
  }

  //will render the user playing this game
  

  //will update the game session in the database
  updateSession = (gameId) => {
    fetch( `http://localhost:3000/games/${gameId}`)
    .then( resp => resp.json() )
    .then()
  }

  render() {
    return (
      
      <GameHeaderView game={this.props.game} username={this.props.user} restaurant={this.type} />
      
    )
  }
}

export default GameHeaderContainer