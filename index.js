const mongoose = require('mongoose');
const express = require('express');

const connectToMongo = require('./common/db');
connectToMongo();

const app = express();
app.use(express.json());

const port = 3022;

app.get("/" , (req, res) => {
    res.send("Hello World");
});

app.use("/user" , require('./user/route'));
app.use("/products", require("./products/route"));
app.use("/category", require("./category/route"));

app.listen(`${port}` , ()  => {
    console.log(`Server is listening on localhost:${port}`);
})

