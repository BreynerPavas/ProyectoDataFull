const mongoose = require('mongoose');
// const ObjectId = mongoose.SchemaTypes.ObjectId; por si tiene relaciones

const PlayerSchema = new mongoose.Schema({
    //esperar los datos de cada jugador

    short_name: String,
    player_id:Number,

    club_name: String, // ???
    value_eur: Number,
    overall:Number,
    //pueden haber mas atributos
}, { timestamps: true });

PlayerSchema.index({ short_name: "text" });
  
const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;