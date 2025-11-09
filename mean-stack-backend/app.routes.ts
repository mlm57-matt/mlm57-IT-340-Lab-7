import { Router, Request, Response } from 'express';
import Item from './item.model';

const router = Router();

router.get('/items', async (req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/items', async (req: Request, res: Response) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
