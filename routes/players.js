const express = require("express")
const PlayerController = require("../controllers/PlayerController")
const router = express.Router()

// GET /: Endpoint para traer toda la información paginada de 10 en 10
router.get("/",PlayerController.getAllPaged)
// GET /id/:_id: Endpoint para buscar  por player_id.
router.get("/id/:_id",PlayerController.getPlayerById)
// GET /short_name/:short_name: Endpoint para buscar por nombre de jugador
router.get("/name/:name",PlayerController.getPlayerByName)
// GET : Endpoint para buscar los 10 jugadores que más cobran
router.get("/mostValued",PlayerController.get10MostvaluedPlayer)


module.exports = router