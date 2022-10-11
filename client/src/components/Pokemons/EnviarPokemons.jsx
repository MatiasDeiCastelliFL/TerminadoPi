import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "styled-components"
import {AgregarTodosPokemon, AgregarTodosTipo, }  from '../../redux/actions/action';
import RecibirPokemons from './RecibirPokemons';
import Paginado from '../Paginado/Paginado';
const Pokemons = () => {
    const dispatch= useDispatch();
    const {pokemonALL,pokemon,error, paginadoss}=useSelector(element=>element.Poke)
    //Obtenemos la pagina actual
     const [paginaActual,setPaginaActual] =useState(1);
    //Declaramos cuanto pokemon queremos que traiga por pagina
    const pokemonXpagina = 12;
    //Obtenemos el indice del ultimo pokemon
    const ultimoPoke= paginaActual * pokemonXpagina;
     //Obtenemos el indice del primer pokemon 
     const primerPokemon= (paginaActual - 1) * pokemonXpagina;
     let PokemonsFinal =[];
     if(Array.isArray(pokemonALL)){
        PokemonsFinal=pokemonALL?.slice(primerPokemon,ultimoPoke);
     }else{
        PokemonsFinal.push(pokemonALL);
     }
     const paginado=(numeroPagina)=>{return  setPaginaActual(numeroPagina)};
     useEffect(() => {
        dispatch(AgregarTodosPokemon())
        dispatch(AgregarTodosTipo())
       
    },[])


    return (
        
        <div>
        
        
        <Carta>

        {error? <h1>{error}</h1> :  PokemonsFinal.length>0 && PokemonsFinal.map(elemento=><RecibirPokemons  key={crypto.randomUUID()} name={elemento.name} img={elemento.img}   id={elemento.id}        tipo={elemento.tipos} pokemon={elemento} vida={pokemon.hp}
         weight={elemento.weight } ataque={elemento?.attack} />) }
        </Carta>
        {!error && <Paginado key={crypto.randomUUID()}  todoPokemon={pokemonALL?.length} paginado={paginado} paginadoss={paginadoss}/>} 
        </div>
       
    );
}

const Carta=style.div`

    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap:2rem;
    margin-left:2rem;
    margin-right:2rem;
    padding-bottom:2rem;
    
    
`

export default Pokemons;
