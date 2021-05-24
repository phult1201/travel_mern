const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  email: { type: String, trim: true, unique: true },
  password: { type: String, minlength: 6 },
  lastname: { type: String, maxlength: 50 },
  role: { type: Number, default: 0 },
  token: { type: String },
  tokenExp: { type: Number },
});

userSchema.pre("save", function (next) {
  let user = this;
  if (user.isModified("password")) {
    bcrypt.hash(user.password, 10).then(function (hash) {
      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

userSchema.methods = {
  comparePassword: async function (plainTextPassword) {
    return await bcrypt.compare(plainTextPassword, this.password);
  },
  generateToken: async function () {
    let user = this;
    const token = jwt.sign(user._id.toHexString(), "secretkey");
    user.token = token;
    await user.save();
  },
};

userSchema.statics.findByToken = function (token, cb) {
  let user = this;
  jwt.verify(token, "secretkey", function (err, decode) {
    if (err) return cb(err);
    user.findOne({ _id: decode, token }, (err, user) => {
      if (err) return cb(err);
      return cb(null, user);
    });
  });
};

module.exports = mongoose.model("Users", userSchema);
