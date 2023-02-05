import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import { dbConnection } from './config/db';
import RoomRouter from './controller/room';


export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));


app.use('/room', RoomRouter);
app.use('/', (req, res) => res.send('Video room api'));