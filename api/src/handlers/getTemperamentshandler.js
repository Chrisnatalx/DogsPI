const getTemperamentsController = require('../controllers/getTemperamentsController');

const getTemperamentsHandler = async (req, res) => {
	try {
		const response = await getTemperamentsController();
		res.status(200).json(response);
	} catch (error) {
		res.status.json({ error: error.message });
	}
};
module.exports = getTemperamentsHandler;
