// component-name-container.js is your business logic and state management as handled before being sent to the stateless view RestaurantChooser.
import React from 'react';
import styles from './RestaurantChooser.module.scss';
import RestaurantChooserView from './RestaurantChooserView';

class RestaurantChooserContainer extends React.Component {

  state = {
    restaurants: []
  }

  //fetch restaurants to choose from api
  componentDidMount() {
    fetch("http://localhost:3000/restaurants").then(r => r.json())
    .then(restaurants => this.setState({restaurants}))
  }

  render() {

    const restaurants = this.state.restaurants
    
    return (
      <div className={styles.restaurantChooserContainer}>
        <h1>Choose a Restaurant</h1>
        {restaurants.map(restaurant => {
          return ( 
            <RestaurantChooserView 
              key={restaurant.id} 
              restaurant={restaurant} 
              styles={styles}
              startGame={this.props.startGame}
            />
          )
        })}
      </div>
    )
  }
}

export default RestaurantChooserContainer


