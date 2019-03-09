import express, { Request, Response } from 'express';
import SocketIO from 'socket.io';
import http from 'http';
import cors from 'cors';

import { UserRouter } from './routes/User';
import { GridRouter } from './routes/Grid';
import { LandscapeRouter } from './routes/Landscape';
import { GameService } from './services/GameService';


const app = express();
const server = http.createServer(app);

global.io = SocketIO(server, { serveClient: false });

new GameService().init();

if (process.env.ENVIRONMENT === 'dev') {
  app.use('/', express.static('./client/dist/'));
}

app.use(cors());
app.use('/user', UserRouter);
app.use('/grid', GridRouter);
app.use('/landscape', LandscapeRouter);

server.listen(3001);
