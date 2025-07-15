import React from "react";

const Product = (props) => {
  return (
    <>
      <div class="card">
        <img src={props.image} />
        <h1>{props.name}</h1>
        <h3>{props.description}</h3>
        <h3>{props.price}</h3>
      </div>
    </>
  );
};

export default Product;
