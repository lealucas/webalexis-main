const mocha = require('mocha');
const assert = require('assert');
const billet = require('./models/billets');
const { doesNotMatch } = require('assert');

//Describe test 

describe('Saving records', function(){


    // Create test
    it('Save a record to the database', function(done){
        var bi = new billet({
            from: 'Paris',
            airport_depart : 'Roissy CDG',
            to: 'San Francisco',
            airport_arrivé: 'blabla',
            date_et_heure_depart: '2020-12-01 10:20:31',
            date_et_heure_arrivée: '2020-12-01 19:20:31',
            numero_vol: '789',
            statut: 'En cours',
            avion: 'A380',
            temps_vol: 'Coucou',
            terminal_départ: '2E',
            Gate_départ: '24',
            terminal_arrivé: 'E',
            Gate_arrivé: '12' 
        })

        bi.save().then(function(){
            assert(bi.isNew === false);
            done();
        });

    });

});