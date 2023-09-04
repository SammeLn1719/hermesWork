const { where } = require("sequelize");
const db = require("../models");
const Product = db.product;
const Blog = db.blog;
const Type = db.type;
const Brand = db.brand;

exports.addProduct = (req, res) => {
    Product.Create({
        name: req.body.name,
        info: req.body.info,
        cost: req.body.cost,
        type: req.body.type,
        quantity: req.body.quantity,
        brand: req.body.brand,
        amount_in_package: req.body.amount_in_package,
        number_of_servings: req.body.number_of_servings,
        number_in_servings: req.body.number_in_servings,
        barcode: req.body.barcode,
        discounts: req.body.discounts,
        img: req.body.img
    }).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};
exports.updateProduct = (req, res) => {
    Project.update({
        name: req.body.name,
        info: req.body.info,
        cost: req.body.cost,
        type: req.body.type,
        quantity: req.body.quantity,
        brand: req.body.brand,
        amount_in_package: req.body.amount_in_package,
        number_of_servings: req.body.number_of_servings,
        number_in_servings: req.body.number_in_servings,
        barcode: req.body.barcode,
        discounts: req.body.discounts,
        img: req.body.img
    },
        { where: { id: req.body.id } }
    ).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
}
exports.deleteProduct = (req, res) => {
    Product.destroy({
        where: {
            id: req.body.id,
        }
    }).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};
exports.addBlog = (req, res) => {
    Blog.Create({
        name: req.body.name,
        text: req.body.text
    }).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};
exports.updateBlog = (req, res) => {
    Blog.update({
        name: req.body.name,
        text: req.body.text
    },
        { where: { id: req.body.id } }
    ).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};
exports.deleteBlog = (req, res) => {
    Blog.destroy({
        where: {
            id: req.body.id,
        }
    },
    { where: { id: req.body.id } }
    ).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};
exports.addType = (req, res) => {
    Type.Create({
        name: req.body.name,
    }).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};
exports.updateType = (req, res) => {
    Type.update({
        name: req.body.name,
    },
    { where: { id: req.body.id } }).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};
exports.deleteType = (req, res) => {
    Type.destroy({
        where: {
            id: req.body.id,
        }
    }).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};
exports.addBrand = (req, res) => {
    Brand.Create({
        name: req.body.name,
    }).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};
exports.updateBrand = (req, res) => {
    Brand.update({
        name: req.body.name,
    },
    { where: { id: req.body.id } }).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};
exports.deleteBrand = (req, res) => {
    Brand.destroy({
        where: {
            id: req.body.id,
        }
    }).success(result =>
        handleResult(result)
    ).error(err =>
        handleError(err)
    )
};