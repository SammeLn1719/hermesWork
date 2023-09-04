const db = require("../models");
const config = require("../config/auth.config");
const rconfig = require("../config/refresh.config");

const user = db.user;
let COOKIE_OPTIONS = { httpOnly: true, sameSite: 'lax', secure: false, maxAge: 3600 * 24, };
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { json } = require("sequelize");
function JWT(user) {
  var token = jwt.sign({ id: user.id, username: user.username }, config.secret, {
    expiresIn: 86400 // 24 hours
  });
  return token;
}
function setRefresh(email_i) {
  let token = jwt.sign({ email: email_i }, rconfig.secret, {
    expiresIn: 86400 * 30// 24 hours
  })
  return token
}
function setCookie(res, r_token) {
  res.cookie('refreshToken', r_token, {
    maxAge: 120000,
    httpOnly: true,
    domain: 'localhost',
    secure: true,
    sameSite: 'none'
  });
}
exports.signup = (req, res) => {
  // Save user to Database
  let refresh = jwt.sign({ email: req.body.email }, rconfig.secret, {
    expiresIn: 86400 * 30// 24 hours
  });
  setCookie(res, refresh);
  user.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 5),
    role: req.body.role,
    refresh_token: refresh,
  }).then(
    token = JWT(user),
    res.send(token),
  )

};

exports.signin = (req, res) => {
  user.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (!user) {
      return res.status(404).send({ message: "user Not found." });
    }
    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }
    var token = JWT(user);
    user.refresh_token = setRefresh(req.body.email);
    user.save();

    setCookie(res, user.refresh_token),
      res.send(token)
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.check = (req, res, next) => {
  res.status(200).send({ message: "OK" })
};

exports.refresh = (req, res, next) => {

  user.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (!user) {
      return res.status(404).send({ message: "user Not found." });
    } else if (user.refresh_token != req.cookies['refreshToken']) {
      return res.status(404).send({ message: "invalid r_token" });
    } else {
      var token = JWT(user);
      user.refresh_token = setRefresh(req.body.email);
      user.save();
      setCookie(res, user.refresh_token),
        res.send(token)
    }
  })
};


exports.logout = (req, res) => {
  user.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (!user) {
      return res.status(404).send({ message: "user Not found." });
    }
    user.refresh_token = null;
    user.save();    
    return res.status(200).send({ message: "ok" });
  })
}




