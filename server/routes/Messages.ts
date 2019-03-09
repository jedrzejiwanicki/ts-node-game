import { Router } from 'express';

import { MessagesController } from '../controllers/MessagesController';

const MessagesRouter = Router();

MessagesRouter.get('/', (req, res) => new MessagesController().getAll(req, res));

export { MessagesRouter };