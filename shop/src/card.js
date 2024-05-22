// Card.js
import React from 'react';

function Card({ shoe, image }) {
  return (
    <div className="col-md-4">
      <img src={image} width="80%"/>
      <h4>{shoe.title}</h4>
      <p>{shoe.price}</p>
    </div>
  );
}

export default Card;
