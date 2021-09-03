const fs = require('fs');

class Pokemon {
	constructor(id, name, height, weight) {
		this.id = Number(id);
		this.name = name;
		this.height = Number(height);
		this.weight = Number(weight);
	}
}

class Model {
	static readPokemons() {
		let pokemons = fs.readFileSync('./data/pokemon.json', 'utf-8');
		pokemons = JSON.parse(pokemons);
		pokemons = pokemons.map((el) => {
			return new Pokemon(el.id, el.name, el.height, el.weight);
		});

		return pokemons;
	}

	static create(name, height, weight) {
		let pokemons = Model.readPokemons();
		let lastId = pokemons[pokemons.length - 1].id;
		let pokemon = new Pokemon(lastId + 1, name, height, weight);
		pokemons.push(pokemon);
		fs.writeFileSync(
			'./data/pokemon.json',
			JSON.stringify(pokemons, null, 2)
		);
		return pokemon;
	}
}

module.exports = Model;
