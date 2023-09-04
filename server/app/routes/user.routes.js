const { authJwt } = require("../middleware");
const product = require("../controllers/product.controller");
const user = require("../controllers/user.controller");
const sample = require("../controllers/sample.controller");
const admin = require("../controllers/admin.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "authorization, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/product/all", product.all);
  app.get("/api/product/id", product.id);//передавать в теле id товара
  app.get("/api/compound/id", product.compound);//передавать в теле id товара
  app.get("/api/product/review", product.review);//передавать в теле id товара
  
  app.get("/api/types", sample.type);
  app.get("/api/brands", sample.brand);
  app.get("/api/blog", sample.blog);//в теле передавать id блога
  
  //передавать в заголовке токен, функции пользователей
  //работа с корзиной
  app.get("/api/user/basket",[authJwt.verifyToken],user.returnBasket); //передавать в теле userId
  app.post("/api/user/basket",[authJwt.verifyToken],user.addBasket);  //передавать в теле userId,productId,quantity
  app.delete("/api/user/basket",[authJwt.verifyToken],user.deleteBasket);//передавать в теле userId, productId

  //работа с историей покупок
  app.get("/api/user/history",[authJwt.verifyToken],user.returnHistory);//передавать в теле userId
  app.post("/api/user/history",[authJwt.verifyToken],user.addHistory);  //передавать в теле userId,productId,quantity,cost
  app.delete("/api/user/history",[authJwt.verifyToken],user.deleteHistory); //передавать в теле userId, productId

  //работа пользователя с отзывами
  app.post("/api/product/review",[authJwt.verifyToken], product.addReview);//передавать в теле productId, userId, mark,text
  app.patch("/api/product/review",[authJwt.verifyToken], product.addReview);//передавать в теле id, productId, userId, mark,text
  app.delete("/api/product/review",[authJwt.verifyToken], product.deleteReview);//передавать в теле productId, userId

  //работа админа с продуктами
  app.post("/api/product",[authJwt.verifyToken,authJwt.isAdmin], admin.addProduct);//в теле передовать: name,info,cost,type,quantity,brand,amount_in_package,number_of_servings,number_in_servings,barcode,discounts,img
  app.patch("/api/product",[authJwt.verifyToken,authJwt.isAdmin], admin.updateProduct);//в теле передовать: id,name,info,cost,type,quantity,brand,amount_in_package,number_of_servings,number_in_servings,barcode,discounts,img
  app.delete("/api/product",[authJwt.verifyToken,authJwt.isAdmin], admin.deleteProduct);//в теле передовать id удаляемого продукта
  
  //работа админа с блогом
  app.post("/api/blog",[authJwt.verifyToken,authJwt.isAdmin], admin.addBlog);//в теле передавать : name, text блога
  app.patch("/api/blog",[authJwt.verifyToken,authJwt.isAdmin], admin.updateBlog);//в теле передавать id, name, text блога
  app.delete("/api/blog",[authJwt.verifyToken,authJwt.isAdmin], admin.deleteBlog);//в теле передовать id удаляемого блога
  
  //работа админа с типами
  app.post("/api/type",[authJwt.verifyToken,authJwt.isAdmin],admin.addType);// в теле передать name
  app.patch("/api/type",[authJwt.verifyToken,authJwt.isAdmin],admin.updateType);// в теле передать id
  app.delete("/api/type",[authJwt.verifyToken,authJwt.isAdmin],admin.deleteType);// в теле передать id

  //работа админа с брендами
  app.post("/api/brand",[authJwt.verifyToken,authJwt.isAdmin],admin.addBrand);// теле передать name
  app.patch("/api/brand",[authJwt.verifyToken,authJwt.isAdmin],admin.updateBrand);//в теле передать id
  app.delete("/api/brand",[authJwt.verifyToken,authJwt.isAdmin],admin.deleteBrand);// в теле передать id
  
};