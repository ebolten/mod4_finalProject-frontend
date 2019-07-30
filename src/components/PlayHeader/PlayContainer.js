// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Game.
import React from 'react';
// import styles from './Game.module.scss';
import PlayView from './PlayView';

class PlayContainer extends React.Component {

  constructor() {
    super()
    this.state={
      user:""
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
  getUser = () => {
    fetch(`http://localhost:3000/users/${this.props.game.user_id}`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        user:data.username,
        game:this.props.game
      })
    })
  }

  //will update the game session in the database
  // updateSession = (gameId) => {
  //   fetch( `http://localhost:3000/games/${gameId}` )
  //   .then( resp => resp.json() )
  //   .then()
  // }


  render() {
    return (
      <div> 

        <h6> --hello I will hold information about this game-- </h6>

        <h6> Restaurant Type: {this.type(this.props.game.restaurant_id)} </h6>
 
        {this.getUser()}

        <h6> You Are: {this.state.user} </h6>
            
        <h6> Level {this.props.game.level} </h6>
        <h6> Money: ${this.props.game.money} </h6>

      </div>
      
    )
  }
}

export default PlayContainer