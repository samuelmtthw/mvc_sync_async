class View {
	static showHelp() {
		console.log(`
            ============
            COMMAND LINE
            ============
            node app.js help
            node app.js list
            node app.js add <name> <height> <weight>
            ============
        `);
	}
	static showTable(data) {
		console.table(data);
	}

	static successAdd(data) {
		console.log(`Berhasil menambahkan ${data.name} dengan ID ${data.id}`);
	}
}

module.exports = View;
