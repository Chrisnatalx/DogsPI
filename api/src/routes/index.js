const { Router } = require('express');
const dogsRouter = require('./dogsRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.use('/dogs', dogsRouter);

module.exports = mainRouter;
