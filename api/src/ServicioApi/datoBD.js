const {Pokemon,Tipo} = require("../db.js")
const datosBaseDato = async () =>{
        const datos=  await Pokemon.findAll({
            include:{
                model:Tipo,
                attributes:["name"],
                trough:{
                    attributes:["name"]
                }
            }
        });
        
        return datos
    
}
const traerDatoPorId=async(id)=>{
    
   
    const datobdd= await Pokemon.findByPk(id,{
        include:{model:Tipo}
    });
    return datobdd ? datobdd : null
}
//Buscamos por name en la bd
const existePokeDb= async(name)=>{


    const datoEnMin=name.toLowerCase();
    const datoExistente= await Pokemon.findOne({
        include:{model:Tipo},
        where:{
        name:datoEnMin
    }});
    return datoExistente ? datoExistente : null;
}

module.exports={datosBaseDato,existePokeDb,traerDatoPorId}