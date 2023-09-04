const db = require("../models");
const History = db.history;
const Basket = db.basket;
const Product = db.product;

exports.returnBasket = (req, res) => {
  Basket.findAll({
    where: {
      userId: req.body.userId,
    }, include: [{ model: Product }],
  }).then(basket => {
    res.send(basket);
  }).catch(err => console.log(err));
};
exports.addBasket = (req, res) => {
  Basket.create({
    quantity: req.body.quantity,
    userId: req.body.userId,
    productId: req.body.productId,
  }).then(basket => {
    res.send(basket);
  }).catch(err => console.log(err));
};
exports.deleteBasket = (req, res) => {
  Basket.destroy({
    where: {
      userId: req.body.userId,
      productId: req.body.productId
    }
  }).success(result =>
    handleResult(result)
  ).error(err =>
    handleError(err)
  )
};


exports.returnHistory = (req, res) => {
  History.findAll({
    where: {
      userId: req.body.userId,
    }, include: [{ model: Product }],
  }).then(history => {
    res.send(history);
  }).catch(err => console.log(err));
};
exports.addHistory = (req, res) => {
  History.create({
    userId: req.body.userId,
    productId: req.body.productId,
    quantity: req.body.quantity,
    cost: req.body.cost,
  }).then(history => {
    res.send(history);
  }).catch(err => console.log(err));
};
exports.deleteHistory = (req, res) => {
  History.destroy({
    where: {
      userId: req.body.userId,
      productId: req.body.productId
    }
  }).success(result =>
    handleResult(result)
  ).error(err =>
    handleError(err)
  )
};
