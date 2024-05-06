import { Order } from '../models/Order.js';

export const index = async (req, res) => {

  const orders = await Order.findAll(); // Fetch all orders

  res.render('layout', { 
    content: 'home',  // The name of the partial/content to include
    orders,  // Passing the 'orders' data
  });

};

export const create = async (req, res) => {
  const { description, status } = req.body;

  if (!description) { // Check for required fields
    return res.status(400).json({ error: 'Description is required' });
  }

  try {
    const newOrder = await Order.create({ description, status: status || 'pending' });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};