import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './app.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`🌐 Express server running on http://localhost:${PORT}`);
});
