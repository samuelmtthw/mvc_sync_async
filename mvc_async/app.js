// root file
const Controller = require('./controllers/controller');
const command = process.argv[2];
const params = process.argv.splice(3);

switch (command) {
	case 'help':
		Controller.showHelp();
		break;

	case 'list':
		Controller.showCards();
		break;

	case 'add':
		Controller.addCard(params);
		break;

	case 'showCard':
		Controller.showCard(params);
		break;

	default:
		Controller.showHelp();
		break;
}
