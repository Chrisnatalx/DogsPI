const { Router } = require('express');
const {
	getDogsHandler,
	getDogsByIdHandler,
} = require('../handlers/dogsHandler');

const dogsRouter = Router();

dogsRouter.get('/', getDogsHandler);
dogsRouter.get('/:id', getDogsByIdHandler);
dogsRouter.get('/temperaments', getDogsByIdHandler);

module.exports = dogsRouter;
