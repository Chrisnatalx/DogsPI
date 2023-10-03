const { Router } = require('express');
const getTemperamentsHandler = require('../handlers/getTemperamentshandler');
const createDogHandler = require('../handlers/createDogHandler');
const getDogsByIdHandler = require('../handlers/getDogsByIdHandler');
const getDogsHandler = require('../handlers/getDogsHandler');

const dogsRouter = Router();

dogsRouter.get('/', getDogsHandler);
dogsRouter.get('/:id', getDogsByIdHandler);
dogsRouter.get('/temperaments', getTemperamentsHandler);
dogsRouter.post('/', createDogHandler);

module.exports = dogsRouter;
