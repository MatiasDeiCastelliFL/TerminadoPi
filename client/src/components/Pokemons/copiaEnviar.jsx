import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "styled-components"
import {AgregarTodosPokemon, AgregarTodosTipo, }  from '../../redux/actions/action';
import RecibirPokemons from './RecibirPokemons';
import Paginado from '../Paginado/Paginado';
const Pokemons = () => {
    const dispatch= useDispatch();

  
    const {pokemonALL,error}=useSelector(element=>element.Poke)
    //Obtenemos la pagina actual
    const [paginaActual,setPaginaActual] =useState(1);
    //Declaramos cuanto pokemon queremos que traiga por pagina
    const pokemonXpagina = 12;
    //Obtenemos el indice del ultimo pokemon
    const ultimoPoke= paginaActual * pokemonXpagina;
     //Obtenemos el indice del primer pokemon 
     const primerPokemon= ultimoPoke - pokemonXpagina;
     
     
     
     let PokemonsFinal=pokemonALL.length>1 ? pokemonALL?.slice(primerPokemon,ultimoPoke): pokemonALL 

     
     const paginado=(numeroPagina)=>{return setPaginaActual(numeroPagina)};
     useEffect(() => {
        dispatch(AgregarTodosPokemon())
        dispatch(AgregarTodosTipo())
       
    },[])


    return (
        
        <div>
        
      
        <Carta>
        
        {error?"No se pudo obtener el pokemon":PokemonsFinal.length>1 ?  PokemonsFinal?.map(element=>  
            <RecibirPokemons  pokemon={PokemonsFinal} key={crypto.randomUUID()} name={element.name} img={element.img} tipo={element.tipos} vida={element.vida} weight={element.weight} ataque={element?.attack} ataque2={element.attack} />):



            <RecibirPokemons key={crypto.randomUUID()} name={PokemonsFinal.name} img={PokemonsFinal.img} tipo={PokemonsFinal.tipos} vida={PokemonsFinal.vida} weight={PokemonsFinal.weight} ataque={PokemonsFinal?.attack} ataque2={PokemonsFinal.attack}  pokemon={PokemonsFinal}/>} 
        </Carta>
        {!error && <Paginado key={crypto.randomUUID()}  todoPokemon={pokemonALL?.length} paginado={paginado} />}
        </div>
       
    );
}

const Carta=style.div`

    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap:2rem;
    margin-left:2rem;
    margin-right:2rem;
    height:100%;
   
`

export default Pokemons;
