const express = require('express')
const mongoDB = require('./config/config')
const Product = require('./models/Product')
const app = express()

app.use(express.json())

mongoDB();

app.listen(5000, ()=>{
    console.log('Server is running on port 5000')
})

app.post('/products/total-price', async (req, res)=>{
    const products = req.body;
    let totalPrice = 0;

    try{
       for (const product of products){
          totalPrice += product.price
          const newProduct = new Product(product);
          await newProduct.save();
       }
       
       res.json({totalPrice})
    } catch (error){
        res.status(500).json({message: error.message})
    }
})