import mongoose from 'mongoose';
import { config } from './app.config';

mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

export default mongoose;
