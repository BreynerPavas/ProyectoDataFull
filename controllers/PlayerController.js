const Player = require("../models/Player")


const PlayerController = {
   async getAllPaged(req,res){
    try {
        const {page=1,limit=10} = req.query
         const players = await Player.find()
         .limit(limit)
         .skip((page - 1) * limit);

         res.send(players)
      } catch (error) {
          console.error(error);
      }
   },
   async get10MostvaluedPlayer(req,res){
    try {
        const {limit=10} = req.query
         const players = await Player.find()
         .sort({
            value_eur:-1
         })
         .limit(limit)
         res.send(players)
      } catch (error) {
          console.error(error);
      }
   },
   async getPlayerByName(req,res){
    try {
        const player = await Player.find({
            $text: {
                $search: req.params.short_name,
            },
        });
        res.send(player);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error fetching tasks" });
    }
   },
   async getPlayerById(req,res){
    try {
        const player = await Player.findById(req.params._id)
        res.send(player)
    } catch (error) {
        console.error(error);
        res.send(error)
    }
   },
   
}

module.exports = PlayerController