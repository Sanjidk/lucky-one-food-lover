import './FoodCart.css';

import React from 'react';

const FoodCart = ({cart,removeFood, randomSelect }) => {

  return (
    <div>
      <h3 className='fw-bold'>Selected Item: {cart.length}</h3>
      {
        cart.map(food => 
          <li className='fw-bold'>{food.foodName}</li>
          
          )
      }
        <div className='all-btn'>
              <button onClick={ ()=> randomSelect(cart)}> Select 1 Randomly</button>
              <button onClick={removeFood}>Remove All</button>
        </div>
      

      
    </div>
  );
};

export default FoodCart;