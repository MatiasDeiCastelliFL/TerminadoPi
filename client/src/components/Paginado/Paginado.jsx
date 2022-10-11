import React from 'react';
import style from "styled-components"


export default function Paginado({todoPokemon,paginado}) {
    const paginaNumero=[];
    
    const num=12
   
     
    for (let index = 1; index <= Math.ceil(todoPokemon/num) ; index++) {
        
        paginaNumero.push(index); 
        
    }
  return (
        <Flex>
                {paginaNumero && paginaNumero?.map(numero=>(      
                    <Button key={numero} onClick={()=>paginado(numero)}>{numero}</Button>
                ))}
        </Flex>
  );
}

const Flex = style.div`

    display:flex;
    justify-content: center;
    align-items: center;
    gap:0.1rem;
   

`

const Button=style.button`
    
    font-size:2.5rem;
    width:4rem;
    height:4rem;
    color:white;
    margin-bottom:2rem;
    background:url(https://cdn.streamloots.com/uploads/5eb3db772a3fcd0035f7ff40/10172dc2-f05e-4804-948f-94ec8a1747ce.gif);
    background-size:cover;
    background-position:center;
    border-radius:50%;
    background-clip:text;
    border:none;
    -webkit-text-stroke: 1.5px black;
    cursor:pointer;
`
