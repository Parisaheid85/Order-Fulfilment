const data = require("./data.json");
const getOrders = () => {
  return data.orders;
};

const getOrder = (orderId) => {
  return data.orders.find((order) => {
    return orderId === order.orderId;
  });
};

const getProducts = () => {
  return data.products;
};

const getProduct = (productId) => {
  return data.products.find((product) => {
    return productId === product.productId;
  });
};

module.exports = {
  getOrders,
  getOrder,
  getProducts,
  getProduct,
};
