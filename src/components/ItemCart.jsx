import React from "react";

const ItemCart = ({ product }) => {

  return (
    <div className="itemCart">
      <img src={product.img} alt={product.name} />
      <div>
        <p>Nombre: {product.name}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio por unidad: $ {product.price}</p>
        <p>Subtotal: $ {product.quantity * product.price} </p>
        <buttom>Eliminar</buttom>
      </div>
    </div>
  );
};
export default ItemCart;
