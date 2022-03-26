import './FoodCart.css';

import React from 'react';

const FoodCart = ({cart}) => {


  return (
    <div>
      <h1>Food List</h1>
      {
        cart.map(food => 
          <li>{food.foodName}</li>
          
          )
      }
<div className='all-btn'>
  
      <button> Select Randomly</button>
      <button>Remove All</button>
</div>

      
    </div>
  );
};

export default FoodCart;