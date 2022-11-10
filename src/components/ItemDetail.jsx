import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
    // addProduct(data, quantity);
  };

  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.img} alt="" />
        <div className="content">
          <h1>{data.name}</h1>
          <h3>${data.price}</h3>
          {goToCart ? (
            <Link to="/Cart">Terminar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
