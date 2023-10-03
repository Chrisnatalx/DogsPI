require('dotenv').config();
const { Dog, Temperaments } = require('../db');
const createDogController = async (
	name,
	height,
	weight,
	life_span,
	image,
	dog_temperaments
) => {
	const newDog = await Dog.create({
		name,
		height,
		weight,
		life_span,
		image,
	});
	const temperaments = await Temperaments.findAll({
		where: { name: dog_temperaments },
	});

	await newDog.addTemperaments(temperaments);

	//dog_temperaments.forEach(async(t)=>{
	// const  TemperamentsDB = await Temperaments.findAll({
	// 	where: {temperamente: t}
	// })
	// await newTemperament.add
	// })
	return newDog;
};
module.exports = createDogController;
