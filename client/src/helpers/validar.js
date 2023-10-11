// life_span: '',
//         temperament: '',
//         image: '',
//         dog_temperaments: ''

export const validar = (input) => {
	let errors = {};
	if (input.name.length < 4 || input.name.length >= 25) {
		errors.name = 'The name must be between 4 and 25 letters';
	}
	if (input.minHeight <= 0) {
		errors.minHeight = 'Height must be greater than 0';
	}
	if (input.maxHeight >= 55) {
		errors.maxHeight = 'The height must be less than 55';
	}
	if (input.minWeight <= 0) {
		errors.minWeight = 'Weight must be greater than 0';
	}
	if (input.maxWeight >= 50) {
		errors.maxWeight = 'The weight must be less than 50';
	}
	if (input.life_span === '') {
		errors.life_span = 'You must complete this field';
	}
	if (input.temperament === '') {
		errors.temperament = 'You must complete this field';
	}
	if (input.dog_temperaments === '') {
		errors.dog_temperaments = 'You must complete this field';
	}

	return errors;
};
