// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Game.
import React, {Fragment} from 'react';
import GameHeader from '../GameHeader'
import PancakeContainer from '../Pancake'
// import GameView from './GameView';

class GameScreenContainer extends React.Component {

  state={
    user:null
  }

  componentDidMount = () => {
    
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
      <Fragment>
        {/* <GameHeader /> */}
        <GameHeader game={this.props.game} user={this.state.user} />
        <PancakeContainer/>
        {/* <GameView message={this.props.game.id} styles={styles} /> */}
      </Fragment>
    )
  }
}

export default GameScreenContainer


