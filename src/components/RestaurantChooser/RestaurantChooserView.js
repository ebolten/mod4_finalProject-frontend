// component-name-view.js is your stateless view RestaurantChooser. For the majority of cases, this RestaurantChooser should be able to be pure functional RestaurantChooser (no hooks!).
import React from 'react';

function RestaurantChooserView(props)  {

    const {restaurant, styles, setRestaurant, active} = props

    return (
      <div 
        className={styles.restaurantChooserView} data-active={active} onClick={() => setRestaurant(restaurant.id)}>
        <img src={require(`../../assets/images/game_${restaurant.food}.png`)} alt={restaurant.food + "!"} />
      </div>
    )
}
export default RestaurantChooserView