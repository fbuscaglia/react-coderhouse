import React from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { useState } from "react";

const Cart = () => {
const [cart, setCart] = useState([])
const [totalPrice, setTotalPrice] = useState(0)

  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos en el carrito.</p>
        <Link to="/">Continuar con la compra</Link>
      </>
    );
  }

  return (
    <>
      {cart?.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: {totalPrice()}</p>
    </>
  );
};
export default Cart;
