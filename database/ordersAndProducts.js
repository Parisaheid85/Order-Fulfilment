let data = require("./data.json");
let products = data.products;
let orders = data.orders;

const getOrders = () => {
  return orders;
};

const getOrder = (orderId) => {
  return orders.find((order) => {
    return orderId === order.orderId;
  });
};

const updateOrder = (orderId, status) => {
  orders = orders.map((order) => {
    if (order.orderId === orderId) {
      order.status = status;
    }
    return order;
  });
};

const updateProduct = (productId, quantiy) => {
  products = products.map((product) => {
    if (product.productId === productId) {
      product.quantityOnHand = product.quantityOnHand - quantiy;
    }
    return product;
  });
};

const getProducts = () => {
  return products;
};

const getProduct = (productId) => {
  return products.find((product) => {
    return productId === product.productId;
  });
};

module.exports = {
  getOrders,
  getOrder,
  updateOrder,
  getProducts,
  getProduct,
  updateProduct,
};
