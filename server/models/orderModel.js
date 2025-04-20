const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
  name: { type: String },
  quantity: { type: Number },
  price: { type: Number },
});

const shippingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
});

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    items: [itemSchema],
    totalAmount: { type: Number, required: true },
    shippingDetails: shippingSchema,
    status: { type: String, default: 'Pending' },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
