import React from 'react';

function ShoeItems({ imgLink, title, price }) {
  return (
    <div className="col-md-4">
      <img src={imgLink} width="80%" alt={title}></img>
      <h4>{title}</h4>
      <p>{price}</p>
    </div>
  );
}

export default ShoeItems;
