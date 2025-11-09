import mongoose from './db';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
}, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);

export default Item;
