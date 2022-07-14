const {
  getProducts,
  getProduct,
  updateProduct,
  getOrders,
  getOrder,
  updateOrder,
} = require("../database/ordersAndProducts");

const processOrders = (orderIds) => {
  // Reorder if number of stock available falls below reorderThreshold
  reOrderIfUnderTreshold(orderIds);

  return fullfillTheOrder(orderIds);
};

// fulfillthe the order
const fullfillTheOrder = (orderIds) => {
  return orderIds.filter((orderId) => {
    const order = getOrder(orderId);
    const ordersThatCannotBeFulfilled =
      getOrdersThatCannotBeFulfilled(orderIds);

    // if the availableQuantityInWarehouse includes items that cannot be fulfilled, the entire order will be marked as "Unfulfilled"
    if (ordersThatCannotBeFulfilled.length > 0) {
      console.log("cant", orderId);
      // it cannot be fulfilled
      // order status should be   "Unfulfilled"
      updateOrder(order.orderId, "Unulfilled");
      return true;
    } else {
      // it can be fulfilled yeahh
      order.items.forEach((item) => {
        updateProduct(item.productId, item.quantity);
        updateOrder(item.orderId, "Fulfilled");
      });
      return false;
    }
  });
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

const getOrdersThatCannotBeFulfilled = (orderId) => {
  return order.items.filter((item) => {
    const product = getProduct(item.productId);
    const availableQuantityInWarehouse = product.quantityOnHand;
    console.log(
      availableQuantityInWarehouse,
      "< ",
      item.quantity,
      item.productId
    );
    if (availableQuantityInWarehouse < item.quantity) {
      return true;
    }

    return false;
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
