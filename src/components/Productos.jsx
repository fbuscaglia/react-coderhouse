import React from "react";
import Button from "./Button";


const Productos = ({ nombre, precio, imagen }) => {
  const productos = [
    {
      name: "Conjunto rojo",
      price: 4000,
      description: "Conjunto rojo de encaje",
    },
    {
      name: "Conjunto Negro",
      price: 6000,
      description: "Conjunto Negro de encaje",
    },
    {
      name: "Pantuflas blancas",
      price: 3000,
      description: "Pantuflas con dibujos de animalitos",
    },
    {
      name: "Pijama lila",
      price: 2000,
      description: "Pijama de verano",
    },
  ];

  const handleAddItem = () => {
    console.log("Item Agregado");
  };

  return (
    <div className="contenedor-producto">
      {productos.map((prod) => (
        <div className="producto">
          <h1>{prod.name}</h1>
          <h3>{prod.description}</h3>
          <h4>$ {prod.price}</h4>
          <Button onClick={handleAddItem} text={"Agregar item"} />
        </div>
      ))}
    </div>
  );
};

export default Productos;
