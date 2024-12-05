const mongoose = require('mongoose');
// const ObjectId = mongoose.SchemaTypes.ObjectId; por si tiene relaciones

const PlayerSchema = new mongoose.Schema({
    //esperar los datos de cada jugador

    nombre: String,
    equipo: String, // ???
    salario: Number,
    dorsal:Number,
    //pueden haber mas atributos
}, { timestamps: true });

  
const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;