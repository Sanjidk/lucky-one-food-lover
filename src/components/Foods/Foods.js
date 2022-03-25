import './Foods.css';
import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {

  const [foods, setFoods] = useState([]);

  useEffect(()=>{
    fetch('foodApi.json')
    .then(res=> res.json())
    .then(data=>setFoods(data))

  },[])

  return (
   <div>
      <h1>Food Catagories: {foods.length} items</h1>
     <div>
       <div className='food-item'>
        {
        foods.map(food => <Food
        food={food}
        ></Food>  )
              }
       </div>
     </div>
   </div>
  );
};

export default Foods;