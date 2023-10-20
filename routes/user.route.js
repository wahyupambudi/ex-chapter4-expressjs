const express = require("express");
const router = express.Router();
const { TestUser } = require("../controller/user.controller");

router.get("/", TestUser);

module.exports = router;
