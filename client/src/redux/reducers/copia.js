import { POKEMON_REQUEST,POKEMON_FAILUD,POKEMON_SUCCESS,POKEMON_BUSCAR_NOMBRE, POKEMON_TIPO_FAILUD,
    POKEMON_AGREGAR_TIPO,FILTRAR_TIPO
    
    } from "../actions/action"
    
    
    // ,POKEMON_CREAR_POKEMON,POKEMON_BUSCAR_ID,POKEMON_BUSCAR_NOMBRE
    const EstadoInicial={
        loading:false,
        pokemonALL:[],
        pokemonALLCopia:[],
        pokemon:[],
        error:"",
        tipos:[],
        errorTipo:"",
       
    }
    
    const Poke=((state=EstadoInicial,action)=>{
        switch(action.type){
            case POKEMON_REQUEST:return{
                ...state,
                loading:true
            }
    
          
            
    
            case POKEMON_BUSCAR_NOMBRE:return{
                ...state,
                loading:false,
                pokemonALL:action.payload,
                pokemon:[],
                pokemonALLCopia:[],
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
    
    
            case POKEMON_TIPO_FAILUD:return{
                ...state,
                loading:false,
                tipos:[],
                errorTipo:action.payload ,           
                pokemonPorTipo:[]
                
            }
    
            case POKEMON_SUCCESS:
                console.log(action.payload)
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
    
    
            case FILTRAR_TIPO:
    
                const dato= action.payload === "tipo" ? state.pokemonALLCopia : state.pokemonALLCopia?.filter(elemento=>elemento?.tipos?.includes(action.payload)); 
    
                
                    
                
                
                return{
                ...state,
                loading:false,
                pokemonALL:dato ? dato : state.pokemonALLCopia
                
            }
    
            default : return state
        }
    })
    
    export default Poke
    