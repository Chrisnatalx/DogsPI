require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Dog } = require('../db');

const getDogsByNameController = async (name) => {
	const dogsDB = await Dog.findAll({
		where: {
			name: name,
		},
	});
	const mappedDogsDb = dogsDB.map((dog) => {
		return {
			id: dog.id,
			name: dog.name,
			image: dog.image,
			height: dog.height,
			weight: dog.weight,
		};
	});
	const dogsApi = (
		await axios.get(
			`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`
		)
	).data;
	const mappedDogsApi = dogsApi.map((dog) => {
		return {
			id: dog.id,
			name: dog.name,
			image: `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`,
			temperament: dog.temperament,
			weight: dog.weight.metric,
		};
	});

	const dogs = [...mappedDogsDb, ...mappedDogsApi];
	return dogs;
};
module.exports = getDogsByNameController;
