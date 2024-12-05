const mongoose = require('mongoose');
// const ObjectId = mongoose.SchemaTypes.ObjectId; por si tiene relaciones

const PlayerSchema = new mongoose.Schema({
    //esperar los datos de cada jugador

    name: String,
    team: String, // ???
    salary: Number,
    number:Number,
    //pueden haber mas atributos
}, { timestamps: true });

  
const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;