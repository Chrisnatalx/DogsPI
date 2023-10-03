require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Dog } = require('../db');
const getDogsByIdController = async (id, source) => {
	if (source === 'api') {
		const { data } = await axios.get(
			`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`
		);
		const dog = {
			id: data.id,
			name: data.name,
			image: `https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg`,
			temperament: data.temperament,
			weight: data.weight.metric,
			heigth: data.heigth,
			origin: data.origin,
			life_span: data.life_span,
		};
		return dog;
	} else {
		return await Dog.findByPk(id);
	}
};
module.exports = getDogsByIdController;
