const { Dog } = require('../db');
const updateDogController = async (
	id,
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
	await Dog.update(
		{
			name,
			height: `${minHeight} - ${maxHeight}`,
			weight: `${minWeight} - ${maxWeight}`,
			life_span,
			temperament,
			image,
			dog_temperaments,
		},
		{
			where: {
				id: id,
			},
		}
	);
};
module.exports = updateDogController;
