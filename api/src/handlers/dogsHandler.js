const {
	getDogs,
	getDogsById,
	getDogsByName,
	createDog,
} = require('../controllers/getDogs');

const getDogsHandler = async (req, res) => {
	const { name } = req.query;
	try {
		if (!name) {
			const dogs = await getDogs(); // hacemos el llamado al controlador, debe esperar a la respuesta
			res.status(200).json(dogs); //response formato json
		} else {
			const nameTolowerCase = name.toLowerCase();
			const dogs = await getDogsByName(nameTolowerCase);

			dogs
				? res.status(200).json(dogs)
				: res
						.status(404)
						.json({ message: `No se encontro ningun perro con esa raza` });
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
const getDogsByIdHandler = async (req, res) => {
	try {
		const { id } = req.params; //obtenemos el id por params
		const source = isNaN(id) ? 'bdd' : 'api';
		const dog = await getDogsById(id, source); // invocamos getDogsById y pasamos el id
		dog
			? res.status(200).json(dog)
			: res
					.status(404)
					.json({ message: `No se encontro el perro con el Id : ${id}` });
		//response formato json
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const createDogHandler = async (req, res) => {
	try {
		const { name, height, weight, life_span, image } = req.body;
		const response = await createDog(name, height, weight, life_span, image);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getDogsHandler, getDogsByIdHandler, createDogHandler };
