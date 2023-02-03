import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import { dbConnection } from './config/db';


export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

dbConnection();

app.use('/room', );
app.use('/', (req, res) => res.send('Video room api'));