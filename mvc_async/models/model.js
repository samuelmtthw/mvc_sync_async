const fs = require('fs');

class Card {
	constructor(id, name, atk, def) {
		this.id = id;
		this.name = name;
		this.atk = Number(atk);
		this.def = Number(def);
	}
}

class Model {
	static getCards(cb) {
		fs.readFile('./data/yugioh.json', (err, data) => {
			if (err) {
				cb(err);
			} else {
				data = JSON.parse(data, 'utf-8');

				data = data.map((el) => {
					return new Card(el.id, el.name, el.atk, el.def);
				});
				cb(null, data);
			}
		});
	}

	static addCard(params, cb) {
		Model.getCards((err, cards) => {
			if (err) {
				cb(err);
			} else {
				const [name, atk, def] = params;

				// terniary operator
				const id = cards.length == 0 ? 1 : cards[cards.length - 1].id;

				const newCard = new Card(id + 1, name, atk, def);

				cards.push(newCard);

				fs.writeFile(
					'./data/yugioh.json',
					JSON.stringify(cards, null, 2),
					(err) => {
						if (err) {
							cb(err);
						} else {
							cb(null, newCard);
						}
					}
				);
			}
		});
	}

	static getCard(id, cb) {
		Model.getCards((err, data) => {
			if (err) {
				cb(err);
			} else {
				for (let card of data) {
					if (Number(id) === card.id) {
						cb(err, card);
						break;
					}
				}
			}
		});
	}
}

module.exports = Model;
