require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

//controler que se comunica con la api para obtener datos de las razas.
const getDogsController = async () => {
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

module.exports = getDogsController;
