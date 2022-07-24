const { Router } = require("express");

const router = Router();

const AuthController = require("../controllers/AuthController");

// router.get("/signup", AuthController.signup_get);
router.post("/signup", AuthController.signup);
// router.get("/login", AuthController.login_get);
// router.post("/login", AuthController.login_post);

module.exports = router;
