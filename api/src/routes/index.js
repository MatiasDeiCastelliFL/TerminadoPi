const { Router } = require('express');
// const axios= require ("axios");
// const {datoApi,EncontrarXname,datoTipo}= require("../ServicioApi/datoApi")

// const datosBaseDato= require("../ServicioApi/datoBD");
// const {Tipo} =require("../db")


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonRouter = require("./pokemonsRouters");
const tipoPokemon= require("./tipoRouter")
const router = Router();

router.use("/pokemons",pokemonRouter);
router.use("/types",tipoPokemon)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



  
   





module.exports = router;
