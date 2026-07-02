const express = require('express')
const cors = require('cors');
const connectDB = require('./config/mongodb.js');
const connectCloudinary = require('./config/cloudinary.js');
const userRouter = require('./routes/userRoute.js');
const productRouter = require('./routes/productRoute.js');
const cartRouter = require('./routes/cartRoute.js');
const orderRouter = require('./routes/orderRoute.js');

require('dotenv/config');

//App Config
const app = express();
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();

 //middlewares
 app.use(express.json())
 app.use(cors())

 //api Endpoints
 app.use('/api/user',userRouter)
 app.use('/api/product',productRouter)
 app.use('/api/cart',cartRouter)
 app.use('/api/order',orderRouter)

 app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
 })