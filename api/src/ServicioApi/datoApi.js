const axios = require("axios");
const {Pokemon, Tipo } = require("../db");
const { existePokeDb } = require("./datoBD");
const datoApi = async () => {
    const {data: { results }} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40`);
    const DatoRequest = await Promise.all(results.map(async(datoPoke)=>{
        const { data } =await axios.get(datoPoke.url);
        return{
            id: data?.id,
            name: data?.name,
            hp: data?.stats[0].base_stat,
            attack: data?.stats[1].base_stat,
            defense: data?.stats[2].base_stat,
            speed: data?.stats[5].base_stat,
            img:data?.sprites?.other?.home?.front_default,
            tipos: data?.types?.map((poke) => poke.type.name),
            height:data?.height,
            weight:data?.weight

        }   
    }))
    return DatoRequest ? DatoRequest : null;
};

//Agregamos el tipo de pokemons
const datoTipo = async () => {

  
    const data = await axios("https://pokeapi.co/api/v2/type");
    const {
      data: { results },
    } = data;
    for (const pokemonTip of results) {
        await Tipo.findOrCreate({where:{name:pokemonTip.name}})
    }
    const datosBs= Tipo.findAll();
    return datosBs ? datosBs : null
 
};
//Buscamos por name en poke
const datoname = async (name)=> {
    const datoPokemon= await datoApi();

    if(datoPokemon){
        const pokeEncontrado= await datoPokemon.find(pokemon => pokemon.name.toLowerCase()=== name.toLowerCase());

        return pokeEncontrado? pokeEncontrado : null
    }else{
        return null;
    }
}
const TraerPoirid =async (id)=>{

    const dato= await datoApi()
     if(dato){
        const poke = dato.find(pokemon => pokemon.id ==id)
        return poke ? poke :null
     }
}



// 
const CrearPokemons=async(name,hp,attack,defense,speed,weight,height,tipo,img)=>{
    const datoPoke= await datoname(name);
    

    if(!datoPoke){
        
        const datoExistePokemonBD= await existePokeDb(name);
        if(!datoExistePokemonBD){
            console.log("llegue12")
            let datospok=await Pokemon.create({

                name,hp,attack,defense,speed,weight,height,img
             })

             for (let index = 0; index < tipo.length; index++) {
                let datotip= await Tipo.findOne({where:{
                    name:tipo[index]
                }});
               datospok.addTipo(datotip);                
            }
            return "Creado exito"
        }else{
            return "El pokemon a crear ya existe";
        }
        
    }else{
        return "El pokemon a crear ya existe " 
    }
    
   
}
module.exports = { datoApi, datoTipo,datoname,TraerPoirid,CrearPokemons };
