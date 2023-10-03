require('dotenv').config();

const getTemperamentsController = async (dogs) => {
	console.log(dogs);
	const temperaments = new Set();
	dogs.forEach((dog) => {
		const temperamentsBreed = dog.temperament || '';
		if (temperamentsBreed) {
			temperamentsBreed.split(', ').forEach((temperamento) => {
				temperaments.add(temperamento.trim());
			});
		}
	});
	return Array.from(temperaments);
};
module.exports = getTemperamentsController;
