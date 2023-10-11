const deleteDogController = require('../controllers/deleteDogController');

const deleteDogHandler = async (req, res) => {
	try {
		const { id } = req.body;
		const response = await deleteDogController(id);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = deleteDogHandler;
