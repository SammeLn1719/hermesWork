const db = require("../models");
const Brand = db.brand;
const Type = db.type;
const Blog = db.blog;

exports.brand = (req,res) => {
    Brand.findAll({
    }).then(brands => {
        res.send(brands);
    }).catch(err => console.log(err));
};
exports.type = (req,res) => {
    Type.findAll({
    }).then(types => {
        res.send(types);
    }).catch(err => console.log(err));
};
exports.blog = (req,res) => {
    Blog.findAll({
        where: {
            id:req.body.id
        }
    }).then(blog => {
        res.send(blog);
    }).catch(err => console.log(err));
};


