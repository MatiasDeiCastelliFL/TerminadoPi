import React from "react";

import { Link } from "react-router-dom";
import style from "styled-components";

export default function Navegador2() {
  return (
    <>
      <Color>
        <Flex>
          <div>
            <Link to="/home">
              <Boton>HOME</Boton>
            </Link>
          </div>
          <div>
            <Link to={"/CrearPokemon"}>
              <Boton>CREAR POKEMON</Boton>
            </Link>
          </div>
        </Flex>
      </Color>
      <hr />
    </>
  );
}

const Color = style.div`
    display:flex;
    background: #2e4595;
    justify-content: space-between;
    align-items: center;
    
    
`;

const Flex = style.div`
    display:flex;
    justify-content: left;
    align-items: center;
    
`;

const Boton = style.button`
    
    margin-right:2rem;
    margin-top:1rem;
    margin-left:0.3rem;
    margin-bottom:0.2rem;
    font-size:25px;
    border:none;
    background-color:#2e4595;
    align-items:center;
    color:#ffc501;
    cursor:pointer;
    text-transform: uppercase;
`;
