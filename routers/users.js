const axios = require('axios');
const express = require('express');
const { API_ROUTE_PATHS } = require("../constants/routes");


const router = express.Router();

// Get user by SyscoID
router.get('/user',async (req, res) => {

    try {
      const response = await axios.get(`${API_ROUTE_PATHS.USERS_BASE_URL}`, {
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

// Save user
router.post('/user/signup',async (req, res) => {
  const user = {
    userContactNumber,
    userEmail,
    userFirstName,
    userLastName,
    userPassword,
    userRole,
    userStatus
  } = req.body;
  
  try {
    const response = await axios.post(`${API_ROUTE_PATHS.USERS_BASE_URL}`,user);
    // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
});

// Login User
router.post('/user/login',async (req, res) => {
  const user = {
    userEmail,
    userPassword
  } = req.body;
  
  try {
    const response = await axios.post(`${API_ROUTE_PATHS.USERS_BASE_URL}/login`,user);
    // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
});

// update user
router.put('/user',async (req, res) => {
  
  const user = {
    userContactNumber,
    userEmail,
    userFirstName,
    userLastName,
    userPassword,
    userStatus
  } = req.body;

  try {
    var response = await axios.put(`${API_ROUTE_PATHS.USERS_BASE_URL}`,
    user,
    {
      params :{
        sysco_id : req.query.sysco_id
      }
    });
    // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
});

// delete mapping
router.delete('/user',async (req, res) => {

  try {
    const response = await axios.delete(`${API_ROUTE_PATHS.USERS_BASE_URL}`,{
      params :{
        sysco_id : req.query.sysco_id
      }
    });
    // Transform the data here if needed
    res.send(response.data);
  } catch (error) {
    res.status(error.response.data.code).send(error.response.data);
  }
});

// Get user by userRole
router.get('/user/by-role',async (req, res) => {
  try {
    const response = await axios.get(`${API_ROUTE_PATHS.USERS_BASE_URL}/get-users-by-userRole`, {
      params :{
        userRole : req.query.userRole,
        userStatus : req.query.userStatus,
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