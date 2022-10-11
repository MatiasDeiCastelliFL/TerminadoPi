
const {datoTipo}= require("../ServicioApi/datoApi");
const getTipo= async(req,res)=>{
   try {
    const tipo = await datoTipo()
    if(tipo){
        res.status(200).json({tipo})
    }else{
        res.send("No se pudo obtener lo datos de los pokemons");
    }     
   } catch (error) {
        res.status(500).send(error.message)
   }
 
}

module.exports={getTipo}