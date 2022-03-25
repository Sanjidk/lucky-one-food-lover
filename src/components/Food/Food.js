import './Food.css';
import React from 'react';

const Food = (props) => {
  const {foodName, price, image} = props.food;
  return (
    <div>
      <div className="row g-4">
        <div className="col">
          <div className="card mx-auto border-0 shadow-lg food-img">
            <img src={image} className="card-img-top" alt="..."></img>
            <div className="card-body food-title-price">
              <h4 className="card-title">{foodName}</h4>
              <p className="card-text"> Price: {price} BDT </p>
              <button className='cart-btn'> Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;