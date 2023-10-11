const updateDogController = require('../controllers/updateDogController');

const updateDogHandler = async (req, res) => {
	const {
		id,
		name,
		minHeight,
		maxHeight,
		minWeight,
		maxWeight,
		life_span,
		temperament,
		image,
		dog_temperaments,
	} = req.body;
	try {
		const response = await updateDogController(
			id,
			name,
			minHeight,
			maxHeight,
			minWeight,
			maxWeight,
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
module.exports = updateDogHandler;
