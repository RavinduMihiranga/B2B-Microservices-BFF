const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

const userRouter = require("./routers/users.js");
const productRouter = require("./routers/products.js");
const orderRouter = require("./routers/orders.js");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);


app.listen(port, () => {
  console.log(`BFF running at http://localhost:${port}`);
});