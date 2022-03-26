import './Food.css';
import React from 'react';

const Food = ({food, handleFood}) => {
  const {foodName, price, image} = food;
  return (
    <div>
      <div className="row g-4">
        <div className="col">
          <div className="card mx-auto border-0 shadow-lg food-img">
            <img src={image} className="card-img-top" alt="..."></img>
            <div className="card-body food-title-price">
              <h4 className="card-title">{foodName}</h4>
              <p className="card-text"> Price: {price} BDT </p>
              <button onClick={ ()=> handleFood(food)} className='cart-btn'> Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;