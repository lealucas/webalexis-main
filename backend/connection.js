const mongoose = require('mongoose');


const connect = function (callback){
    mongoose.set("debug", true);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', true);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect("mongodb://localhost:27017/web");
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Connection error"));
    db.once("open", function(){
        console.log('Connexion réussi !!');
        callback();
    });
};

module.exports.connect = connect;




/*//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/web');

mongoose.connection.once('open', function{
    console.log('La connexion est operationnelle, lets go!');
}).on('error', function(error){
    console.log('Connection error', error);
});*/