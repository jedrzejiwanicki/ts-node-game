import express from 'express';
import SocketIO from 'socket.io';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

import { MessagesRouter } from './routes/Messages';
import { UserRouter } from './routes/User';
import { GridRouter } from './routes/Grid';
import { LandscapeRouter } from './routes/Landscape';
import { GameService } from './services/GameService';


const app = express();
const server = http.createServer(app);

global.io = SocketIO(server, { serveClient: false, path: '/api/socket.io', transports: ['websocket'] });

new GameService().init();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/messages', MessagesRouter);
app.use('/api/user', UserRouter);
app.use('/api/grid', GridRouter);
app.use('/api/landscape', LandscapeRouter);

server.listen(3001);
