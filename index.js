const express = require('express');
const axios = require('axios');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 2061;

const userRouter = require("./routers/users.js");
const productRouter = require("./routers/products.js");
const orderRouter = require("./routers/orders.js");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // Specify the upload folder here
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('productImage'), (req, res) => {
  // Handle file upload logic here
  res.send('File uploaded!');
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);


app.listen(port, () => {
  console.log(`BFF running at http://localhost:${port}`);
});