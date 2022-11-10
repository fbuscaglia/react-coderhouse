import Item from "./Item";
import React from "react";

const ItemList = ({ data = [] }) => {
  return (
    <div className="contenedor-producto">
      {data.map(producto => <Item key={producto.id} info={producto} />)}
    </div>
  );
};

export default ItemList;
