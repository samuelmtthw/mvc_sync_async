const command = process.argv[2];
const input = process.argv.slice(3);
const Controller = require('./controllers/controller');

switch (command) {
	case 'help':
		Controller.help();
		break;

	case 'list':
		Controller.list();
		break;

	case 'add':
		Controller.createPokemon(input);

		break;

	default:
		'';
}
