const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.post("/users/register", userController.register);
router.post("/users/login", userController.login);
router.get("/users/logout", auth, userController.logout);

module.exports = router;
