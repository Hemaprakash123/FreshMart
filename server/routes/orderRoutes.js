const express = require('express');
const Order = require('../models/orderModel.js');  // Make sure the path is correct to your Order model
const router = express.Router();

// Add Order
router.post('/add', async (req, res) => {
  try {
    const { userId, items, totalAmount, shippingDetails } = req.body;

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      shippingDetails,
      status: 'Pending',
    });

    const savedOrder = await newOrder.save();  // 🔥 Error likely here
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error placing order' });
  }
});


// Get Order History by userId
router.get('/history/:userId', async (req, res) => {
  try {
    // Fetch all orders for the given userId
    const orders = await Order.find({ userId: req.params.userId });

    // Respond with the user's orders
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching order history' });
  }
});


router.post('/deliverorder', async (req, res) => {
  const orderid = req.body.orderid;
  try {
    const order = await Order.findOne({ _id: orderid });
    order.status = 'Delivered';
    await order.save();
    res.send('Order delivered successfully');
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
});


router.get('/getallorders', async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
});


module.exports = router;
