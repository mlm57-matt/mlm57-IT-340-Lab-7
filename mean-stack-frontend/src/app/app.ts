import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './app.routes';
import './db'; 

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

import { config } from './app.config';

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
