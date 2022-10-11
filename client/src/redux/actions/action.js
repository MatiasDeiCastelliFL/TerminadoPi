const axios= require("axios")


 const POKEMON_REQUEST="POKEMON_REQUEST";
 const POKEMON_FAILUD="POKEMON_FAILUD";
 const POKEMON_SUCCESS="POKEMON_SUCCESS";
 const POKEMON_CREAR_POKEMON="POKEMON_CREAR_POKEMON";
 const POKEMON_BUSCAR_ID="POKEMON_BUSCAR_ID";
 const POKEMON_BUSCAR_NOMBRE="POKEMON_BUSCAR_NOMBRE";
 const POKEMON_AGREGAR_TIPO="POKEMON_AGREGAR_TIPO";
 const POKEMON_TIPO_FAILUD="POKEMON_TIPO_FAILUD";
 const OBTENER_TIPO="OBTENER_TIPO";
 const FILTRAR_TIPO="FILTRAR_TIPO";
 const ORDENAR="ORDENAR";
 const LIMPIAR_POKEMON="LIMPIAR_POKEMON";
 const ARREGLO_NUEVO_TIPO="ARREGLO_NUEVO_TIPO";
 const CREAR_POKEMONE="CREAR_POKEMONE";
 const ERROR_AL_CREAR_POKEMON="ERROR_AL_CREAR_POKEMON";

//Creamos las actions

const getPokemonObtener=()=>{
    return {
        type:POKEMON_REQUEST
    }
}

const LimparPokemon=()=>{
    return {
        type:LIMPIAR_POKEMON
    }
}

 const getPokemonAgregarTipo =(data)=>{
    return{
        type:POKEMON_AGREGAR_TIPO,
        payload:data
    }
}

const getPokemonTipoFailud =(data)=>{
    return{
        type:POKEMON_TIPO_FAILUD,
        payload:data
    }
}


const successIdPoke=(data)=>{

    return {
        type:POKEMON_BUSCAR_ID,
        payload:data
    }


}


const ArrgeloNuevoTipo=(data)=>{


    return {
        type:ARREGLO_NUEVO_TIPO,
        payload:data
    }


}

const obtenerCreado=(data)=>{

    return {
        type:OBTENER_TIPO,
        payload:data
    }
}

const filtrarTipo=(data)=>{
   
    return {
        type:FILTRAR_TIPO,
        payload:data
    }

}

const ordenarTipo=(data)=>{
   
    return {
        type:ORDENAR,
        payload:data
    }
}

 const getPokemonSuccessUno =(data)=>{
    
    return{
        type:POKEMON_BUSCAR_NOMBRE,
        payload:data
    }
}
const getPokemonSuccess =(data)=>{

    return{
        type:POKEMON_SUCCESS,
        payload:data
    }
}
const getPokemonFailud =(data)=>{
    return{
        type:POKEMON_FAILUD,
        payload:data
    }
}

const getBuscarNombre=(nombre)=>{
    return {
        type:POKEMON_BUSCAR_NOMBRE,
        payload:nombre
    }
}
const postCrearPokemons=(DatoPokemons)=>{
    return {
        type:POKEMON_CREAR_POKEMON,
        payload:DatoPokemons
    }
}
const AgregarTodosPokemon=()=>{
    return async(dispatch)=>{
        dispatch(getPokemonObtener());
        const {data} = await axios.get("http://localhost:3001/pokemons");
        const {dato}=data
        if(dato){
            dispatch(getPokemonSuccess(dato));
        }else{
            dispatch(getPokemonFailud("No se pudo obtener la informacion, Comunicarse con el administrador"));
        }
    }
}

const AgregarTodosTipo=()=>{
    return async(dispatch)=>{
        dispatch(getPokemonObtener());
        const {data} = await axios.get("http://localhost:3001/types");
   
        if(data){
            dispatch(getPokemonAgregarTipo(data));
        }else{
            dispatch(getPokemonTipoFailud("No se pudo obtener la informacion, Comunicarse con el administrador"));
        }
    }
}

const BuscarNombrePokemon=(name)=>{
    
    return async(dispatch)=>{
        dispatch(getPokemonObtener())
        
        const {data} = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        
        if(data){
            dispatch(getPokemonSuccessUno(data));
        }else{
            dispatch(getPokemonFailud("No se puedo encontrar el pokemon"));
        }
    }   
}


const BuscarPokemonId=(id)=>{
    
    return async(dispatch)=>{
        dispatch(getPokemonObtener())
       
        const {data:{dato}} = await axios.get(`http://localhost:3001/pokemons/${id}`)
        
        if(dato){
            dispatch(successIdPoke(dato));
        }
    }   
}


const datoOrdenar=(name)=>{
    return async(dispatch)=>{
        dispatch(ordenarTipo(name))
     }
}
const datoFiltrado=(name)=>{
    return async(dispatch)=>{
       dispatch(filtrarTipo(name))
    }
}

const datoObtenerCreado=(name)=>{
    return async(dispatch)=>{
       dispatch(obtenerCreado(name))
    }
}


//Crear Pokemon


const crearPokemon=(dato)=>{
    return {
        type:CREAR_POKEMONE,
        payload:dato
    }
}

const fallaPokemon=(dato)=>{
    return {
        type:ERROR_AL_CREAR_POKEMON,
        payload:dato
    }
}


const despatcharCrearPOkemon=(dato)=>{
    
    return async(dispatch)=>{
       
   
            
            const {data}=  await axios.post("http://localhost:3001/pokemons",dato)
          
            if(data !== "Completa Todos los campos"){
                dispatch(crearPokemon(data))
            }else{
                console.log("llegue")
                dispatch(fallaPokemon(data));
            }
       
            
    
    }
}

module.exports={
    POKEMON_REQUEST,
    POKEMON_FAILUD,
    POKEMON_SUCCESS,
    POKEMON_CREAR_POKEMON,
    POKEMON_BUSCAR_ID,
    POKEMON_BUSCAR_NOMBRE,
    AgregarTodosPokemon,
    postCrearPokemons,
    getBuscarNombre,
    getPokemonFailud,
    getPokemonSuccess,
    getPokemonObtener,
    BuscarNombrePokemon,
    AgregarTodosTipo,
    POKEMON_TIPO_FAILUD,
    POKEMON_AGREGAR_TIPO,
    OBTENER_TIPO,
    filtrarTipo,datoFiltrado,
    FILTRAR_TIPO,datoObtenerCreado,
    datoOrdenar,
    ORDENAR,
    BuscarPokemonId,
    LimparPokemon,
    ArrgeloNuevoTipo,
    ARREGLO_NUEVO_TIPO,
    crearPokemon,
    fallaPokemon,
    despatcharCrearPOkemon,

}