require('dotenv').config();
const { Dog, Temperaments } = require('../db');
const createDogController = async (
	name,
	minHeight,
	maxHeight,
	minWeight,
	maxWeight,
	life_span,
	temperament,
	image,
	dog_temperaments
) => {
	const newDog = await Dog.create({
		name,
		height: `${minHeight} - ${maxHeight}`,
		weight: `${minWeight} - ${maxWeight}`,
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
