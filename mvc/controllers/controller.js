const Model = require('../models/model');
const View = require('../views/view');

class Controller {
	static help() {
		View.showHelp();
	}

	static list() {
		let dataPokemon = Model.readPokemons();
		View.showTable(dataPokemon);
	}

	static createPokemon(input) {
		let [name, height, weight] = input;
		let newPokemon = Model.create(name, height, weight);
		View.successAdd(newPokemon);
	}
}

module.exports = Controller;
