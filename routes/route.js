const express = require("express");
const router = express.Router();
const user = require("./user.route");

router.get("/ping", (req, res) => {
	// console.log(req)

	res.json({
		data: null,
		message: "PONG",
		status: 200,
	});
});

router.use("/user", user);

module.exports = router;
