import './Foods.css';
import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import FoodCart from '../FoodCart/FoodCart';

const Foods = () => {

  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('foodApi.json')
    .then(res=> res.json())
    .then(data=>setFoods(data))

  },[])


  const handleFood = (food) => {
    const newCart = [...cart, food]
    setCart(newCart);

  }
  

  return (
   <div className='food-container'>
      <p className='catagories'>Food Catagories: {foods.length} items</p>
     <div className='foods-cart'>
       <div className='food-item'>
        {
        foods.map(food => <Food
        key = {food.id}
        food={food}
        handleFood={handleFood}
        ></Food>  )
              }
       </div>
        <div>
          <FoodCart
          
          cart={cart}
          
          ></FoodCart>
       </div>
     </div>
   </div>
  );
};

export default Foods;