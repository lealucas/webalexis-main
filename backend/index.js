const express = require('express');
const mongoose = require('mongoose')
const Billet = require('./models/billets') // on importe notre model
const billetRouter = require('./routes/billet');
const body = require('body-parser');
const logger = require('morgan');
var ObjectID = require('mongodb').ObjectID;

 
mongoose.connect('mongodb://localhost:27017/billets', {useNewUrlParser: true});

let app = express(); // création de l'objet représentant notre application express
let port = 8080;


app.use(body())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use(logger('dev'));
 
app.listen(port, () =>  { // ecoute du serveur sur le port 8080
    console.log('le serveur fonctionne')
})


app.get('/', async (req, res) => {
    const billet = await Billet.find() // On récupère tout les billet
    await res.json(billet)
})
 
app.get('/:id', async (req, res) => {
    const id = req.params.id // on récupère la valeure dans l'url
    console.log(id)
    const billet = await Billet.findOne({_id : ObjectID(id)}) // on récupère le billet grâce à son _id
    res.json(billet)
})

app.post('/', async (req, res) => {
    console.log(req.body);
  const from = req.body.from; // récupération des variables du body
  const airport_depart = req.body.airport_depart;
  const to = req.body.to;
  const airport_arrive = req.body.airport_arrive;
  const date_et_heure_depart = req.body.date_et_heure_depart; 
  const date_et_heure_arrivee = req.body.date_et_heure_arrivee;
  const numero_vol = req.body.numero_vol;
  const statut = req.body.statut;
  const terminal_depart = req.body.terminal_depart; 
  const avion = req.body.avion;
  const Gate_depart = req.body.Gate_depart;
  const terminal_arrive = req.body.terminal_arrive;
  const Gate_arrive = req.body.Gate_arrive;

  const nouveau_billet = new Billet({ // création d'un objet représentant notre nouveau billet
      from : from,
      airport_depart : airport_depart,
      to : to,
      airport_arrive : airport_arrive,
      date_et_heure_depart: date_et_heure_depart,
      date_et_heure_arrivee: date_et_heure_arrivee,
      numero_vol: numero_vol,
      statut: statut,
      terminal_depart: terminal_depart,
      avion: avion,
      Gate_depart: Gate_depart,
      terminal_arrive: terminal_arrive,
      Gate_arrive: Gate_arrive
  })
   
  await nouveau_billet.save() // sauvegarde asynchrone du nouveau billet
  res.json(nouveau_billet)
  return

})

app.delete('/:id', async(req, res) => {
    const id = req.params.id
    const suppr = await Billet.deleteOne({_id : id})
    res.json(suppr)
     
})

app.patch('/:id', async(req, res) => {
    const id = req.params.id
    const billet = await Billet.findOne({_id : id}) // on récupere le billet pour pouvoir le modifier
     
    // on récupère les valeurs potentiellement modifiées
    const from = req.body.from; 
    const airport_depart = req.body.airport_depart;
    const to = req.body.to;
    const airport_arrive = req.body.airport_arrive;
    const date_et_heure_depart = req.body.date_et_heure_depart; 
    const date_et_heure_arrivee = req.body.date_et_heure_arrivee;
    const numero_vol = req.body.numero_vol;
    const statut = req.body.statut;
    const terminal_depart = req.body.terminal_depart; 
    const avion = req.body.avion;
    const Gate_depart = req.body.Gate_depart;
    const terminal_arrive = req.body.terminal_arrive;
    const Gate_arrive = req.body.Gate_arrive;
     
    // on vérifie maintenant si les valeurs sont remplies, si elles le sont on modifie l'ancienne valeure par la nouvelle
     
    if (from) {
        billet.from = from
    }
    if (airport_depart) {
        billet.airport_depart = airport_depart
    }
    if (to) {
        billet.to = to
    }
    if (airport_arrive) {
        billet.airport_arrive = airport_arrive
    }
    if (date_et_heure_depart) {
        billet.date_et_heure_depart = date_et_heure_depart
    }
    if (date_et_heure_arrivee) {
        billet.date_et_heure_arrivee = date_et_heure_arrivee
    }
    if (numero_vol) {
        billet.numero_vol = numero_vol
    }
    if (statut) {
        billet.statut = statut
    }
    if (terminal_depart) {
        billet.terminal_depart = terminal_depart
    }
    if (avion) {
        billet.avion = avion
    }
    if (Gate_depart) {
        billet.Gate_depart = Gate_depart
    }
    if (terminal_arrive) {
        billet.terminal_arrive = terminal_arrive
    }
    if (Gate_arrive) {
        billet.Gate_arrive = Gate_arrive
    }
     
    await billet.save() // on sauvegarde les modifications
     
    res.json(billet)
    
})