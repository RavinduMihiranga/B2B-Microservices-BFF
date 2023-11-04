const Users_URL = "http://localhost:8080";
const Products_URL = "http://localhost:8081";
const Orders_URL = "http://localhost:8082";


const API_ROUTE_PATHS = {
    USERS_BASE_URL: `${Users_URL}/api/v1/users`,
    PRODUCTS_BASE_URL: `${Products_URL}/api/v1/products`,
    ORDERS_BASE_URL: `${Orders_URL}/api/v1/orders`,
};

module.exports = {
    API_ROUTE_PATHS,
};