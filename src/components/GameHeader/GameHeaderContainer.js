// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Game.
import React from 'react';
// import styles from './Game.module.scss';
import GameHeaderView from './GameHeaderView';

class GameHeaderContainer extends React.Component {

  state={
    user:null
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

  render() {
    return (

      <div>
        <GameHeaderView 
          game={this.props.game} 
          username={this.props.user} 
          restaurant={this.type}
          pancakes={this.props.pancakes}
          cooked={this.props.cooked}
          burnt={this.props.burnt}
          raw={this.props.raw}
        />      
      </div>
    )
  }
}

export default GameHeaderContainer