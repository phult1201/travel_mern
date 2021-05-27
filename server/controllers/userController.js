const Users = require("../models/userModel");

module.exports = {
  register: async (req, res) => {
    const newUser = new Users(req.body);
    await newUser.save((error, user) => {
      if (error) return res.status(400).json({ registerSuccess: false, msg: error });
      return res.status(201).json({ registerSuccess: true, msg: "Register success" });
    });
  },
  login: (req, res) => {
    Users.findOne({ email: req.body.email }).exec(async (err, user) => {
      if (!user) return res.status(401).json({ loginSuccess: false, msg: "User doesn't exists" });
      user.comparePassword(req.body.password).then(async (result) => {
        if (!result) return res.status(401).json({ loginSuccess: false, msg: "Wrong password" });
        user.generateToken();
        return res.cookie("x_auth", user.token).status(200).json({ loginSuccess: true, msg: "Login success" });
      });
    });
  },
  logout: (req, res) => {
    Users.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, result) => {
      if (err) return res.status(400).json({ error: err });
      res.clearCookie("x_auth");
      return res.status(200).json({ logoutSuccess: true });
    });
  },
};
