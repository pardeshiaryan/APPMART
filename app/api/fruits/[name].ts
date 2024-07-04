// pages/api/fruits/[name].ts

import { NextApiRequest, NextApiResponse } from 'next';
import specificFruit from '@/action/fetchSelectedFruit';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.query;

  try {
    const fruit = await specificFruit({ name: name as string });

    if (!fruit) {
      return res.status(404).json({ error: 'Fruit not found' });
    }

    res.status(200).json(fruit);
  } catch (error) {
    console.error('Error fetching fruit:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
