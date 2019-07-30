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
  getUser = (userId) => {
      if (userId !== undefined) {
      fetch(`http://localhost:3000/users/${userId}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          user:data.username,
          game:this.props.game
        })
      })
    } else {
      //do nothing
    }
  }

  //will update the game session in the database
  updateSession = (gameId) => {
    fetch( `http://localhost:3000/games/${gameId}`)
    .then( resp => resp.json() )
    .then()
  }

  render() {
    return (
      <div> 
        
        {this.getUser(this.props.game.user_id)}
        
        <h6> Restaurant Type: {this.type(this.props.game.restaurant_id)} </h6>
<<<<<<< HEAD:src/components/PlayHeader/PlayContainer.js
        
=======
 
      {/* {this.getUser()} */}

>>>>>>> fde4c2e71a67d99eb138184493388f9bc5cce2cb:src/components/GameHeader/GameHeaderContainer.js
        <h6> You Are: {this.state.user} </h6>
        
        <h6> Level {this.props.game.level} </h6>
       
        <h6> Money: ${this.props.game.money} </h6>

      </div>
      
    )
  }
}

export default GameHeaderContainer