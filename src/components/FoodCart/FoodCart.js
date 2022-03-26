import './FoodCart.css';

import React from 'react';

const FoodCart = (props) => {
  const {cart,removeFood, randomSelect } = props;

  return (
    <div>
      <h1>Selected List</h1>
      {
        cart.map(food => 
          <li>{food.foodName}</li>
          
          )
      }
        <div className='all-btn'>
              <button onClick={ ()=> randomSelect(cart)}> Select 1 Item Randomly</button>
              <button onClick={removeFood}>Remove All</button>
        </div>
      

      
    </div>
  );
};

export default FoodCart;