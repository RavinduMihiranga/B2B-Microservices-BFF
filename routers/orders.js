const axios = require('axios');
const express = require('express');
const { API_ROUTE_PATHS } = require("../constants/routes");


const router = express.Router();

//----------------------------------------------------------CUSTOMER - DASHBOARD-------------------------------------------------------------
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
      const response = await axios.post(`${API_ROUTE_PATHS.ORDERS_BASE_URL}`,order,
      {
        params :{
          sessionID : req.query.sessionID
        }
      }
      );
      // Transform the data here if needed
      res.send(response.data);
    } catch (error) {
      res.status(error.response.data.code).send(error.response.data);
    }
});

// update-order-status-by-customer
router.put('/order/customer-dashboard/update',async (req, res) => {
  
  const order = {
    deliveryAddress,
    deliveryDate,
    orderStatus
  } = req.body;

  try {
    var response = await axios.put(`${API_ROUTE_PATHS.ORDERS_BASE_URL}/update-order-by-customer`,
    order,
    {
      params :{
        id : req.query.id
      }
    });
    // Transform the data here if needed
    res.status(204).send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
});

// Get order by ID
router.get('/order/customer-dashboard',async (req, res) => {

  try {
    const response = await axios.get(`${API_ROUTE_PATHS.ORDERS_BASE_URL}/get-order-details`, {
      params :{
        id : req.query.id
      }
    });
    
    // var finalResponse = {
    //   code : response.data.code,
    //   message: response.data.message,
    //   data : {
    //     orderDetailsDTOList : [
    //       {
    //         productSyscoID,
    //         productName,
    //         quantity,
    //         price,
    //         supplierSyscoID,
    //         supplierName,
    //         supplyStatus,
    //         id,
    //         supplierEmail,
    //         supplierContactNumber
    //       }
    //     ],
    //     totalPrice : response.data.data.totalPrice,
    //     deliveryDate : response.data.data.deliveryDate,
    //     deliveryAddress : response.data.data.deliveryAddress,
    //     orderStatus : response.data.data.orderStatus,
    //     totalProducts : response.data.data.totalProducts,
    //     id : response.data.data.id,
    //   }
    // }
    // console.log(finalResponse);
    // array = response.data.data.orderDetailsDTOList;

    // array.forEach(async element => { 
    //   const userData = await axios.get(`http://localhost:3000/user`,{
    //     params :{
    //       sysco_id : element.supplierSyscoID
    //     }
    //   });

    //   finalResponse.data.orderDetailsDTOList.supplierEmail = userData.data.data.userEmail;
    //   finalResponse.data.orderDetailsDTOList.supplierContactNumber = userData.data.data.userContactNumber;
      
    // });
    // // console.log(array);
    // // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.status(error.response.data.code).send(error.response.data);
  }
})

// get orders by customer by order status
router.get('/order/customer-dashboard/all',async (req, res) => {

  try {
    const response = await axios.get(`${API_ROUTE_PATHS.ORDERS_BASE_URL}/get-orders-by-customer`, {
      params :{
        sysco_id : req.query.sysco_id,
        order_status : req.query.order_status,
        page : req.query.page,
        size : req.query.size
      }
    });
    // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
})

//-----------------------------------------------------SUPPLIER - DASHBOARD-----------------------------------------------------------------
// update supply status by supplier
router.put('/order/supplier-dashboard/update',async (req, res) => {

  const order = {
    supplyStatus
  } = req.body;
  try {
    var response = await axios.put(`${API_ROUTE_PATHS.ORDERS_BASE_URL}/update-supply-status-by-supplier`,
    order,
    {
      params :{
        id:req.query.id
      }
    });
    // Transform the data here if needed
    res.status(204).send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
});

// Get purchase order by ID
router.get('/order/supplier-dashboard',async (req, res) => {

  try {
    const response = await axios.get(`${API_ROUTE_PATHS.ORDERS_BASE_URL}/get-purchase-order-details`, {
      params :{
        id : req.query.id
      }
    });
    // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
})

// get purchase orders by supplier by supply status
router.get('/order/supplier-dashboard/all',async (req, res) => {

  try {
    const response = await axios.get(`${API_ROUTE_PATHS.ORDERS_BASE_URL}/get-orders-by-supplier`, {
      params :{
        sysco_id : req.query.sysco_id,
        supply_status : req.query.supply_status,
        page : req.query.page,
        size : req.query.size
      }
    });
    // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
})

// ------------------------------------------ Cart - Service------------------------------------------
// Save cart
router.post('/order/cart',async (req, res) => {
  const cart = {
    sessionID,
    productSyscoID,
    productName,
    quantity,
    price
    } = req.body;
  try {
    const response = await axios.post(`${API_ROUTE_PATHS.ORDERS_BASE_URL}/cart`,cart,
    {
      params :{
        sessionID : req.query.sessionID
      }
    });
    // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
});

// Get all Cart details
router.get('/order/cart',async (req, res) => {

  try {
    const response = await axios.get(`${API_ROUTE_PATHS.ORDERS_BASE_URL}/cart`, {
      params :{
        sessionID : req.query.sessionID
      }
    });
    // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
})

// update cart
router.put('/order/cart',async (req, res) => {
  const cart = {
        productSyscoID,
        productName,
        quantity,
        price
      } = req.body;

  try {
    var response = await axios.put(`${API_ROUTE_PATHS.ORDERS_BASE_URL}/cart`,
    cart,
    {
      params :{
        sessionID : req.query.sessionID
      }
    });
    // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
});

// Delete Cart
router.delete('/order/cart',async (req, res) => {

  try {
    const response = await axios.delete(`${API_ROUTE_PATHS.ORDERS_BASE_URL}/cart`, {
      params :{
        sessionID : req.query.sessionID,
        id : req.query.id
      }
    });
    // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
})



module.exports = router;