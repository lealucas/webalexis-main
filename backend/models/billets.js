var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var billetSchema = new mongoose.Schema({  
    from: {type: String,
         required: true},
    airport_depart : {type: String,
         required: true},
    to: {type: String,
         required: true},
    airport_arrive: {type: String,
         required: true},
    date_et_heure_depart: {type: String,
         required: true},
    date_et_heure_arrivee: {type: String,
         required: true},
    numero_vol: {type: String,
         required: true},
    statut: {type: String,
         required: true},
    terminal_depart: {type: String,
         required: true},
    avion: {type: String,
         required: true},
    Gate_depart: {type: String,
         required: true},
    terminal_arrive: {type: String,
         required: true},
    Gate_arrive: {type: String,
         required: true}
    
});

billetSchema.plugin(uniqueValidator);

module.exports = mongoose.model("billet", billetSchema);