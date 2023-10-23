const express = require("express");
const router = express.Router();
const { TestUser, TestUserPost } = require("../controller/user.controller");
// const UserController = require("../controller/user.controller");

// middleware
const {
	// PrintSuccess,
	// PrintSuccessRoute,
	CheckPostReq,
} = require("../middleware/middleware");

// router.use(PrintSuccess);

router.get("/", TestUser);
router.post("/", CheckPostReq, TestUserPost);

// router.use(PrintSuccessRoute)

// router.get("/", PrintSuccessRoute, TestUser);
// router.post("/", CheckPostReq, TestUserPost);

// router.get("/", UserController.TestUser);

module.exports = router;
