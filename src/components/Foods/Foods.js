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

  const randomSelect = (cart) =>{
const item = cart[Math.floor(Math.random() * cart.length)];
const cartArray = [];
cartArray.push(...cartArray, item)
setCart(cartArray);
  }

  const removeFood = () => {
    setCart([]);
  }

  const handleFood = (food) => {
    const newCart = [...cart, food]
    setCart(newCart);
  }
  

  return (
   <div>
      <p className='catagories'>Food Catagories: {foods.length} items</p>
     <div className='foods-cart'>
       <div className='food-item'>
        {
        foods.map(food => <Food
        key = {food.id}
        food={food}
        handleFood= {handleFood}
        ></Food>  )
              }
       </div>
        <div className='shadow-lg p-3'>
          <FoodCart
          cart={cart}
        removeFood = {removeFood}
        randomSelect = {randomSelect}
          
          ></FoodCart>
       </div>
     </div>
   </div>
  );
};

export default Foods;