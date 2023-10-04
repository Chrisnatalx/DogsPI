const getDogsByNameController = require('../controllers/getDogsByNameController');
const getDogsController = require('../controllers/getDogsController');

const getDogsHandler = async (req, res) => {
	const { name, page } = req.query;
	try {
		if (!name) {
			const dogs = await getDogsController(page); // hacemos el llamado al controlador, debe esperar a la respuesta
			res.status(200).json(dogs); //response formato json
		} else {
			const nameTolowerCase = name.toLowerCase();
			const dogs = await getDogsByNameController(nameTolowerCase);

			dogs.length > 0
				? res.status(200).json(dogs)
				: res
						.status(404)
						.json({ message: `No se encontro ningun perro con esa raza` });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = getDogsHandler;
