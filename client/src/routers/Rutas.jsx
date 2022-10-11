import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Bienvenido from "../components/bienvenido/Bienvenido"
import Logo from '../components/navegador/Logo';
import Navegador from '../components/navegador/Navegador';
import estilos from "./style.module.css";
import Navegador2 from '../components/navegador/Navegador2';
import EnviarPokemons from '../components/Pokemons/EnviarPokemons';
import CrearPoke from '../components/CrearPokemn/CrearPoke';
import DetallePokemon from '../components/detalle/DetallePokemon';
import { Route } from 'react-router-dom';





export default function Rutas() {
 
 



  
  return (
    <div>
        <Route  exact path={"/CrearPokemon"}>
       
        <Logo/> 
          <Navegador2/>
         <CrearPoke/>
        </Route>
        
        
        <Route  path={`/pokemon/detalle/:id`}>
            
            <Logo/>
            <Navegador/>  
            <DetallePokemon/>

        </Route>
        <Route exact path="/home">
          <Logo/>   
          <Navegador/>
          <EnviarPokemons/>
        </Route>

        
       
        <Route exact path="/" render={()=><Bienvenido/>}/>
     
        
        
    </div>
  );
}
