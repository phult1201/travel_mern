const Users = require("../models/userModel");

const auth = (req, res, next) => {
  let token = req.cookies.x_auth;
  Users.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.status(400).json({ isAuth: false, error: true });
    req.user = user;
    req.token = token;
    next();
  });
};

module.exports = auth;
