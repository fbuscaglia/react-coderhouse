import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const productos = [
  {
    id: 1,
    name: "Pantuflas rojas",
    price: 4000,
    description: "Pantuflas rojas abrigaditas",
    img: "assets/img/varias.png",
    category: "casual",
  },
  {
    id: 2,
    name: "Conjunto Negro",
    price: 6000,
    description: "Conjunto Negro de encaje",
    img: "assets/img/interior.jfif",
    category: "interior",
  },
  {
    id: 3,
    name: "Pantuflas blancas",
    price: 3000,
    description: "Pantuflas con dibujos de animalitos",
    img: "assets/img/varias.png",
    category: "casual",
  },
  {
    id: 4,
    name: "Pijama rojo",
    price: 2000,
    description: "Pijama de verano",
    img: "assets/img/interior.jfif",
    category: "interior",
  },
];

export const Productos = ({}) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((casual) => casual.category === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
};

export default Productos;
