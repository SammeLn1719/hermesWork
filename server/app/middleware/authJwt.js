const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const r_config = require("../config/refresh.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let token =  req.body.token;
  if (!token) {
    return res.status(403).send({
      message: req.body.token
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    next();
  });
};
verifyRefreshToken = (req, res, next) => {  
  token=req.cookies['refreshToken'];
  if (!token) {
    return res.status(403).send({
      message: req.cookies
    });
  }
  jwt.verify(token, r_config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    next();
  });
};


isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};


const authJwt = {
  verifyToken: verifyToken,
  verifyRefreshToken: verifyRefreshToken,
  isAdmin: isAdmin
};
module.exports = authJwt;