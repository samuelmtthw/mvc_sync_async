const Model = require('../models/model');
const View = require('../views/view');

class Controller {
	static showHelp() {
		View.showHelps();
	}

	static showCards() {
		Model.getCards((err, data) => {
			if (err) {
				View.showErrors(err);
			} else {
				View.showCards(data);
			}
		});
		View.showCards();
	}

	static showCard(id) {
		Model.getCard(id, (err, card) => {
			if (err) {
				View.showErrors();
			} else {
				View.showCard(card);
			}
		});
	}

	static addCard(params) {
		Model.addCard(params, (err, addedCard) => {
			if (err) {
				View.showErrors;
			} else {
				View.successAddCard(addedCard);
			}
		});
	}
}

module.exports = Controller;
