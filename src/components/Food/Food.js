import './Food.css';
import React from 'react';

const Food = (props) => {
  const {foodName, price, image} = props.food;
  return (
    <div>
      <div className="row g-4">
        <div className="col">
          <div className="card mx-auto">
            <img src={image} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{foodName}</h5>
              <p className="card-text">{price}</p>
              <button> Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;