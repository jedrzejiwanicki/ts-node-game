import { Router } from 'express';

import { GridController } from '../controllers/GridController';

const GridRouter = Router();

GridRouter.get('/', (req, res) => new GridController().getAll(req, res));

export { GridRouter };