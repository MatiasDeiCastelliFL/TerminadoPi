const { Router } = require('express');
const { getPokemons, getIdPokemons,postCrearPokemon } = require('../controllers/pokemonControllers');


const router = Router();

router.get("/",getPokemons);
router.get("/:id",getIdPokemons)
router.post("/",postCrearPokemon)
module.exports=router