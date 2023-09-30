const { Router } = require('express');
const {
	getDogsHandler,
	getDogsByIdHandler,
	createDogHandler,
} = require('../handlers/dogsHandler');

const dogsRouter = Router();

dogsRouter.get('/', getDogsHandler);
dogsRouter.get('/:id', getDogsByIdHandler);
dogsRouter.get('/temperaments', getDogsByIdHandler);
dogsRouter.post('/', createDogHandler);

module.exports = dogsRouter;
