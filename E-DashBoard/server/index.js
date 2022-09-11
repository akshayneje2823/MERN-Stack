const express = require('express');
const mongoose = require('mongoose');
const app = express();

const coonectDB = async () => {
    mongoose.connect("mongodb://localhost:2017/e-dashboard")
    const ProductScema = new mongoose.Schema({});
    const product = mongoose.model("Products",ProductScema)
    const data = await product.find();
    console.log(data)
}

coonectDB()

app.get('/', (req, res) => {
    res.send("Working on....")
}).listen(5000)