  
var pokemon = require("../controllers/pokemon.js");

module.exports = function(app){

    app.get("/pokemon", pokemon.index)

    app.get("/pokemon/:id", pokemon.details)

    app.post("/pokemon", pokemon.addPokemon)

    app.put("/pokemon/:id", pokemon.editPokemon)

    app.delete("/pokemon/:id", pokemon.deletePokemon)
}

