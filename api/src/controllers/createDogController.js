require('dotenv').config();
const { Dog, Temperaments } = require('../db');
const createDogController = async (
	name,
	height,
	weight,
	life_span,
	temperament,
	image,
	dog_temperaments
) => {
	const newDog = await Dog.create({
		name,
		height,
		weight,
		life_span,
		temperament,
		image,
	});
	await newDog.save();
	const temperaments = await Temperaments.findAll({
		where: { name: dog_temperaments },
	});

	await newDog.addTemperaments(temperaments);

	return newDog;
};
module.exports = createDogController;
