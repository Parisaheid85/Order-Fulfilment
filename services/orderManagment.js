const {
  getProducts,
  getProduct,
  getOrders,
  getOrder,
} = require("../database/ordersAndProducts");

const processOrders = (orderIds) => {
  // Reorder if number of stock available falls below reorderThreshold
  reOrderIfUnderTreshold(orderIds);

  // fulfillthe the order

  return true;
};

const reOrderIfUnderTreshold = (orderIds) => {
  orderIds.forEach((orderId) => {
    const order = getOrder(orderId);

    order.items.forEach((item) => {
      const product = getProduct(item.productId);
      const treshold = product.reorderThreshold;
      const quantityOnHand = product.quantityOnHand;
      const reorderAmount = product.reorderAmount;
      if (quantityOnHand < treshold) {
        reOrder(item.productId, reorderAmount);
      }
    });
  });
};

const reOrder = (productId, reorderAmount) => {
  // stubed function
  console.log(
    `${reorderAmount} items for productId ${productId} was successfully ordered `
  );
  return "success";
};

module.exports = {
  processOrders,
  reOrder,
};
