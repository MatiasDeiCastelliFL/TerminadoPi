const datoApi = async () => {
    const {data: { results }} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40`);
    const datosPokemon = [];
    //   const prome = new PromiseAll(results).then()
    for (const pokemon of results) {
      //realizamos una subrequest obtenido de las url obtenida
      const { data } = await axios.get(pokemon.url);
      //Obtenemos los datos de los pokemons
      if (data) {
        const pj = {
          id: data?.id,
          name: data?.name,
          vida: data?.stats[0],
          ataque: data?.stats[1],
          defensa: data?.stats[2],
          velocidad: data?.stats[5],
          tipo: data?.types.map((poke) => poke),
        };
        datosPokemon.push(pj);
      }
    }
    return datosPokemon;
  };

  const crearTipo = async (tipos) => {
    if (tipos.length > 0) {
    
      const tip = await Tipo.bulkCreate(tipos,{ignoreDuplicates: true,});
      return tip;
    }
  };

  const datoTipo = async () => {
    try {
      const data = await axios("https://pokeapi.co/api/v2/type");
      const {
        data: { results },
      } = data;
      let type;
      if (results) {
        type = results.map((poke) => {
          return { name: poke.name };
        });
      }
      return type ? crearTipo(type) : "No se obtuvo los datos";
    } catch (error) {
      return error.message;
    }
  };

  const CrearPokemon= async(req,res)=>{
    const {name}=req.body
    try {
        if(name){
            const PokemonCreado= await CrearPokemons(name);
            res.status(200).json("hola")
        }else{

            const ConjuntoError=[];

            if(!name){
                ConjuntoError.push("Complete El campo nombre");
            }

            // if(!hp){
            //     ConjuntoError.push("Complete el campo de vida")
            // }

            // if(!attack){
            //     ConjuntoError.push("Complete el Campo de atake")
            // }

            // if(!defense){
            //     ConjuntoError.push("Complete el campo de defensa")
            // }

            // if(!speed){
            //     ConjuntoError.push("Complete el Campo de velocidad")
            // }

            // if(!weight){
            //     ConjuntoError.push("Complete el campo de peso")    
            // }
            // if(!height){
            //     ConjuntoError.push("Complete el Campo de altura")
            // }

            return res.status(400).json(ConjuntoError);
        
        } 
    }catch (error) {
        return res.status(500).json(error.message)
    }
      
     
}


const CrearPokemons=async(name,hp,attack,defense,speed,weight,height,types,img)=>{
    const datoPoke= await datoname(name);
    
    let dato="";
    let img;
    if(!datoPoke){
         dato= await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
         img =dato?.data?.sprites?.other?.home?.front_default;
         
         
         
         
         let datospok=await Pokemon.create({

            name,hp,attack,defense,speed,weight,height,img
         })

         for (let index = 0; index < types.length; index++) {
            let datotip= await Tipo.findAll({where:{
                name:types[index]
            }});

            datospok.addTipo(datotip);
            
         }

         

        
    }
    return datoPoke ? "El pokemon a crear ya existe " : dato ? "Pokemon Creado con exito" : "El pokemon a crear no existe"
   
}