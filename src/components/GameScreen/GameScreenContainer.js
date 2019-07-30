// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Game.
import React from 'react';
import GameHeader from '../GameHeader'
import PancakeContainer from '../Pancake'
// import GameView from './GameView';

class GameScreenContainer extends React.Component {

  state = {
    user: null,
    pancakes: [],
    cooked: 0,
    burnt: 0,
    raw: 0
  }

  callback = (pancakes, cooked, burnt, raw) => {
    this.setState({
      pancakes: pancakes,
      cooked: cooked,
      burnt: burnt,
      raw: raw
    })
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users/1`)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        user:data.username,
      })
    })
  }

  render() {

    return (
      <div className="game">
        <GameHeader 
          game={this.props.game} 
          user={this.state.user} 
          pancakes={this.state.pancakes}
          cooked={this.state.cooked}
          burnt={this.state.burnt}
          raw={this.state.raw}
        />
        <PancakeContainer callback={this.callback} />
      </div>
    )
  }
}

export default GameScreenContainer


