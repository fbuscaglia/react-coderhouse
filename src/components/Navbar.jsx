import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <Link to="/">
          <h2>Marietas Clothes</h2>
        </Link>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link  to="/">
            Inicio
          </Link>
          <Link to="/categoria/casual">
            Ropa casual
          </Link>
          <Link to="/categoria/interior">
            Ropa Interior{" "}
          </Link>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
    </>
  );
}
export default Navbar;

const NavContainer = styled.nav`
    h2{
        color: white;
        font-weight: 400;
        font-weight:bold;
    }

    padding: .4rem;
    background-color: black;
    display: flex;
    align-items:center;
    justify-content: space-between;

    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }

    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        left:0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
            color:white;
            font-size:2rem;
            display:block;
        }
        @media(min-width: 768px){
            position: initial;
            margin:0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
        }
    }

    .links.active{
        width:100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left:0;
        right:0;
        text-align: center;
        a{
            font-size: 2rem;
            margin-top; 1rem;
            color: white;
        }
    }
    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: #222;
  top: -700px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
