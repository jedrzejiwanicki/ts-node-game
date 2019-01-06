import { Router } from 'express';

import { UserController } from '../controllers/UserController';

const UserRouter = Router();

UserRouter.post('/', (req, res) => new UserController().create(req, res));
UserRouter.get('/', (req, res) => new UserController().getAll(req, res));

export { UserRouter };