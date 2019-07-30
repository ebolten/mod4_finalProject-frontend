// component-name-container.js is your business logic and state management as handled before being sent to the stateless view RestaurantChooser.
import React, {Fragment} from 'react';
import styles from './RestaurantChooser.module.scss';
import RestaurantChooserView from './RestaurantChooserView';
import { Link } from 'react-router-dom'

class RestaurantChooserContainer extends React.Component {

  state = {
    restaurants: [],
    restaurantChoice: null
  }

  componentDidMount() {
    fetch("http://localhost:3000/restaurants").then(r => r.json())
    .then(restaurants => this.setState({restaurants}))
  }

  setRestaurant = (id) => {
    this.setState({restaurantChoice: id})
  }

  //create a new game session
  createGame = (e) => {
    if (this.state.restaurantChoice !== null) {
      fetch('http://localhost:3000/games', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body:JSON.stringify({
          restaurant_id: this.state.restaurantChoice,
          user_id: 1, level: 1, score: 0,  money: 1
        })
      }).then(resp => resp.json())
      .then(gameData => this.props.startGame(gameData))
    } 
    else {
      alert("Please select a food to flip!")
      e.preventDefault()
    }
  }

  render() {
    
    const {message} = this.props

    return (
      <Fragment>
        <h1 style={{marginBottom: 0}}>{message}</h1>
        <div className="restaurant-list">
          {this.state.restaurants.map(restaurant => {
            return (
              <RestaurantChooserView 
                key={restaurant.id} 
                restaurant={restaurant}
                active={this.state.restaurantChoice === restaurant.id}
                setRestaurant={this.setRestaurant} 
              />
          )})}
        </div>
        <Link to="/game/playing" onClick={this.createGame}>Start Your Game</Link>
      </Fragment>
    )
  }
}

export default RestaurantChooserContainer