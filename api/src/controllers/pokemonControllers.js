const e = require("express");
const {datoApi, datoname: traerNombreApi, TraerPoirid,CrearPokemons}= require("../ServicioApi/datoApi");
const {datosBaseDato, traerDatoPorId, existePokeDb} = require("../ServicioApi/datoBD")
const getPokemons = async(req,res)=>{
    try {
        const {name}=req.query
        if(!name){
            const pokemons= await datoApi();
            const pokeBase =await datosBaseDato();


            if(pokemons && pokeBase){
                const dataBd= pokeBase.map(e=>{
                     
                        return {
                           name: e.name,
                           tipos: e.tipos.map(t=>t.name),
                           id: e.id,
                            hp: e.hp,
                           attack: e.attack,
                           defense: e.defense,
                           speed: e.speed,
                           img: e.img, 
                           height: e.height,
                           weight: e.weight,
                           nosotros:e.nosotros
                        }
                    }
                       
                        
                    
                )
                const dato= pokemons.concat(dataBd);
                
        
               
                res.status(200).json({dato});
            }else{
                if(pokemons){
                    res.status(200).json({pokemons});
                }else{
                    if(pokeBase){

                        const dataBd= pokeBase.map(e=>{
                            return {
                                ...e,
                                // tipos:e?.tipos?.map(t=>t.name)
                            }
                        })
                        res.status(200).json({dataBd});
                    }else{
                        res.send(null)
                    }
                }
                
            } 
        }else{
            const datonames= await traerNombreApi(name);
            
            if(datonames){
              return res.status(200).json(datonames)
            }
            const datoBaseExiste= await existePokeDb(name)

            if(datoBaseExiste){
               return res.status(200).json(datoBaseExiste)
            }
            return res.send(null)

           
        }
        
    } catch (error) {
        res.status(500).json(error.message);
    } 
}
const getIdPokemons= async(req,res)=>{
    const {id}=req.params
    try {
       
        if(id){
            const dato= await TraerPoirid(id)
            
            if(dato){
                return res.status(200).json({dato})   
            }else{
                const datobdd= await traerDatoPorId(id)
                if(datobdd){
                    return res.status(200).json({datobdd});
                }
                return res.send(null)
            }
        }else{
            res.send("No a proporsionado una id")
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
   

    
}


const postCrearPokemon= async(req,res)=>{
        const {name,hp,attack,defense,speed,weight,height,tipo,img}=req.body
        console.log(req.body)
        try {
            if(name && hp && attack && defense && speed && weight && height && tipo.length>0 && img){
                const data= await CrearPokemons(name,hp,attack,defense,speed,weight,height,tipo,img);
               console.log(data)
                
                if(data === "Creado exito"){
                   
                    console.log("llegue")
                    return res.status(200).json({data})
                }else{
                    console.log("llegue3")
                   return  res.status(200).json({data})
                }
            }else{
    
                return res.json("Completa Todos los campos");
            
            } 
        }catch (error) {
            
            return  res.status(500).send(error.message);
        }
          
         
}

module.exports={getPokemons,getIdPokemons,postCrearPokemon}

