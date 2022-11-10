import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
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
    name: "Pijama lila",
    price: 2000,
    description: "Pijama de verano",
    img: "assets/img/interior.jfif",
    category: "interior",
  },
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
    
    getData.then((res) => setData(res.find(casual => casual.id === parseInt(detalleId))));
  }, [detalleId]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
