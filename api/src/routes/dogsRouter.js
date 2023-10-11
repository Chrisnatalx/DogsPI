const { Router } = require('express');
const getTemperamentsHandler = require('../handlers/getTemperamentshandler');
const createDogHandler = require('../handlers/createDogHandler');
const getDogsByIdHandler = require('../handlers/getDogsByIdHandler');
const getDogsHandler = require('../handlers/getDogsHandler');
const deleteDogHandler = require('../handlers/deleteDogHandler');
const updateDogHandler = require('../handlers/updateDogHandler');

const dogsRouter = Router();

dogsRouter.get('/', getDogsHandler);
dogsRouter.get('/temperaments', getTemperamentsHandler);
dogsRouter.get('/:id', getDogsByIdHandler);
dogsRouter.post('/', createDogHandler);
dogsRouter.delete('/', deleteDogHandler);
dogsRouter.put('/', updateDogHandler);

module.exports = dogsRouter;
