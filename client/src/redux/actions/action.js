export const GETALLDOGS = 'GETALLDOGS';
export const ORDER = 'ORDER';
export const ORDERBYWEIGHT = 'ORDERBYWEIGHT';
export const FILTERTEMPERAMENT = 'FILTERTEMPERAMENT';
export const RESET = 'RESET';

import axios from 'axios';

export const getAllDogs = (name, page) => {
	const url = `http://localhost:3001/dogs?name=${name}&page=${page}`;
	return async (dispatch) => {
		try {
			const { data } = await axios.get(url);
			if (data) {
				return dispatch({
					type: GETALLDOGS,
					payload: data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const orderDogsByName = (order) => {
	return {
		type: ORDER,
		payload: order,
	};
};
export const orderDogsByWeight = (order) => {
	return {
		type: ORDERBYWEIGHT,
		payload: order,
	};
};
export const filterTemperament = (temperament) => {
	return {
		type: FILTERTEMPERAMENT,
		payload: temperament,
	};
};
export const reset = () => {
	return {
		type: RESET,
	};
};
