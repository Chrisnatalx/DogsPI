const getDogsByIdController = require('../controllers/getDogsByIdController');

const getDogsByIdHandler = async (req, res) => {
	try {
		const { id } = req.params; //obtenemos el id por params
		const source = isNaN(id) ? 'bdd' : 'api';
		const dog = await getDogsByIdController(id, source); // invocamos getDogsById y pasamos el id
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

module.exports = getDogsByIdHandler;
