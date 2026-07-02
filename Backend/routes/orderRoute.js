const express = require('express')
const { allOrders, updateStatus, placeOrder, placeOrderStripe, placeOrderRazorpay, userOrders } = require('../controllers/orderController')
const adminAuth = require('../middleware/adminAuth')
const authUser = require('../middleware/auth')


const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list',adminAuth ,allOrders)
orderRouter.post('/status',adminAuth ,updateStatus)

//Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//user Features
orderRouter.post('/userorders',authUser,userOrders)


module.exports = orderRouter