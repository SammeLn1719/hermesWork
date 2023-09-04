const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const authJWT = require("../middleware/authJwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  //app.post("/api/auth/refresh",controller.refresh);
  app.post("/api/auth/signin", controller.signin);
  app.post("/api/auth/check",authJWT.verifyToken, controller.check);
  app.post("/api/auth/refresh",authJWT.verifyRefreshToken, controller.refresh);  
  app.post("/api/auth/logout", controller.logout);
};