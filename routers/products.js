const axios = require('axios');
const express = require('express');
const { API_ROUTE_PATHS } = require("../constants/routes");

const router = express.Router();

// Get product by SyscoID
router.get('/product',async (req, res) => {

    try {
      const response = await axios.get(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}/get-product-by-sysco-id`, {
        params :{
          sysco_id : req.query.sysco_id
        }
      });
      // Transform the data here if needed
      res.send(response.data);
    } catch (error) {
      res.status(error.response.data.code).send(error.response.data);
    }
})
//-----------------------------------------------CUSTOMER - DASHBOARD-----------------------------------------
// Get all available approved products to customer dashboard
router.get('/product/customer-dashboard',async (req, res) => {

    try {
      const response = await axios.get(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}`, {
        params :{
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

//-----------------------------------------------ADMIN - DASHBOARD--------------------------------------------
// Get product by ID
router.get('/product/admin-dashboard',async (req, res) => {

    try {
      const response = await axios.get(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}/get-product-for-admin-dashboard`, {
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

// Get all approval pending products
router.get('/product/admin-dashboard/all-products',async (req, res) => {

    try {
      const response = await axios.get(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}/get-approval-pending-products`, {
        params :{
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

// update approval
router.put('/product/admin-dashboard',async (req, res) => {
  
    const product = {
      productSyscoID
    } = req.body;
  
    try {
      var response = await axios.put(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}/update-approval`,
      product,
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

//-----------------------------------------------SUPPLIER - DASHBOARD--------------------------------------------
// Save product
router.post('/product',async (req, res) => {
    const product = {
        productDescription,
        productImage,
        productMeasuringUnit,
        productName,
        productPrice,
        productStatus,
        supplierName,
        supplierSyscoID
      } = req.body;
    
    try {
      const response = await axios.post(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}`,product);
      // Transform the data here if needed
      res.send(response.data);
    } catch (error) {
      console.log(error)
      res.status(409).send("Product already exists");
    }
});

// update product
router.put('/product',async (req, res) => {
  
    const product = {
        productDescription,
        productMeasuringUnit,
        productName,
        productPrice,
        productStatus
  } = req.body;
  
    try {
      var response = await axios.put(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}`,
      product,
      {
        params :{
            sysco_id : req.query.sysco_id
        }
      });
      // Transform the data here if needed
      res.status(204).send(response.data);
    } catch (error) {
      res.status(error.response.data.code).send(error.response.data);
    }
});

// Delete product
router.delete('/product',async (req, res) => {

    try {
      const response = await axios.delete(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}`,{
        params :{
          sysco_id : req.query.sysco_id
        }
      });
      // Transform the data here if needed
      res.status(204).send(response.data);
    } catch (error) {
      res.status(error.response.data.code).send(error.response.data);
    }
});

// Get all products by supplier and product status
router.get('/product/supplier-dashboard/products-productStatus',async (req, res) => {

    try {
      const response = await axios.get(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}/get-products-by-supplier`, {
        params :{
            supplier_sysco_id : req.query.supplier_sysco_id,
            product_status : req.query.product_status,
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

// Get all products by supplier and product approval
router.get('/product/supplier-dashboard/products-productApproval',async (req, res) => {

    try {
      const response = await axios.get(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}/get-approved-products-by-supplier`, {
        params :{
            supplier_sysco_id : req.query.supplier_sysco_id,
            product_approval : req.query.product_approval,
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

module.exports = router;
