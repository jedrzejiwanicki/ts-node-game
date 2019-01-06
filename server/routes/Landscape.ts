import { Router } from 'express';

import { LandscapeController } from '../controllers/LandscapeController';

const LandscapeRouter = Router();

LandscapeRouter.get('/', (req, res) => new LandscapeController().getAll(req, res));

export { LandscapeRouter };