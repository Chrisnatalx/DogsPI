require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Dog } = require('../db');

//controler que se comunica con la api para obtener datos de las razas.
const getDogs = async () => {
	const url = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
	const { data } = await axios.get(url); //solicitud a la api
	const breed = data.map((dog) => {
		// mapeamos la data para que obtener lo que necesitamos.
		return {
			id: dog.id,
			name: dog.name,
			image: dog.image.url,
			temperament: dog.temperament,
			weight: dog.weight.metric,
		};
	});
	return breed; //retornamos breed
};
const getDogsById = async (id, source) => {
	// const dog =
	// 	source === 'api'
	// 		? (
	// 				await axios.get(
	// 					`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`
	// 				)
	// 		  ).data
	// 		: await Dog.findByPk(id);

	// return dog;
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

const getDogsByName = async (name) => {
	const dogsDB = await Dog.findAll({
		where: {
			name: name,
		},
	});
	const mappedDogsDb = dogsDB.map((dog) => {
		return {
			id: dog.id,
			name: dog.name,
			image: dog.image.url,
			temperament: dog.temperament,
			weight: dog.weight.metric,
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

const createDog = async (name, height, weight, life_span, image) => {
	const newDog = await Dog.create({
		name,
		height,
		weight,
		life_span,
		image,
	});
	return newDog;
};

module.exports = { getDogs, getDogsById, getDogsByName, createDog };
