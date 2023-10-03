const getDogsController = require('../controllers/getDogsController');
const getTemperamentsController = require('../controllers/getTemperamentsController');

const getTemperamentsHandler = async (req, res) => {
	try {
		const dogs = await getDogsController();
		console.log(dogs);
		const response = await getTemperamentsController(dogs);
		res.status(200).json(response);
	} catch (error) {
		res.status.json({ error: error.message });
	}
};
module.exports = getTemperamentsHandler;
