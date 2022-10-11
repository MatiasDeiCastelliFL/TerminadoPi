const { Router } = require('express');
const { getTipo } = require('../controllers/TipoPokemonControllers');


const router = Router();

router.get("/",getTipo)

module.exports=router