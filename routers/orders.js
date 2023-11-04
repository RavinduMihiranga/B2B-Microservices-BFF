const axios = require('axios');
const express = require('express');
const { API_ROUTE_PATHS } = require("../constants/routes");

const router = express.Router();

//-----------------------------------------------CUSTOMER - DASHBOARD-------------------------------------------
// Save order
router.post('/order',async (req, res) => {
    const order = {
            customerName,
            customerSyscoID,
            deliveryAddress,
            deliveryDate,
            orderDetailsSet = [
              {
                price,
                productName,
                productSyscoID,
                quantity,
                supplierName,
                supplierSyscoID
              }
            ],
            orderStatus,
            totalPrice
      } = req.body;
    
    try {
      const response = await axios.post(`${API_ROUTE_PATHS.ORDERS_BASE_URL}`,order);
      // Transform the data here if needed
      res.send(response.data);
    } catch (error) {
      console.log(error)
      res.status(409).send("Order already exists");
    }
});



module.exports = router;