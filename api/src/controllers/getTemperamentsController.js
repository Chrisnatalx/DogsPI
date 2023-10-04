require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Temperaments } = require('../db');
const getTemperamentsController = async () => {
	const { data } = await axios.get(
		`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
	);
	const temperaments = new Set();
	data.forEach((dog) => {
		const temperamentsBreed = dog.temperament;
		if (temperamentsBreed) {
			temperamentsBreed.split(', ').forEach(async (temperamento) => {
				const temperamentTrim = temperamento.trim();
				temperaments.add(temperamentTrim);
				await Temperaments.findOrCreate({
					where: { name: temperamentTrim },
				});
			});
		}
	});

	return Array.from(temperaments);
};
module.exports = getTemperamentsController;
