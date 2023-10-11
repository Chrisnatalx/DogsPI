const { Dog } = require('../db');
const deleteDogController = async (id) => {
	await Dog.destroy({
		where: { id },
	});
};
module.exports = deleteDogController;
