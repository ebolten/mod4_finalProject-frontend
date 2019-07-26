// component-name-view.js is your stateless view RestaurantChooser. For the majority of cases, this RestaurantChooser should be able to be pure functional RestaurantChooser (no hooks!).
import React from 'react';

function RestaurantChooserView(props) {
  const {restaurant, styles} = props

  return (
    <div className={styles.restaurantChooserView}>
      <img src={require("../../assets/images/building-placeholder.png")} alt={restaurant.food + " house"} />
      <button>make {restaurant.food}</button>
    </div>
  )
}

export default RestaurantChooserView