




/*const express = require('express');
var Billet = require('../models/billets');
var router = express.Router();



/* GET */

/*router.get('/', async (req, res) => {
  try {
    //récupération Billet de la bdd
    let bill = await Billet.find();

    res.json(bill);

  } catch(err){
    console.error(err);
    res.status(400);
  }
});

/* POST */

//const {from, airport_depart, to, airport_arrive, date_et_heure_depart, date_et_heure_arrivee, numero_vol, statut, avion, temps_vol, terminal_depart, Gate_depart, terminal_arrive, Gate_arrive}
/*router.post('/', async (req, res, next) => {
  try{

    const {from, airport_depart, to, airport_arrive} = req.body;
    let bi = new Billet({
      from, 
      airport_depart, 
      to,
      airport_arrive
    });
    const saveBillet = s.save();
    res.json(saveBillet);


  } catch(err){
    console.error(err);
    res.status(400);
  }
});


/* DELETE 

router.delete('/:billetId', async (req, res) => {
  try{

    await Billet.deleteOne({ _id = req.params.billetId })
    req.json({
      success: true
    })

  } catch(err){
    console.error(err);
    res.status(400);
  }
});*/

//module.exports = router;


/*
    from: String,
    airport_depart : String,
    to: String,
    airport_arrivé: String,
    date_et_heure_depart: Date,
    date_et_heure_arrivée: Date,
    numero_vol: Number,
    statut: String,
    avion: String,
    temps_vol: String,
    terminal_depart: String,
    Gate_départ: Number,
    terminal_arrivé: String,
    Gate_arrivé: Number    

    */