const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");

router.get("/ping", (req, res) => {
	// console.log(req)

	res.json({
		data: null,
		message: "PONG",
		status: 200,
	});
});

router.use("/user", userRoute);

module.exports = router;
