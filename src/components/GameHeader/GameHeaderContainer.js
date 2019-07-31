// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Game.
import React, {Fragment} from 'react';
import GameHeaderView from './GameHeaderView';

class GameHeaderContainer extends React.Component {

  state = {
    user: null
  }

  render() {
    return (

      <Fragment>
        <GameHeaderView 
          game={this.props.game} 
          username={this.props.user} 
          restaurant={this.props.restaurant}
          pancakes={this.props.pancakes}
          cooked={this.props.cooked}
          burnt={this.props.burnt}
          raw={this.props.raw}
        />      
      </Fragment>
    )
  }
}

export default GameHeaderContainer