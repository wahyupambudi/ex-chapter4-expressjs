const express = require("express");
const router = express.Router();
const { TestUser } = require("../controller/user.controller");
// const UserController = require("../controller/user.controller");

// middleware
const {
	PrintSuccess,
	PrintSuccessRoute,
} = require("../middlqeware/middleware");
router.use(PrintSuccess);
// router.use(PrintSuccessRoute)

router.get("/", PrintSuccessRoute, TestUser);
router.post("/", PrintSuccessRoute, TestUser);
// router.get("/", UserController.TestUser);

module.exports = router;
