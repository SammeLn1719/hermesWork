const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.product = require("../models/product.model.js")(sequelize, Sequelize);
db.compound = require("../models/compound.model.js")(sequelize, Sequelize);
db.basket = require("../models/basket.model.js")(sequelize, Sequelize);
db.blog = require("../models/blog.model.js")(sequelize, Sequelize);
db.review = require("../models/review.model.js")(sequelize, Sequelize);
db.history = require("../models/history.model.js")(sequelize, Sequelize);
db.brand = require("../models/brand.model.js")(sequelize, Sequelize);
db.type = require("../models/type.model.js")(sequelize, Sequelize);

db.product.hasMany(db.compound, {
  foreignKey: 'productId'
});db.compound.belongsTo(db.product);

db.product.hasMany(db.basket, {
  foreignKey: 'productId'
});db.basket.belongsTo(db.product);

db.user.hasMany(db.basket, {
  foreignKey: 'userId'
});db.basket.belongsTo(db.user);

db.product.hasMany(db.review, {
  foreignKey: 'productId'
});db.review.belongsTo(db.product);

db.user.hasMany(db.review, {
  foreignKey: 'userId'
});db.review.belongsTo(db.user);


db.product.hasMany(db.history, {
  foreignKey: 'productId'
});db.history.belongsTo(db.product);

db.user.hasMany(db.history, {
  foreignKey: 'userId'
});db.history.belongsTo(db.user);


module.exports = db;