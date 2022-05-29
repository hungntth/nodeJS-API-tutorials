const express = require("express");
const router = express.Router();
const auth = require("./../App/Controllers/Auth")

router.post("/register", auth.Register)
router.post("/login", auth.Login)

module.exports = router