import {
	GETALLDOGS,
	ORDER,
	ORDERBYWEIGHT,
	FILTERTEMPERAMENT,
	RESET,
} from '../actions/action';

let initialState = { allDogs: [], dogs: [] };

export default function rootReducer(state = initialState, action) {
	let sorted;
	switch (action.type) {
		case GETALLDOGS:
			return {
				...state,
				allDogs: action.payload,
				dogs: action.payload,
			};
		case ORDER:
			let orderAllDogs = [...state.allDogs];
			if (action.payload === 'Ascendente') {
				sorted = orderAllDogs.sort((a, b) => a.name.localeCompare(b.name));
			} else {
				sorted = orderAllDogs.sort((a, b) => b.name.localeCompare(a.name));
			}

			return {
				...state,
				allDogs: [...sorted],
			};
		case ORDERBYWEIGHT:
			const orderAllDogsByWeight = [...state.allDogs]; // Crear una copia del arreglo original

			if (action.payload === 'LowerWeight') {
				orderAllDogsByWeight.sort((a, b) => {
					const pesoA = a.weight?.split(' - ');
					const pesoB = b.weight?.split(' - ');
					return parseInt(pesoA[0]) - parseInt(pesoB[0]);
				});
			} else {
				orderAllDogsByWeight.sort((a, b) => {
					const pesoA = a.weight?.split(' - ');
					const pesoB = b.weight?.split(' - ');
					return parseInt(pesoB[0]) - parseInt(pesoA[0]);
				});
			}

			// Ahora `orderAllDogs` contiene el arreglo ordenado
			return {
				...state,
				allDogs: orderAllDogsByWeight,
			};

		case FILTERTEMPERAMENT:
			return {
				...state,
				allDogs: state.allDogs.filter((dog) =>
					dog.temperament.includes(action.payload)
				),
			};
		case RESET:
			return {
				...state,
				allDogs: state.dogs,
			};

		default:
			return { ...state };
	}
}
