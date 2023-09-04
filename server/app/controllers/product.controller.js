const db = require("../models");
const Product = db.product;
const Compound = db.compound;
const Review = db.review;
const Blog = db.blog;

exports.all = (req, res) => {
    Product.findAll({
        include: [{
            model: Compound
        }],
    }).then(products => {
        res.send(products);
    }).catch(err => console.log(err));
};
exports.id = (req, res) => {
    Product.findAll({
        where: {
            id: req.param('id')
        }, include: [{
            model: Compound
        }],
    }).then(products => {
        res.send(products);
    }).catch(err => console.log(err));
};

exports.review = (req, res) => {
    Review.findAll({
        where: {
            userId: req.body.userId,
        }
    }).then(review => {
        res.send(review);
    }).catch(err => console.log(err));
};
exports.addReview = (req, res) => {
    Review.Create({
        userId: req.body.userId,
        productId: req.body.productId,
        text: req.body.text,
        mark: req.body, mark
    }).then(review => {
        res.send(review);
    }).catch(err => console.log(err));
};
exports.updateReview = (req, res) => {
    Review.update({
        userId: req.body.userId,
        productId: req.body.productId,
        text: req.body.text,
        mark: req.body, mark
    }, { where: { id: req.body.id } }
    ).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};
exports.deleteReview = (req, res) => {
    Review.destroy({
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
exports.blog = (req, res) => {
    Blog.findAll({
        where: {
            id: req.body.id,
        }
    }).then(blog => {
        res.send(blog);
    }).catch(err => console.log(err));
};
exports.compound = (req, res) => {
    Compound.findAll({
        where: {
            productId: req.param('id')
        }
    }).then(products => {
        res.send(products);
    }).catch(err => console.log(err));
};