const createDogController = require('../controllers/createDogController');

const createDogHandler = async (req, res) => {
	try {
		const {
			name,
			height,
			weight,
			life_span,
			temperament,
			image,
			dog_temperaments,
		} = req.body;
		const response = await createDogController(
			name,
			height,
			weight,
			life_span,
			temperament,
			image,
			dog_temperaments
		);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
module.exports = createDogHandler;
