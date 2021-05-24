const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.post("/users/register", userController.register);
router.post("/user/login", userController.login);
router.get("/user/logout", auth, userController.logout);

module.exports = router;
