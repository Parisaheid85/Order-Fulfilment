const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { processOrders, reOrder } = require("./services/orderManagment");
const { getOrders, getProducts } = require("./database/ordersAndProducts");

app.use(bodyParser.json());

app.get("/orders", (req, res) => {
  res.json({ data: getOrders() });
});

app.post("/process-orders", (req, res) => {
  const orders = req.body;
  const result = processOrders(orders.orderIds);
  if (result.length > 0) {
    res.json({ unFulfilledOrders: result });
  } else {
    res.json({ status: "all order was fulfilled successfuly!" });
  }
});

app.listen(5000, () => console.log("Server is running"));
