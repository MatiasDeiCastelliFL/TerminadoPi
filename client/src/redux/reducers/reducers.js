import { POKEMON_REQUEST,POKEMON_FAILUD,POKEMON_SUCCESS,POKEMON_BUSCAR_NOMBRE, POKEMON_TIPO_FAILUD,
POKEMON_AGREGAR_TIPO,FILTRAR_TIPO, OBTENER_TIPO, ORDENAR,POKEMON_BUSCAR_ID,LIMPIAR_POKEMON, ARREGLO_NUEVO_TIPO
} from "../actions/action"


// ,POKEMON_CREAR_POKEMON,POKEMON_BUSCAR_ID,POKEMON_BUSCAR_NOMBRE
const EstadoInicial={
    loading:false,
    pokemonALL:[],
    pokemonALLCopia:[],
    pokemon:[],
    error:"",
    tipos:[],
    tip:"",
    tipoPokemon:[],
    ord:"",
    misDat:"",
    errorTipo:"",
    errorMiscreado:"",
    desactiva:"",
    ordFil:"",
    paginadoss:0,
    pokemonSuccessCreado:"",
    pokemonErrorCreado:"",
   
}

const Poke=((state=EstadoInicial,action)=>{
    switch(action.type){
        case POKEMON_REQUEST:return{
            ...state,
            loading:true
        }

        
        case LIMPIAR_POKEMON:return{
            ...state,
            pokemon:[]
        }

        case POKEMON_BUSCAR_ID:return{
            ...state,
            loading:false,
            pokemon:action.payload
        }
        

        case POKEMON_BUSCAR_NOMBRE:return{
            ...state,
            loading:false,
            pokemonALL:action.payload,
            pokemon:[],
            error:"",
            pokemonPorTipo:[]
        }

        case POKEMON_AGREGAR_TIPO:return{
            ...state,
            loading:false,
            tipos:action.payload,
            errorTipo:"",
            pokemonPorTipo:[]
            
        
            
        }
       
        case OBTENER_TIPO:
            let Miscreado;
                Miscreado= action.payload ==="MisPokemon" ?state.pokemonALLCopia?.filter(elemento=> elemento.nosotros): action.payload === "Existente"? 
                state.pokemonALLCopia?.filter(elemento=> !elemento.nosotros): state.pokemonALLCopia 
        return{
            ...state,
            loading:false,
            errorMiscreado:"",
            pokemonALL:Miscreado,
            tip:action.payload,
            desactiva: action.payload === " " || action.payload ==="Filtrar" ? "Desactivado":"Activado",
            paginadoss:1
        }


        case POKEMON_TIPO_FAILUD:return{
            ...state,
            loading:false,
            tipos:[],
            errorTipo:action.payload ,           
            pokemonPorTipo:[]
            
        }

        case ARREGLO_NUEVO_TIPO:
            
         
        return{

            ...state,
            tipoPokemon:"Hola"


        }
        case POKEMON_SUCCESS:
        
            return{
            ...state,
            loading:false,
            pokemonALL:action.payload,
            pokemonALLCopia:action.payload,
            pokemon:[],
            error:"",
            pokemonPorTipo:[]
        }

        case POKEMON_FAILUD:return{
            ...state,
            Loading:false,
            PokemonALL:[],
            Pokemon:[],
            error:action.payload,
            pokemonPorTipo:[]
        }



        case ORDENAR:
            let datos;
            if(action.payload==="Ordenar" || action.payload === " "){
                datos= state.pokemonALLCopia;
            }else{
                console.log("llegue")
                function SortArrayAscOdes(x, y){
                    return x.name.localeCompare(y.name);
                }

                function SortArrayNUm(x, y){
                    return x.attack - y.attack;
                }
                if(state.ordFil ==="" || state.ordFil === "tipo"){
                   
                    console.log("2")
                    
                    if(action.payload ==="AtaqueMayor"){
                        datos=state.pokemonALL.sort(SortArrayNUm).reverse();
                    }
                    if(action.payload ==="AtaqueMenor"){
                        datos=state.pokemonALL.sort(SortArrayNUm);
                    }
                    if(action.payload ==="Ascedente"){
                        datos = state.pokemonALL.sort(SortArrayAscOdes)
                    }

                    if(action.payload ==="Descendente"){
                        datos =state.pokemonALL.sort(SortArrayAscOdes).reverse()
                    }
                
                }else{
                    datos=state.tip==="Existente" ? state.pokemonALLCopia.filter(e=>e?.tipos.includes(state.ordFil) && !e.nosotros)
                    :state.tip=== "MisPokemon" ?state.pokemonALLCopia?.filter(elemento=>elemento?.tipos?.includes(state.ordFil)&& elemento.nosotros): state.tip=== "All" ? state.pokemonALLCopia.filter(e=>e?.tipos?.includes(state.ordFil)):state.pokemonALLCopia; 
                    if(action.payload ==="AtaqueMayor"){
                        datos=datos?.sort(SortArrayNUm).reverse();
                    }
                    if(action.payload ==="AtaqueMenor"){
                        datos=datos?.sort(SortArrayNUm);
                    }
                    if(action.payload ==="Ascedente"){
                        datos = datos?.sort(SortArrayAscOdes)
                    }

                    if(action.payload ==="Descendente"){
                        datos = datos?.sort(SortArrayAscOdes).reverse()
                    }
                }
            }

            return {
            ...state,
            loading:false,
            misDat:action.payload,
            pokemonALL:datos ? datos: state.pokemonALLCopia,
            
        }


        case FILTRAR_TIPO:
            
    
            let dato;
           
            // let dat=state.pokemonALL?.filter((e)=>e?.tipos?.name?.includes(action.payload) e?.tipos?.includes(action.payload) )
            

            if(action.payload==="tipo" || action.payload === " "){
                dato= state.pokemonALLCopia;
            }else{
                if(state.misDat ===""){
                    dato=state.tip==="Existente" ? state.pokemonALLCopia.filter(e=>e?.tipos.includes(action.payload) && !e.nosotros)
                    :state.tip=== "MisPokemon" ?state.pokemonALLCopia?.filter(elemento=>elemento?.tipos?.includes(action.payload)&& elemento.nosotros): state.tip=== "All" ? state.pokemonALLCopia.filter(e=>e?.tipos?.includes(action.payload)):state.pokemonALLCopia; 
                }else{

                    function SortArrayAscOdes(x, y){
                        return x.name.localeCompare(y.name);
                    }

                    function SortArrayNUm(x, y){
                        return x.attack -y.attack;
                    }
                    

                    dato=state.tip==="Existente" ? state.pokemonALLCopia.filter(e=>e?.tipos.includes(action.payload) && !e.nosotros)
                    :state.tip=== "MisPokemon" ?state.pokemonALLCopia?.filter(elemento=>elemento?.tipos?.includes(action.payload)&& elemento.nosotros): state.tip=== "All" ? state.pokemonALLCopia.filter(e=>e?.tipos?.includes(action.payload)):state.pokemonALLCopia; 
                    if(state.misDat ==="AtaqueMayor"){
                        dato=dato.sort(SortArrayNUm).reverse();
                    }
                    if(state.misDat ===" AtaqueMenor"){
                        dato=dato.sort(SortArrayNUm);
                    }
                    if(state.misDat ==="Ascedente"){
                        dato = dato.sort(SortArrayAscOdes)
                    }

                    if(state.misDat ==="Descendente"){
                        dato = dato.sort(SortArrayAscOdes).reverse()
                    }
                }
            }

            //  const dato=  state.tip==="Existente" ? state.pokemonALLCopia.filter(e=>e?.tipos.includes(action.payload) && !e.nosotros)
            //  :state.tip=== "MisPokemon" ?state.pokemonALLCopia?.filter(elemento=>elemento?.tipos?.includes(action.payload)&& elemento.nosotros): state.tip=== "All" ? state.pokemonALLCopia.filter(e=>e?.tipos?.includes(action.payload)):state.pokemonALLCopia; 
             return{
            ...state,
            loading:false,
            pokemonALL:dato ? dato : state.pokemonALLCopia,
            ordFil:action.payload,
            paginadoss:0
        }

  

        default : return state
    }
})

export default Poke
