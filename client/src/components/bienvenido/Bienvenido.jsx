import React from 'react';

import { Link } from 'react-router-dom';
import style from "styled-components";

import component from "./style.module.css"
export default function Bienvenido() {

  
  return (
    
    <div className={component.Body}>
      
        <Centrar>

        <Link to="/Home" >
            <Buttone  className="Button" >START</Buttone>
        </Link>
        </Centrar>
    </div>
  );
}

const Buttone=style.button`
    font-family: serif;
    font-size: 50px;
    background: #fec10e;
    border: 2px solid #2e4595;
    cursor:pointer;
    color: #2e4595;

    &:hover{
     background: #2e4595;
     color:#fec10e;
    }
`;  

  
const Centrar=style.div`
    display: flex;
    bottom: 100px;
    position: relative;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100vh;
    
`
  
