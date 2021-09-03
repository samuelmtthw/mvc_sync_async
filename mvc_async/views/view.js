class View {
	static showHelps() {
		console.log(`
        node app.js help
        node app.js list
        node app.js add <name> <atk> <def>
        `);
	}

	static showErrors() {
		console.log(err);
	}

	static showCards(data) {
		console.table(data);
	}

	static showCard(data) {
		console.log(data);
	}

	static successAddCard(card) {
		console.log(`
        Berhasil menambahkan kartu ${card.name}
        `);
	}
}

module.exports = View;
